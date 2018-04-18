module scenes {
    export class Tutorial1 extends objects.Scene {
        private _player: animate.PlayerDummy;
        private _enemy: animate.Enemy;
        private _tutorial: TutorialScene;

        constructor() {
            super();
            let pages: scenes.TutorialPage[] = [
                new TutorialPage("This is Gunslinger Sam. Use WASD or arrow keys to move.", this.page1),
                new TutorialPage("He's slow, but shoots quickly. Left-click to shoot the aliens!", this.page2),
            ];
            this._tutorial = new TutorialScene("mapLevel1", pages, config.Scene.LEVEL1);
            this.start();
        }

        public start() {
            this._player = new animate.PlayerDummy(config.Character.GUNSLINGER, 0, 340);
            this._enemy = new animate.Enemy(config.Enemy.GUARD, 0, 200);
            ui.centreHorizontal(this._player);
            ui.centreHorizontal(this._enemy);
        }

        public main() {
            this._tutorial.start();
        }

        public page1() {
            this.addChild(this._player);
            setTimeout(() => {
                this._player.addPath(new glm.vec2(this._player.x + 100, this._player.y));
                this._player.addPath(new glm.vec2(this._player.x - 100, this._player.y));
            }, 1500)
        }

        public page2() {

        }
    }
}