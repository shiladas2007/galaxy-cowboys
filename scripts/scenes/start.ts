module scenes {
    export class StartScene extends objects.Scene {
        protected _startButton: ui.Button;
        protected _startButton2: ui.Button;
        protected _background: ui.Background;
        protected _finalScoreLabel: ui.Label;
        
        constructor() {
            super();
            this.start();
        }

        public start():void {
            this._background = new ui.Background("background");
            this._startButton2 = new ui.Button("startButton2", 300, 240);
            this._startButton = new ui.Button("startButton", 300, 240, 0.1);             
            this._finalScoreLabel = new ui.Label("Score: 0", "14pt", managers.Style.FONT_FAMILY_PRIMARY,
                managers.Style.FONT_COLOUR_PRIMARY, 150, 250, false);            
            this._finalScoreLabel.visible=false;
            this.main();
        }

        public update():number {
            return managers.Game.currentScene;
        }

        public main():void {
            this.addChildAt(this._background, managers.Game.INDEX_BACKGROUND);
            this.addChildAt(this._startButton2, managers.Game.INDEX_GAMEOBJECTS);
            this.addChildAt(this._startButton, managers.Game.INDEX_UI);
            this.addChildAt(this._finalScoreLabel, managers.Game.INDEX_UI);

            managers.Game.backgroundMusic = "menu";
            this._startButton.on("click", this._startButtonClick);
        }

        protected _startButtonClick():void {                        
            managers.Game.currentScene = config.Scene.LEVEL1;
        }
    }
}