module scenes {
    export abstract class PlayScene extends objects.Scene {
        private _map: objects.Map;
        protected _enemies: animate.Enemy[];
        protected _player: animate.Player;

        constructor(assetManager:createjs.LoadQueue, mapString:string) {
            super(assetManager);
            this._map = new objects.Map(this.assetManager, mapString);
        }

        public start():void {
            
        }

        public update():number {
            this._map.update();
            this._player.update();

            // Check for collisions
            this._enemies.forEach(enemy => {
                enemy.update();
                managers.Collision.check(this._player, enemy);
            });

            return objects.Game.currentScene;
        }

        public main():void {
            this.addChild(this._map);
            this._enemies.forEach(enemy => {
                this.addChild(enemy);
            });
            this.addChild(this._player);
        }
    }
}