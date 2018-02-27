module scenes {
    export abstract class PlayScene extends objects.Scene {
        private _map: objects.Map;
        protected _enemies: animate.Enemy[];
        protected _player: animate.Player;

        constructor(assetManager:createjs.LoadQueue, mapString:string) {
            super(assetManager);
            this._map = new objects.Map(this.assetManager, mapString);
        }

        public Start():void {
            
        }

        public Update():number {
            this._map.Update();
            this._player.Update();

            // Check for collisions
            this._enemies.forEach(enemy => {
                enemy.Update();
                
                if (managers.Collision.Check(this._player, enemy)) {
                    this._player.Hp -= 1;
                    if (this._player.Hp <= 0) {
                        objects.Game.currentScene = config.Scene.GAMEOVER;
                    }
                }
            });

            return objects.Game.currentScene;
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