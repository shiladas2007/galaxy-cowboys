module scenes {
    export abstract class PlayScene extends objects.Scene {
        private _map: objects.Map;
        protected _enemies: animate.Enemy[];
        protected _projectiles: objects.Projectile[] = [];
        protected _player: animate.Player;

        constructor(mapString:string) {
            super();
            this._map = new objects.Map(mapString);
            managers.Game.isPlaying = true;
            this.on("click", this.onClick);
        }

        public update():number {
            if (managers.Game.keyboardManager.paused) {
                return managers.Game.currentScene;
            }

            // TODO: centralize collision check
            this._player.isColliding = false;
            this._map.update();
            this._player.update();
            
            // Check for collisions
            this._updateEnemies();
            this._updateProjectiles();

            if (!this._player.isColliding) {
                this._player.lastValidPosition.x = this._player.x;
                this._player.lastValidPosition.y = this._player.y;
            }


            return managers.Game.currentScene;
        }

        public main():void {
            this.addChild(this._map);
            this._enemies.forEach(enemy => {
                this.addChild(enemy);
            });
            this.addChild(this._player);
        }

        private onClick() {
            let playerPos = new math.Vec2(this._player.x, this._player.y);
            let targetPos = new math.Vec2(managers.Game.stage.mouseX, managers.Game.stage.mouseY);
            let newProjectile = new objects.Projectile("bullet", playerPos, targetPos);
            this._projectiles.push(newProjectile);
            this.addChild(newProjectile);
        }

        private _updateEnemies() {
            this._enemies.forEach(enemy => {
                enemy.update();
                if (managers.Collision.check(this._player, enemy)) {
                    this._player.isColliding = true;
                }

                this._projectiles.forEach(projectile => {
                    if (managers.Collision.check(enemy, projectile)) {
                        this.removeChild(projectile);
                    }
                });
            });
        }

        private _updateProjectiles() {
            if (this._projectiles.length) {
                let keepers: objects.Projectile[] = [];
                this._projectiles.forEach(projectile => {
                    projectile.update();

                    // If off-screen, remove projectile
                    if (projectile.y >= managers.Game.BOTTOM_BOUNDARY + projectile.halfHeight ||
                        projectile.y <= managers.Game.TOP_BOUNDARY - projectile.halfHeight ||
                        projectile.x >= managers.Game.RIGHT_BOUNDARY + projectile.halfWidth ||
                        projectile.x <= managers.Game.LEFT_BOUNDARY - projectile.halfWidth) {
                            this.removeChild(projectile);
                    } else {
                        keepers.push(projectile);
                    }
                });
                this._projectiles = keepers;
            }
        }
    }
}