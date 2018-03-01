module objects {
    export class Map extends createjs.Bitmap {
        private _dy: number;

        constructor(assetManager:createjs.LoadQueue, imageString:string) {
            super(assetManager.getResult(imageString));
            this.start();
        }

        private _checkBounds():void {
            if (this.y >= 0) {

            }
        }

        private _move():void {
            this.y += this._dy;
        }

        public start():void {
            this._dy = 5;
        }

        public update():void {

        }
    }
}