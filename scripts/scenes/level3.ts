module scenes {
    export class Level3 extends scenes.PlayScene {
        private _tooltip:ui.Tooltip;

        constructor() {
            super("mapLevel3");
            managers.Game.currentPlayScene = config.Scene.LEVEL3;
            this.title = "Level 3";
            this.start();
        }

        public start():void {
            super.start();
            managers.Game.scoreBoard.Score=managers.Game.currentScore; 
            console.log("Initializing enemies...");            
            this._enemies = [
                new animate.Enemy(config.Enemy.GUARD,120,140),
                new animate.Enemy(config.Enemy.WATCHER,500,340),
                new animate.Enemy(config.Enemy.PATROLLER,100,100,300,100),
                new animate.Enemy(config.Enemy.WATCHER,240,-350)
            ];
           
            console.log("Enemies initialized.");

            console.log("Initializing player...");
            this._player = new animate.Player(config.Character.QUICKSILVER, 100, 420);
            console.log("Player initialized.");

            this._obstra=[
                new  objects.Destructible("crate",1,310,140),
                new  objects.Destructible("crate",1,260,220),
                new  objects.Destructible("crate",1,560,90)
            ];
            this.main();
        }

        public update():number {
            super.update();

            if (!this._enemies.length) {
                //managers.Game.currentScene = config.Scene.BOSS;
                //managers.Game.currentScene=config.Scene.GAMEOVER;
            }

            return managers.Game.currentScene;
        }

        public main():void {
            super.main();
        }
    }
}