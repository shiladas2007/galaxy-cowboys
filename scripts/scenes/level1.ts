module scenes {
    export class Level1 extends scenes.PlayScene {
        private _enemies: animate.Enemy[];
        private _player: animate.Player;
        private _controlsIntroduck: ui.Image;
        private _hasPlayerMoved: boolean = false;

        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        public Start():void {
            this._map = new objects.Map(this.assetManager, "mapLevel1");
            console.log("Initializing enemies...");            
            this._enemies = [
                new animate.Enemy(this.assetManager,"enemy1",1,1,100,50),
                new animate.Enemy(this.assetManager,"enemy2",1,1,220,180),
                new animate.Enemy(this.assetManager,"enemy3",1,1,540,150)
            ];
            console.log("Enemies initialized.");

            console.log("Initializing player...");
            this._player = new animate.Player(this.assetManager, "cowboy1", 1, 1, 100, 420);
            console.log("Player initialized.");

            this._controlsIntroduck = new ui.Image(this.assetManager, "controlsIntroduck", 120, 280);

            this.Main();
        }

        public Update():number {
            this._player.Update();
            this._map.Update();

            // Check for collisions
            this._enemies.forEach(enemy => {
                enemy.Update();
                
                if (managers.Collision.Check(this._player, enemy)) {
                    this._player.Hp -= 1;
                    if (this._player.Hp <= 0) {
                        objects.Game.currentScene = config.Scene.GAMEOVER;
                    }
                }
            });

            // Make controls intro bubble disappear when player moves
            if (!this._hasPlayerMoved) {
                if (objects.Game.keyboardManager.moveForward || objects.Game.keyboardManager.moveBackward
                    || objects.Game.keyboardManager.moveLeft || objects.Game.keyboardManager.moveRight) {
                    this._hasPlayerMoved = true;
                    this.removeChild(this._controlsIntroduck);
                }
            }
            
            return objects.Game.currentScene;
        }

        public Main():void {
            this.addChild(this._map);
            this._enemies.forEach(enemy => {
                this.addChild(enemy);
            });
            this.addChild(this._player);
            this.addChild(this._controlsIntroduck);
        }
    }
}