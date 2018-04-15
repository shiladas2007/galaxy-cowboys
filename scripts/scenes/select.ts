module scenes {
    export class SelectScene extends objects.Scene {
        private _select1: ui.Selection;
        private _select2: ui.Selection;
        private _background: ui.Background;

        constructor() {
            super();
            this.start();
        }

        public start() {
            this._background = new ui.Background("mapLevel3");

            let selectionWidth: number = managers.Game.WIDTH * 0.45;
            let selectionHeight: number = managers.Game.HEIGHT * 0.75;
            this._select1 = new ui.Selection(20, 20, selectionWidth, selectionHeight,
                "Gunslinger Sam", "- Slow\n- Quick fire rate", new createjs.Sprite(managers.Game.textureAtlas, "cowboy1"));

            this._select2 = new ui.Selection(0, 20, selectionWidth, selectionHeight,
                "Quicksilver Johnny", "- Quick\n- Slow fire rate", new createjs.Sprite(managers.Game.textureAtlas, "cowboy2"));
            this._select2.x = managers.Game.WIDTH - this._select2.width - 20;

            this.main();
        }

        public main() {
            this.addChildAt(this._background, managers.Game.INDEX_BACKGROUND);
            this.addChild(this._select1);
            this.addChild(this._select2);
        }
    }
}