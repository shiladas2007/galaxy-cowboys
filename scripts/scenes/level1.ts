module scenes {
    export class Level1 extends scenes.PlayScene {
        private _controlsIntroduck: ui.Image;
        private _hasPlayerMoved: boolean = false;

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
            
            return managers.Game.currentScene;
        }

        public main():void {
            super.main();
            this.addChild(this._controlsIntroduck);
        }
    }
}