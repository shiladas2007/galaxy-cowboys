module objects {
    export class Map extends createjs.Bitmap {
        private _dy: number;

        constructor(imageString:string) {
            super(managers.Game.assetManager.getResult(imageString));
            this.start();
        }

        private _checkBounds():void {}

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