module scenes {
    export class Level1 extends objects.Scene {
        private _map: objects.MapLevel1;
        private _enemies: animate.Enemy[];
        private _player: animate.Player;

        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        public Start():void {
            this._map = new objects.MapLevel1(this.assetManager);
            console.log("Initializing enemies...");            
            this._enemies = [
                new animate.Enemy(this.assetManager,"enemy1",1,1,100,50),
                new animate.Enemy(this.assetManager,"enemy2",1,1,220,180),
                new animate.Enemy(this.assetManager,"enemy3",1,1,540,150)
            ];
            console.log("Enemies initialized.");

            console.log("Initializing player...");
            this._player = new animate.Player(this.assetManager, "cowboy1", 1, 1, 100, 420);
            console.log("Player initialized.");

            this.Main();
        }

        public Update():number {
            this._player.Update();
            this._map.Update();
            this._enemies.forEach(enemy => {
                enemy.Update();
                
                if (managers.Collision.Check(this._player, enemy)) {
                    this._player.Hp -= 1;
                    if (this._player.Hp <= 0) {
                        objects.Game.currentScene = config.Scene.GAMEOVER;
                    }
                }
            });

            return 0;
        }

        public Main():void {
            this.addChild(this._map);
            this._enemies.forEach(enemy => {
                this.addChild(enemy);
            });
            this.addChild(this._player);
        }
    }
}