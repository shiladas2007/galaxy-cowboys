module animate {
    export class Player extends Animate {
        constructor(assetManager:createjs.LoadQueue, imageName:string, hp:number, mvspd:number=1) {
            super(assetManager, "pl", hp, mvspd);
        }

        public Reset():void {

        }

        public CheckBounds():void {
            // Checking vertical boundaries
            if (this.position.y >= objects.Game.BOTTOM_BOUNDARY - this.halfHeight) {
                this.position.y = objects.Game.BOTTOM_BOUNDARY - this.halfHeight;
            } else if (this.position.y >= objects.Game.TOP_BOUNDARY + this.halfHeight) {
                this.position.y = this.halfHeight;
            }

            // Checking horizontal boundaries
            if (this.position.y >= objects.Game.RIGHT_BOUNDARY - this.halfWidth) {
                this.position.y = objects.Game.RIGHT_BOUNDARY - this.halfWidth
            } else if (this.position.y <= objects.Game.LEFT_BOUNDARY + this.halfWidth) {
                this.position.y = this.halfWidth
            }
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