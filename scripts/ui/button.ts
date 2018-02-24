module ui {
    export class Button extends createjs.Bitmap {
        constructor(assetManager:createjs.LoadQueue, imageString:string, x:number=0, y:number=0, isCentered=false) {
            super(assetManager.getResult(imageString));

            this.x = x;
            this.y = y;
            
            this.on("mouseover", this.mouseOver);
            this.on("mouseout", this.mouseOut)
        }

        public mouseOver():void {
            // mouseover effect
        }

        public mouseOut():void {
            // mouseout effect
        }
    }
}