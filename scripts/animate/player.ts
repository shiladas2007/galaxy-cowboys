module animate {
    export class Player extends Animate {
        constructor(assetManager:createjs.LoadQueue, imageName:string, hp:number, mvspd:number=1) {
            super(assetManager, imageName, hp, mvspd);
        }

        public Reset():void {

        }

        public CheckBounds():void {
            // Checking bottom boundary
            if (this.position.y >= objects.Game.HEIGHT + this.height) {

            }

            // Checking top boundary
            // Checking right boundary
            // Checking left boundary
        }

        public Move() {
            if (objects.Game.keyboardManager.moveForward) {
                this.position.y += this.MovementAmount;
            }
            if (objects.Game.keyboardManager.moveBackward) {
                this.position.y -= this.MovementAmount;
            }
            if (objects.Game.keyboardManager.moveLeft) {
                this.position.y -= this.MovementAmount;
            }
            if (objects.Game.keyboardManager.moveRight) {
                this.position.x += this.MovementAmount;
            }
        }

        public Update() {
            this.Move();
            this.CheckBounds();
        }

        public Attack() {

        }
    }
}