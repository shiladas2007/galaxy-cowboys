module scenes {
    export class Tutorial2 extends scenes.TutorialScene {
        constructor() {
            let pages: scenes.TutorialPage[] = [
                new TutorialPage("This is Quicksilver John. He uses a shotgun.", () => {this.page1();}),
                new TutorialPage("He has a limited range and fires more slowly, but his bullets cut through lasers.", () => {this.page2();}),
                new TutorialPage("This alien is a Watcher - it shoots directly at you, not just straight down!", () => {this.page3();}),
                new TutorialPage("Use John's speed to quickly take aliens out!", () => {this.page4();}),
            ];
            super("mapLevel2", pages, config.Scene.LEVEL2);
            
            this.start();
        }

        public start() {
            super.start();
            this._player = new animate.PlayerDummy(config.Character.QUICKSILVER, 0, 300);
            this._enemies = [
                new animate.EnemyDummy(config.Enemy.GUARD, 0, 100),
                new animate.EnemyDummy(config.Enemy.WATCHER, 0, 150)
            ];
            this._obstra.push(new objects.DestructibleDummy("crate", 1, 0, 230));
            this._resetPlayer();
            ui.centreHorizontal(this._enemies[0]);
            ui.centreHorizontal(this._enemies[1]);
            ui.centreHorizontal(this._obstra[0]);

            this.main();
        }

        public main() {
            super.main();
        }

        public page1() {
            this.addToScene(this._player, managers.Game.INDEX_UI);
            this._canFire = true;
        }

        public page2() {
            this._resetPlayer();
            this.addToScene(this._enemies[0], managers.Game.INDEX_UI);
            this._enemies[0].start();
            this.addToScene(this._obstra[0], managers.Game.INDEX_UI);
        }

        public page3() {
            
        }

        public page4() {}

        private _resetPlayer() {
            ui.centreHorizontal(this._player);
            this._player.y = 300;
        }
    }
}