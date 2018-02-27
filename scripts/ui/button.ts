module ui {
    export class Button extends ui.Image {
        private _mouseOverAlpha: number;

        constructor(assetManager:createjs.LoadQueue, imageString:string, x:number=0, y:number=0, mouseOverAlpha:number=1, isCentered=false) {
            super(assetManager, imageString, x, y, isCentered);

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