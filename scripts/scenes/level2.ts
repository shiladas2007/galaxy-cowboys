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
                new animate.Enemy(config.Enemy.WATCHER,500,100),
                new animate.Enemy(config.Enemy.GUARD,237,-200)
            ];
            console.log("Enemies initialized.");

            console.log("Initializing player...");
            this._player = new animate.Player(config.Character.GUNSLINGER, 100, 420);
            console.log("Player initialized.");

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