module scenes {
    export class StartScene extends objects.Scene {
        private _welcomeLabel: ui.Label;
        private _startButton: ui.Button;
        private _background: ui.Background;
        
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        public Start():void {
            this._background = new ui.Background(this.assetManager);
            this._welcomeLabel = new ui.Label("Welcome to Galaxy CowBoys", "60px", "Consolas", "#000000", 320, 240, true);
            this._startButton = new ui.Button(this.assetManager, "startButton", 180, 300);
            this.Main();
        }

        public Update():number {
            return objects.Game.currentScene;
        }

        public Main():void {
            this.addChild(this._background);

            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick);
        }

        private _startButtonClick():void {
            objects.Game.currentScene = config.Scene.LEVEL1;
        }
    }
}