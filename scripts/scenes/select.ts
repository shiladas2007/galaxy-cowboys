module scenes {
    export class SelectScene extends StartScene {
        public start() {
            this._background = new ui.Background("mapLevel3");
            this._startButton2 = new ui.Button("startButton2", managers.Game.WIDTH * 0.5, 320, 1, true);
            this._startButton = new ui.Button("startButton", managers.Game.WIDTH * 0.5, 320, 0.1, true);
            this.main();
        }

    }
}