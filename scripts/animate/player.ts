module animate {
    export class Player extends Animate {
        constructor(assetManager:createjs.LoadQueue, imageUrl:string, hp:number, mvspd:number=1) {
            super(assetManager, imageUrl, hp, mvspd);
        }

        public Reset():void {

        }

        public CheckBounds():void {
            let canvasHeight: number;

            // Checking bottom boundary
            if (this.y >= canvasHeight + this.height) {

            }

            // Checking top boundary
            // Checking right boundary
            // Checking left boundary
        }

        public Move() {
            
        }

        public Update() {
            this.CheckBounds();
        }

        public Attack() {

        }
    }
}