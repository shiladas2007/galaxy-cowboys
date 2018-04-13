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
            this.main();
        }

        public Main():void {
            super.main();
        }
    }
}