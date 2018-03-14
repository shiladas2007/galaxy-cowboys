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

        public start():void {
            
        }

        public update():number {
            if (managers.Game.keyboardManager.paused) {
                return managers.Game.currentScene;
            }

            // TODO: centralize collision check
            this._player.isColliding = false;
            this._map.update();
            this._player.update();

            if (this._projectiles.length) {
                this._projectiles.forEach(projectile => {
                    projectile.update();
                    if (this.y >= managers.Game.BOTTOM_BOUNDARY - projectile.halfHeight ||
                        this.y <= managers.Game.TOP_BOUNDARY + projectile.halfHeight ||
                        this.x >= managers.Game.RIGHT_BOUNDARY - projectile.halfWidth ||
                        this.x <= managers.Game.LEFT_BOUNDARY + projectile.halfWidth) {
                            
                    }
                })
            }
            
            // Check for collisions
            this._enemies.forEach(enemy => {
                enemy.update();
                if (managers.Collision.check(this._player, enemy)) {
                    this._player.isColliding = true;
                }
            });
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
    }
}