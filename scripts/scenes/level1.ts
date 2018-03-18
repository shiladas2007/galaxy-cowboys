module scenes {
    export class Level1 extends scenes.PlayScene {
        private _controlsIntroduck: ui.Image;
        private _hasPlayerMoved: boolean = false;
        protected _tooltip:ui.Tooltip;

        constructor() {
            super("mapLevel1");
            this.start();
        }

        public start():void {
            console.log("Initializing enemies...");            
            this._enemies = [
                new animate.Enemy(config.Enemy.GUARD,100,50),
                new animate.Enemy(config.Enemy.WATCHER,220,180),
                new animate.Enemy(config.Enemy.PATROLLER,540,150)
            ];
            console.log("Enemies initialized.");

            console.log("Initializing player...");
            this._player = new animate.Player(config.Character.GUNSLINGER, 100, 420);
            console.log("Player initialized.");

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

            // Manage tooltip
            if(managers.Game.keyboardManager.nextTutorial)
            {               
                this.removeChild(this._tooltip);
                this._tooltip = new ui.Tooltip("tooltipBg",430,370,"Use Left-click to shoot. Press 'c' for closing this tutorial",false);
                this.addChild(this._tooltip);
            }
            if(managers.Game.keyboardManager.closeTutorial)
            {               
                this.removeChild(this._tooltip);
            }

            return managers.Game.currentScene;
        }

        public main():void {
            super.main();
            this.addChild(this._controlsIntroduck);
            this._tooltip = new ui.Tooltip("tooltipBg", 430, 370, "Use WASD and arrow keys to move. Press 'n' for next tutorial. Or 'c' for closing this tutorial.");                    
            this.addChild(this._tooltip);
        }
    }
}