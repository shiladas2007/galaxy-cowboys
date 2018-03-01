module animate {
    export class Player extends Animate {
        constructor(assetManager:createjs.LoadQueue, imageName:string, hp:number, mvspd:number=1, px:number, py:number) {
            super(assetManager, imageName, hp, mvspd, px, py);
        }

        public CheckBounds(other?:objects.GameObject):void {
            super.CheckBounds(other);
            
            // Checking vertical boundaries
            if (this.y >= objects.Game.BOTTOM_BOUNDARY - this.halfHeight) {
                this.y = objects.Game.BOTTOM_BOUNDARY - this.halfHeight;
            } else if (this.y <= objects.Game.TOP_BOUNDARY + this.halfHeight) {
                this.y = this.halfHeight;
            }

            // Checking horizontal boundaries
            if (this.x >= objects.Game.RIGHT_BOUNDARY - this.halfWidth) {
                this.x = objects.Game.RIGHT_BOUNDARY - this.halfWidth
            } else if (this.x <= objects.Game.LEFT_BOUNDARY + this.halfWidth) {
                this.x = this.halfWidth
            }
        }

        public Move() {
            if (objects.Game.keyboardManager.moveForward) {
                this.y -= this.MovementAmount;
            }
            if (objects.Game.keyboardManager.moveBackward) {
                this.y += this.MovementAmount;
            }
            if (objects.Game.keyboardManager.moveLeft) {
                this.x -= this.MovementAmount;
            }
            if (objects.Game.keyboardManager.moveRight) {
                this.x += this.MovementAmount;
            }
        }

        public Update() {
            this.Move();
            this.CheckBounds();
        }

        public Collide(other:objects.GameObject) {
            super.Collide(other);
            if (other instanceof animate.Enemy) {
                this.Hp -= 1
            }
            if (this.Hp <= 0) {
                objects.Game.currentScene = config.Scene.GAMEOVER;
            }
        }

        public Attack() {

        }
    }
}