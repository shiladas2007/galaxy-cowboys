module scenes {
    export class GameOverScene extends scenes.StartScene {

        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.start();
        }

        public start():void {
            super.start();
            this._background = new ui.Background(this.assetManager, "gameover");
            this._startButton2 = new ui.Button(this.assetManager, "startButton2", managers.Game.WIDTH * 0.5, 320, 1, true);
            this._startButton = new ui.Button(this.assetManager, "startButton", managers.Game.WIDTH * 0.5, 320, 0.1, true); 
            this.main();
        }

        public Main():void {
            super.main();
        }
    }
}