module scenes {
    export class SelectScene extends objects.Scene {
        private _select1: ui.Selection;
        private _select2: ui.Selection;
        private _background: ui.Background;
        private _lblPrompt: ui.Label;

        constructor() {
            super();
            this.start();
        }

        public start() {
            this._background = new ui.Background("mapLevel3");
            this._overlay = new createjs.Shape(
                new createjs.Graphics().beginFill("rgba(0,0,0,0.5)")
                .drawRect(0, 0, managers.Game.WIDTH, managers.Game.HEIGHT)
            );

            let selectionWidth: number = managers.Game.WIDTH * 0.45;
            let selectionHeight: number = managers.Game.HEIGHT * 0.75;
            this._select1 = new ui.Selection(20, 20, selectionWidth, selectionHeight,
                "Gunslinger Sam", "- Quick fire rate\n- Slow", "\"Pew pew!\"",
                new createjs.Sprite(managers.Game.textureAtlas, "cowboy1"));

            this._select2 = new ui.Selection(0, 20, selectionWidth, selectionHeight,
                "Quicksilver Johnny", "- Slow fire rate\n- Quick", "\"Zoom zoom!\"",
                new createjs.Sprite(managers.Game.textureAtlas, "cowboy2"));
            this._select2.x = managers.Game.WIDTH - this._select2.width - 20;

            this._lblPrompt = new ui.Label("Choose your cowboy for level 3!", "16pt", "Sporting Grotesque", "#ffff00");
            ui.centreHorizontal(this._lblPrompt);
            this._lblPrompt.y = 420;
            this._lblPrompt.shadow = new createjs.Shadow("rgba(0,30,80,0.7)", 1, 2, 0);

            this.main();
        }

        public main() {
            this.addChildAt(this._background, managers.Game.INDEX_BACKGROUND);
            this.addChild(this._overlay);
            this.addChild(this._select1);
            this.addChild(this._select2);
            this.addChild(this._lblPrompt);
            this._select1.on("click", () => {
                managers.Game.currentPlayerType = config.Character.GUNSLINGER;
                managers.Game.currentScene = config.Scene.LEVEL3;
            });
            this._select2.on("click", () => {
                managers.Game.currentPlayerType = config.Character.QUICKSILVER;
                managers.Game.currentScene = config.Scene.LEVEL3;
            });
        }
    }
}