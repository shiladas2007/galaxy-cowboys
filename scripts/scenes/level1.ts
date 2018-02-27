module scenes {
    export class Level1 extends scenes.PlayScene {
        private _controlsIntroduck: ui.Image;
        private _hasPlayerMoved: boolean = false;

        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "mapLevel1");
            this.Start();
        }

        public Start():void {
            console.log("Initializing enemies...");            
            this._enemies = [
                new animate.Enemy(this.assetManager,config.Enemy.GUARD,100,50),
                new animate.Enemy(this.assetManager,config.Enemy.WATCHER,220,180),
                new animate.Enemy(this.assetManager,config.Enemy.PATROLLER,540,150)
            ];
            console.log("Enemies initialized.");

            console.log("Initializing player...");
            this._player = new animate.Player(this.assetManager, "cowboy1", 1, 1, 100, 420);
            console.log("Player initialized.");

            this._controlsIntroduck = new ui.Image(this.assetManager, "controlsIntroduck", 120, 280);

            this.Main();
        }

        public Update():number {
            super.Update();

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
            super.Main();
            this.addChild(this._controlsIntroduck);
        }
    }
}