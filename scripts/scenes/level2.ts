module scenes {
    export class Level2 extends scenes.PlayScene {
        private _tooltip:ui.Tooltip;

        constructor() {
            super("mapLevel2");
            this.start();
        }

        public start():void {
            console.log("Initializing enemies...");            
            this._enemies = [
                new animate.Enemy(config.Enemy.GUARD,120,140),
                new animate.Enemy(config.Enemy.WATCHER,320,340),
                new animate.Enemy(config.Enemy.PATROLLER,500,100)
            ];
            console.log("Enemies initialized.");

            console.log("Initializing player...");
            this._player = new animate.Player(config.Character.GUNSLINGER, 100, 420);
            console.log("Player initialized.");

            this.main();
        }

        public update():number {
            super.update();

            // Manage tooltip
            if (managers.Game.keyboardManager.nextTutorial)
            {               
                this.removeChild(this._tooltip);
                //this._tooltip = new ui.Tooltip("tooltipBg",430,370,"Use Left-click to shoot. Press 'c' for closing this tutorial",false);
                this.addChild(this._tooltip);
            }
            if (managers.Game.keyboardManager.closeTutorial)
            {               
                this.removeChild(this._tooltip);
            }

            if (!this._enemies.length) {
                //managers.Game.currentScene = config.Scene.LEVEL2;
            }

            return managers.Game.currentScene;
        }

        public main():void {
            super.main();
            //this._tooltip = new ui.Tooltip("tooltipBg", 430, 370, "Use WASD and arrow keys to move. Press 'n' for next tutorial. Or 'c' for closing this tutorial.");                    
            //this.addChild(this._tooltip);
        }
    }
}