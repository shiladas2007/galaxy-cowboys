module objects {
    export class Projectile extends objects.GameObject {
        private _origin: math.Vec2;
        private _destination: math.Vec2;
        private _shooter: objects.GameObject;

        constructor(imageName:string, shooter:objects.GameObject, destination:math.Vec2, mvspd:number=2) {
            super(imageName, shooter.x, shooter.y);
            this._origin = new math.Vec2(shooter.x, shooter.y);
            this._destination = destination;
            this._shooter = shooter;
            this.mvspd = mvspd;
            
            // Move projectile in front of shooter
            this._spawnPosition();
            createjs.Sound.play("shot");
        }

        public update() {
            this.move();
            this._checkBounds();
        }

        private _checkBounds() {
            if (this.y >= managers.Game.currentSceneObject.bottomBoundary + this.halfHeight ||
                this.y <= managers.Game.currentSceneObject.topBoundary - this.halfHeight ||
                this.x >= managers.Game.currentSceneObject.rightBoundary + this.halfWidth ||
                this.x <= managers.Game.currentSceneObject.leftBoundary - this.halfWidth) {
                    this.destroy();
            }
        }

        private _spawnPosition() {
            let run: number = Math.abs(math.Vec2.run(this._origin, this._destination));
            let rise: number = Math.abs(math.Vec2.rise(this._origin, this._destination));
            let mvAmt: number;
            let margin: number = 10;

            if (run < rise) {
                // Path is more vertical than horizontal - use shooter's height to spawn bullet
                mvAmt = this._shooter.halfHeight + margin;
            } else {
                mvAmt = this._shooter.halfWidth + margin;
            }
            this.move(mvAmt);
            managers.Game.currentSceneObject.addProjectile(this);
        }

        private getNextPosition(movementAmount:number=null):math.Vec2 {
            let newX: number;
            let newY: number;
            let run: number = math.Vec2.run(this._origin, this._destination);
            let rise: number = math.Vec2.rise(this._origin, this._destination);
            let c: number;
            let divisor: number;
            if (movementAmount == null) {
                movementAmount = this.movementAmount;
            }

            c = Math.sqrt(Math.pow(run, 2) + Math.pow(rise, 2));
            divisor = c / movementAmount;

            run = Math.abs(run / divisor);
            rise = Math.abs(rise / divisor);

            if (this._destination.x < this._origin.x) {
                run *= -1; // move left
            }
            if (this._destination.y < this._origin.y) {
                rise *= -1; // move down
            }
            
            newX = Math.round(this.x + run);
            newY = Math.round(this.y + rise);

            return new math.Vec2(newX, newY);
        }

        public move(movementAmount:number=null) {
            let newPosition: math.Vec2 = this.getNextPosition(movementAmount);
            this.x = newPosition.x;
            this.y = newPosition.y;
        }

        public collide(other:objects.GameObject) {
            if (other instanceof animate.Enemy && this.name == "bullet" ||
            other instanceof animate.Player && this.name == "laser" ||
            other instanceof objects.Destructible && this.name == "bullet") {
                other.hp -= 1; // TODO: Decrease according to damage
                this.destroy();
            }
        }

        public destroy() {
            super.destroy();
            let explosion = new objects.explosion(this.x - this.halfWidth, this.y - this.halfHeight, "smallexplosion");                      
            managers.Game.currentSceneObject.addChildAt(explosion, managers.Game.INDEX_GAMEOBJECTS);
        }
    }
}