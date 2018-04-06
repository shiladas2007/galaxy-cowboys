module objects {
    export class Map extends createjs.Bitmap {
        private _dy: number;
        private startX: number;
        private startY: number;
        public width: number;
        public height: number;

        constructor(imageString:string) {
            super(managers.Game.assetManager.getResult(imageString));
            this.start();
        }

        private _checkBounds() {
            
        }

        private _reset() {
            // Start at the bottom left of the map
            this.x = this.startX;
            this.y = this.startY;
        }

        private _move():void {
            this.y += this._dy;
        }

        public start():void {
            this._dy = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.startX = 0;
            this.startY = -this.height + managers.Game.HEIGHT;
            this._reset();
        }

        public update():void {

        }
    }
}