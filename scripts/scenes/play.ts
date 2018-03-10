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
            // TODO: centralize collision check
            this._player.isColliding = false;
            this._map.update();
            this._player.update();

            // Check for collisions
            this._enemies.forEach(enemy => {
                enemy.update();
                if (managers.Collision.check(this._player, enemy)) {
                    this._player.isColliding = true;
                }
            });
            if (!this._player.isColliding) {
                this._player.lastValidPosition.x = this._player.x;
                this._player.lastValidPosition.y = this._player.y;
            }

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