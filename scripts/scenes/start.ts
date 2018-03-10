module scenes {
    export class StartScene extends objects.Scene {
        protected _startButton: ui.Button;
        protected _startButton2: ui.Button;
        protected _background: ui.Background;
        
        constructor() {
            super();
            this.start();
        }

        public start():void {
            this._background = new ui.Background(this.assetManager, "background");
            this._startButton2 = new ui.Button(this.assetManager, "startButton2", 300, 240);
            this._startButton = new ui.Button(this.assetManager, "startButton", 300, 240, 0.1); 
            this.main();
        }

        public update():number {
            return managers.Game.currentScene;
        }

        public main():void {
            this.addChild(this._background);
            this.addChild(this._startButton2);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick);
        }

        private _startButtonClick():void {
            managers.Game.currentScene = config.Scene.LEVEL1;
        }
    }
}