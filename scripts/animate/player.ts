module animate {
    export class Player extends Animate {
        constructor(assetManager:createjs.LoadQueue, imageName:string, hp:number, mvspd:number=1, px:number, py:number) {
            super(assetManager, imageName, hp, mvspd, px, py);
        }

        public checkBounds():void {
            // Checking vertical boundaries
            if (this.y >= managers.Game.BOTTOM_BOUNDARY - this.halfHeight) {
                this.y = managers.Game.BOTTOM_BOUNDARY - this.halfHeight;
            } else if (this.y <= managers.Game.TOP_BOUNDARY + this.halfHeight) {
                this.y = this.halfHeight;
            }

            // Checking horizontal boundaries
            if (this.x >= managers.Game.RIGHT_BOUNDARY - this.halfWidth) {
                this.x = managers.Game.RIGHT_BOUNDARY - this.halfWidth
            } else if (this.x <= managers.Game.LEFT_BOUNDARY + this.halfWidth) {
                this.x = this.halfWidth
            }
        }

        public move() {
            if (managers.Game.keyboardManager.moveForward) {
                this.y -= this.movementAmount;
            }
            if (managers.Game.keyboardManager.moveBackward) {
                this.y += this.movementAmount;
            }
            if (managers.Game.keyboardManager.moveLeft) {
                this.x -= this.movementAmount;
            }
            if (managers.Game.keyboardManager.moveRight) {
                this.x += this.movementAmount;
            }
        }

        public update() {
            this.move();
            this.checkBounds();
        }

        public collide(other:objects.GameObject) {
            super.collide(other);
            if (other instanceof animate.Enemy) {
                this.hp -= 1
            }
            if (this.hp <= 0) {
                //managers.Game.currentScene = config.Scene.GAMEOVER;
            }
        }

        public attack() {

        }
    }
}