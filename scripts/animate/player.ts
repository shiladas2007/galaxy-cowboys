module animate {
    export class Player extends Animate {
        constructor(character:config.Character, px:number, py:number) {
            let imageName: string = "cowboy1";
            let hp: number = 1;
            let mvspd: number;

            switch (character) {
                case config.Character.GUNSLINGER:
                    mvspd = 1;
                    break;
                case config.Character.QUICKSILVER:
                    mvspd = 1.5;
                    break;
            }
            super(imageName, hp, mvspd, px, py);
        }

        public checkBounds():void {
            // Checking vertical boundaries
            let bottom: number = managers.Game.currentSceneObject.bottomBoundary - this.halfHeight;
            let top: number = managers.Game.currentSceneObject.topBoundary + this.halfHeight;
            if (this.y > bottom) {
                this.y = bottom;
            } else if (this.y < top) {
                this.y = top;
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
                this.hp -= 1;
            }
            if (this.hp <= 0) {
                this.destroy();
            }
        }

        public destroy() {
            createjs.Sound.play("player_die");
            managers.Game.currentSceneObject.destroyAll();
            managers.Game.currentScene = config.Scene.GAMEOVER;
        }

        public attack() {

        }
    }
}