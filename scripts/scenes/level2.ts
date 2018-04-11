module scenes {
    export class Level2 extends scenes.PlayScene {
        private _tooltip:ui.Tooltip;
       // private _scoreboard: managers.ScoreBoard;
        constructor() {
            super("mapLevel2");
            this.start();
        }

        public start():void {
            super.start();
            
            console.log("Initializing enemies...");            
            this._enemies = [
                new animate.Enemy(config.Enemy.GUARD,120,140),
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
                "Use WASD and arrow keys to move.\n\nPress SPACE for the next tip.",
                "Left-click to shoot.\n\nUse your trusty revolver to shoot the aliens, Gunslinger Sam!"
            ]; 
            this._tooltips = [
                new ui.Tooltip("tooltipBg", tooltipMessages)
            ];

            this.main();
        }

        public update():number {
            super.update();

            if (!this._enemies.length) {
                managers.Game.currentScene = config.Scene.LEVEL3;
            }

            return managers.Game.currentScene;
        }

        public main():void {
            super.main();
        }
    }
}