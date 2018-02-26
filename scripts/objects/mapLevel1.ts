module objects {
    export class MapLevel1 extends createjs.Bitmap {
        private _dy: number;

        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager.getResult("mapLevel1"));
            this.Start();
        }

        private _checkBounds():void {
            if (this.y >= 0) {

            }
        }

        private _move():void {
            this.y += this._dy;
        }

        public Start():void {
            this._dy = 5;
        }

        public Update():void {

        }
    }
}