module scenes {
    export class Level2 extends scenes.PlayScene {
        private _tooltip:ui.Tooltip;
       // private _scoreboard: managers.ScoreBoard;
        constructor() {
            super("mapLevel2");
            managers.Game.currentPlayScene = config.Scene.LEVEL2;
            this.title = "Level 2"
            this.start();
        }

        public start():void {
            super.start();           
            managers.Game.scoreBoard.Score=managers.Game.currentScore; 
            console.log("Initializing enemies...");            
            this._enemies = [
                new animate.Enemy(config.Enemy.GUARD,180,140),
                new animate.Enemy(config.Enemy.GUARD,320,240),
                new animate.Enemy(config.Enemy.GUARD,500,100),
                new animate.Enemy(config.Enemy.GUARD,237,-200),
                new animate.Enemy(config.Enemy.WATCHER,400,-270),
            ];
            console.log("Enemies initialized.");

            console.log("Initializing player...");
            this._player = new animate.Player(config.Character.QUICKSILVER, 100, 420);
            console.log("Player initialized.");

            let tooltipMessages: string[] = [
                "This is Quicksilver Johnny. He's quicker than Sam and uses his shotgun to shoot.",
                "His shotgun fires slower than Sam's revolver, but really packs a punch!"
            ]; 
            this._tooltips = [
                new ui.Tooltip("tooltipBg", tooltipMessages)
            ];

            this.main();
        }

        public update():number {
            super.update();

            if (!this._enemies.length) {
                managers.Game.currentScene = config.Scene.SELECT;
            }

            return managers.Game.currentScene;
        }

        public main():void {
            super.main();
        }
    }
}