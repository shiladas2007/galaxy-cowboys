module scenes {
    export class Level1 extends objects.Scene {
        private _mapLevel1: objects.MapLevel1;
        private _enemy11: animate.Enemy;
        private _enemy12: animate.Enemy;
        private _enemy13: animate.Enemy;
        private _player: animate.Player;

        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        public Start():void {
            this._mapLevel1 = new objects.MapLevel1(this.assetManager);
            console.log("Initializing enemies...");            
            this._enemy11=new animate.Enemy(this.assetManager,"enemy1",1,0,200,200);
            this._enemy12=new animate.Enemy(this.assetManager,"enemy2",1,1,220,180);
            this._enemy13=new animate.Enemy(this.assetManager,"enemy3",1,1,400,150);
            console.log("Enemies initialized.");

            console.log("Initializing player...");
            this._player = new animate.Player(this.assetManager, "cowboy1", 1, 1, 100, 420);
            console.log("Player initialized.");

            this.Main();
        }

        public Update():number {
            this._player.Update();
            return 0;
        }

        public Main():void {
            this.addChild(this._mapLevel1);
            this.addChild(this._enemy11);
            this.addChild(this._enemy12);
            this.addChild(this._enemy13);
            this.addChild(this._player);
        }
    }
}