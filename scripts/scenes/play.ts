module scenes {
    export abstract class PlayScene extends objects.Scene {
        private _map: objects.Map;
        private _topAnchor: number;
        private _bottomAnchor: number;
        private _leftAnchor: number;
        private _rightAnchor: number;
        private _dx: number = 5;
        private _dy: number = 5;
        private _scoreBoard: managers.ScoreBoard;

        protected _tooltips: ui.Tooltip[] = [];
        protected _enemies: animate.Enemy[];
        protected _projectiles: objects.Projectile[] = [];
        protected _obstra:objects.Destructible[]=[]; //for handling multiple crate object
        protected _player: animate.Player;
        protected _powerup:objects.Powerup;

        get topBoundary(): number {
            return this._topAnchor - managers.Game.TOP_ANCHOR;
        }
        get bottomBoundary(): number {
            return this._bottomAnchor + (managers.Game.HEIGHT - managers.Game.BOTTOM_ANCHOR);
        }
        get leftBoundary(): number {
            return this._leftAnchor - managers.Game.LEFT_ANCHOR;
        }
        get rightBoundary(): number {
            return this._rightAnchor + managers.Game.RIGHT_ANCHOR;
        }
        
        get enemies(): animate.Enemy[] {
            return this._enemies;
        }
        get player(): animate.Player {
            return this._player;
        }
        get projectiles(): objects.Projectile[] {
            return this._projectiles;
        }
        get tooltips(): ui.Tooltip[] {
            return this._tooltips;
        }

        constructor(mapString:string) {
            super();
            this._map = new objects.Map(mapString);
            managers.Game.isPlaying = true;
            this.on("click", this._onClick);
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
            this._updateObstra();

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
            this._scoreBoard = new managers.ScoreBoard();
            managers.Game.scoreBoard = this._scoreBoard;
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
            this.addChild(this._scoreBoard);
        }

        public addProjectile(projectile:objects.Projectile) {
            this._projectiles.push(projectile);
            this.addChild(projectile);
        }

        private _checkBounds() {
            let moveX: number = 0;
            let moveY: number = 0;
            if (this._player.y <= this._topAnchor) {
                if (managers.Game.keyboardManager.moveForward) {
                    if (!(this.y + this._dy > this._map.height - managers.Game.HEIGHT)) {
                        moveY = this._dy;
                    }
                }
            }
            if (this._player.y >= this._bottomAnchor) {
                if (managers.Game.keyboardManager.moveBackward) {
                    if (!(this.y - this._dy < this.bottomBoundary)) {
                        moveY = -this._dy;
                    }
                }
            }

            if (this.x < 0 || this.x > this._map.width - managers.Game.WIDTH) {
                // Left & right boundary
                moveX = 0;
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
            this._scoreBoard.y -= y;
        }

        private _onClick() {
            this._player.attack();
        }

        public destroyAll() {
            this._projectiles.forEach(projectile => {
                projectile.destroy();
                this.removeObject(projectile);
            });
            this._enemies.forEach(enemy => {
                enemy.destroy();
                this.removeObject(enemy);
            });
            this._obstra.forEach(obstra => {
                obstra.destroy();
                this.removeObject(obstra);
            });
        }

        private _updateEnemies() {
            let keepers: animate.Enemy[] = [];

            this._enemies.forEach(enemy => {
                enemy.update();
                if (managers.Collision.check(this._player, enemy)) {
                    this._player.isColliding = true;
                }
             
                this._projectiles.forEach(projectile => {
                    if (projectile.name == "bullet") {
                        if (managers.Collision.check(enemy, projectile)) {
                            this.removeObject(projectile);
                        }
                    }
                });

                if (enemy.hp <= 0) {
                    enemy.destroy();
                    this.removeObject(enemy);
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

                    managers.Collision.check(projectile, this._player);
                    this._obstra.forEach(obstra => {
                        if (projectile.name == "bullet") {
                            if (managers.Collision.check(obstra, projectile)) {
                                this.removeObject(projectile);
                            }
                        }
                    });

                    if (projectile.isDestroyed) {
                        this.removeObject(projectile);
                    } else {
                        keepers.push(projectile);
                    }
                });
                this._projectiles = keepers;
            }
        }

        private _updateObstra() {
            this._obstra.forEach(obstra => {
                managers.Collision.check(obstra, this._player);
            });
        }
    }
}