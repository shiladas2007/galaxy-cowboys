 module scenes {
    export class GameOverScene extends scenes.StartScene {
        constructor() {
            super();
            this.start();
        }
       
    
       
        public start():void {
            this._background = new ui.Background("gameover");
            this._startButton2 = new ui.Button("startButton2", managers.Game.WIDTH * 0.5, 320, 1, true);
            this._startButton = new ui.Button("startButton", managers.Game.WIDTH * 0.5, 320, 0.1, true);
            this._finalScoreLabel = new ui.Label("Score: 0", "18pt", "Sporting Grotesque", "#FFFF00", 0, 250, false);                        
            this._finalScoreLabel.text= "Final Score: " +managers.Game.currentScore;
            this._finalScoreLabel.shadow = new createjs.Shadow("rgba(0,0,0,0.5)", 1, 2, 0);
            ui.centreHorizontal(this._finalScoreLabel);
            
            managers.Game.currentScore=0;
            this.main();
        }

        public Main():void {
            super.main();
           
        }

        protected _startButtonClick() {
            managers.Game.currentScene = managers.Game.currentPlayScene;
        }
    }
}