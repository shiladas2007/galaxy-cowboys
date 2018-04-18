module scenes {
    export class TutorialPage {
        // text: text to display in the tutorial page
        // func: function to call in the tutorial page (e.g. function with animation to play)
        constructor (public text:string, public func:()=>void) {}
    }

    export class TutorialScene extends objects.Scene {
        private _background: ui.Background;
        private _lblPrompt: ui.Label;
        private _nextButton: ui.Button;
        private _closeButton: ui.Button;

        private _pages: TutorialPage[];
        private _pageIndex: number = 0;
        private _nextScene: config.Scene;

        get pages(): TutorialPage[] {
            return this._pages;
        }

        constructor(map:string, pages:TutorialPage[], nextScene:config.Scene) {
            super();
            this._background = new ui.Background(map);
            this._pages = pages;
        }

        public start() {
            this._overlay = new createjs.Shape(
                new createjs.Graphics().beginFill(managers.Style.SHADOW_COLOUR_PRIMARY)
                .drawRect(0, 0, managers.Game.WIDTH, managers.Game.HEIGHT)
            );

            this._closeButton = new ui.Button("close", managers.Game.WIDTH, 20, 0.7);
            this._closeButton.x -= this._closeButton.width + 20;

            this._lblPrompt = new ui.Label(this._pages[0].text, "16pt",
                managers.Style.FONT_FAMILY_PRIMARY, managers.Style.FONT_COLOUR_SECONDARY);
            ui.centreHorizontal(this._lblPrompt);
            this._lblPrompt.y = 400;
            this._lblPrompt.shadow = new createjs.Shadow(managers.Style.SHADOW_COLOUR_PRIMARY, 1, 2, 0);
            this.main();
        }

        public main() {
            this.addChildAt(this._background, managers.Game.INDEX_BACKGROUND);
            this.addChild(this._overlay);
            this.addChild(this._lblPrompt);

            this._closeButton.on("click", () => { this.finish(); });
            this._closeButton.on("mouseover", () => { createjs.Sound.play("select").duration = 500; });

            this.displayNext();
        }

        public displayNext() {
            if (this._pageIndex >= this._pages.length)
                return;

            this._lblPrompt.text = this._pages[this._pageIndex].text;
            this._pages[this._pageIndex].func();
        }

        public finish() {
            managers.Game.currentScene = this._nextScene;
        }
    }
}