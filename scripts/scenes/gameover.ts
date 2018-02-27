module scenes {
    export class GameOverScene extends objects.Scene {
        private _startButton: ui.Button;
        private _startButton2: ui.Button;
        private _background: ui.Background;

        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        public Start():void {
            this._background = new ui.Background(this.assetManager, "gameover");
            this._startButton2 = new ui.Button(this.assetManager, "startButton2", objects.Game.WIDTH / 2, 320, 1, true);
            this._startButton = new ui.Button(this.assetManager, "startButton", objects.Game.WIDTH / 2, 320, 0.1, true); 
            this.Main();
        }

        public Update():number {
            return objects.Game.currentScene;
        }

        public Main():void {
            this.addChild(this._background);
            this.addChild(this._startButton2);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick);
        }

        private _startButtonClick():void {
            objects.Game.currentScene = config.Scene.LEVEL1;
        }
    }
}