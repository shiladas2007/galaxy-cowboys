module scenes {
    export class GameOverScene extends scenes.StartScene {

        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        public Start():void {
            super.Start();
            this._background = new ui.Background(this.assetManager, "gameover");
            this._startButton2 = new ui.Button(this.assetManager, "startButton2", objects.Game.WIDTH * 0.5, 320, 1, true);
            this._startButton = new ui.Button(this.assetManager, "startButton", objects.Game.WIDTH * 0.5, 320, 0.1, true); 
            this.Main();
        }

        public Main():void {
            super.Main();
        }
    }
}