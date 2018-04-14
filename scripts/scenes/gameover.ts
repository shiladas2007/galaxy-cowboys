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
            this._finalScoreLabel = new ui.Label("Score: 0", "18pt", "Sporting Grotesque", "#FF00FF", 150, 250, false);                        
            this._finalScoreLabel.text= "Final Score: " +managers.Game.currentScore;
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