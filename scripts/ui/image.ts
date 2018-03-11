module ui {
    export class Image extends createjs.Bitmap {
        constructor(imageString:string, x:number=0, y:number=0, isCentered=false) {
            super(managers.Game.assetManager.getResult(imageString));

            this.x = x;
            this.y = y;
            if (isCentered) {
                this.x -= this.getBounds().width * 0.5;
            }
        }
    }
}