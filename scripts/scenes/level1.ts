module scenes {
    export class Level1 extends objects.Scene {
        private _mapLevel1:objects.MapLevel1;
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        public Start():void {
            this._mapLevel1 = new objects.MapLevel1(this.assetManager);
            this.Main();

        }

        public Update():number {
            return 0;
        }

        public Main():void {
            this.addChild(this._mapLevel1);

        }
    }
}