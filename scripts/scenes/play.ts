module scenes {
    export abstract class PlayScene extends objects.Scene {
        private _map: objects.Map;
        private _topAnchor: number;
        private _bottomAnchor: number;
        private _leftAnchor: number;
        private _rightAnchor: number;

        protected _tooltips: ui.Tooltip[] = [];
        protected _enemies: animate.Enemy[];
        protected _projectiles: objects.Projectile[] = [];
        protected _obstra:objects.Destructible[]=[]; //for handling multiple crate object
        protected _player: animate.Player;

        get enemies(): animate.Enemy[] {
            return this._enemies;
        }
        get player(): animate.Player {
            return this._player;
        }

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
            this._player.update();
            this._checkBounds();

            this._tooltips.forEach(tooltip => {
                tooltip.update();
            });
            
            // Check for collisions
            this._updateEnemies();
            this._updateProjectiles();

            if (!this._player.isColliding) {
                this._player.lastValidPosition.x = this._player.x;
                this._player.lastValidPosition.y = this._player.y;
            }

            return managers.Game.currentScene;
        }

        public start() {
            this._topAnchor = managers.Game.TOP_ANCHOR;
            this._bottomAnchor = managers.Game.BOTTOM_ANCHOR;
            this._leftAnchor = managers.Game.LEFT_ANCHOR;
            this._rightAnchor = managers.Game.RIGHT_ANCHOR;
        }

        public main():void {
            this.addChild(this._map);
            this._enemies.forEach(enemy => {
                this.addChild(enemy);
            });
            this.addChild(this._player);
            this._tooltips.forEach(tooltip => {
                this.addChild(tooltip);
            });
            this._obstra.forEach(obstr => {
                this.addChild(obstr);
            });
        }

        private _checkBounds() {
            let moveX: number = 0;
            let moveY: number = 0;
            if (this._player.y <= this._topAnchor) {
                if (managers.Game.keyboardManager.moveForward) {
                    moveY = 5;
                }
            }
            if (this._player.y >= this._bottomAnchor) {
                if (managers.Game.keyboardManager.moveBackward) {
                    moveY = -5;
                }
            }

            if (this.x < 0 || this.x > this._map.width - managers.Game.WIDTH) {
                // Left & right boundary
                moveX = 0;
            }

            if (this.y > this._map.height - managers.Game.HEIGHT || this.y < 0) {
                // Top & bottom boundary
                moveY = 0;
            }

            this._move(moveX, moveY);
        }

        private _move(x:number=0, y:number=0) {
            this.x += x;
            this._leftAnchor -= x;
            this._rightAnchor -= x;

            this.y += y;
            this._topAnchor -= y;
            this._bottomAnchor -= y;
        }

        private onClick() {
            let playerPos = new math.Vec2(this._player.x, this._player.y);
            let targetPos = new math.Vec2(managers.Game.stage.mouseX, managers.Game.stage.mouseY);
            let newProjectile = new objects.Projectile("bullet", playerPos, targetPos);
            this._projectiles.push(newProjectile);
            this.addChild(newProjectile);
        }

        private _updateEnemies() {
            let keepers: animate.Enemy[] = [];

            this._enemies.forEach(enemy => {
                enemy.update();
                if (managers.Collision.check(this._player, enemy)) {
                    this._player.isColliding = true;
                }

                let pKeepers: objects.Projectile[] = [];                
                this._projectiles.forEach(projectile => {
                    if (managers.Collision.check(enemy, projectile)) {
                        this.removeChild(projectile);
                    } else {
                        pKeepers.push(projectile);
                    }
                    this._obstra.forEach(obstra=>{
                        if (managers.Collision.check(projectile,obstra)) {
                            //this.removeChild(projectile);
                            this.removeChild(obstra);
                        } 
                    });
                });
              
                this._projectiles = pKeepers;

                if (enemy.hp <= 0) {
                    this.removeChild(enemy);
                } else {
                    keepers.push(enemy);
                }
            });

            this._enemies = keepers;
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