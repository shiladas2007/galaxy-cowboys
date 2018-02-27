module ui {
    export class Button extends createjs.Bitmap {
        private _mouseOverAlpha: number;

        constructor(assetManager:createjs.LoadQueue, imageString:string, x:number=0, y:number=0, mouseOverAlpha:number=1, isCentered=false) {
            super(assetManager.getResult(imageString));

            this.x = x;
            this.y = y;
            if (isCentered) {
                this.x -= this.getBounds().width / 2;
            }

            this._mouseOverAlpha = mouseOverAlpha;
            
            this.on("mouseover", this.mouseOver);
            this.on("mouseout", this.mouseOut);
        }

        public mouseOver():void {
            this.alpha = this._mouseOverAlpha;
        }

        public mouseOut():void {
            this.alpha = 1;
        }
    }
}