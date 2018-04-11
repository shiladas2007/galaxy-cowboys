module scenes {
    export class Level1 extends scenes.PlayScene {
        private _controlsIntroduck: ui.Image;
        private _hasPlayerMoved: boolean = false;
        //private _scoreboard: managers.ScoreBoard;

        constructor() {
            super("mapLevel1");
            this.start();
        }

        public start():void {
            super.start();
          //  this._scoreboard = new managers.ScoreBoard();
           
           
            console.log("Initializing enemies...");            
            this._enemies = [
                new animate.Enemy(config.Enemy.GUARD,310,40),
                new animate.Enemy(config.Enemy.GUARD,260,120),
                new animate.Enemy(config.Enemy.GUARD,560,190)
            ];
            console.log("Enemies initialized.");

            this._obstra = [
                new objects.Destructible("crate", 1, 100, 200)
            ];

            console.log("Initializing player...");
            this._player = new animate.Player(config.Character.GUNSLINGER, 100, 420);
            console.log("Player initialized.");

            // Initialize
            let tooltipMessages: string[] = [
                "Use WASD and arrow keys to move. Press SPACE for the next tip.",
                "Left-click to shoot. Shoot the aliens to move on."
            ]; 
            this._tooltips = [
                new ui.Tooltip("tooltipBg", tooltipMessages)
            ];

            this._controlsIntroduck = new ui.Image("controlsIntroduck", 120, 280);
            
            this.main();
        }

        public update():number {
            super.update();

            // Make controls intro bubble disappear when player moves
            if (!this._hasPlayerMoved) {
                if (managers.Game.keyboardManager.moveForward || managers.Game.keyboardManager.moveBackward
                    || managers.Game.keyboardManager.moveLeft || managers.Game.keyboardManager.moveRight) {
                    this._hasPlayerMoved = true;
                    this.removeChild(this._controlsIntroduck);
                }
            }

            if (!this._enemies.length) {
                managers.Game.currentScene = config.Scene.LEVEL2;
               
                console.log("ss"+managers.Game.scoreBoard.Score);
            }

            return managers.Game.currentScene;
        }

        public main():void {
            super.main();
            this.addChild(this._controlsIntroduck);           
        }
    }
}