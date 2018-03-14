module objects {
    export class Projectile extends objects.GameObject {
        private _origin: math.Vec2;
        private _destination: math.Vec2;

        constructor(imageName:string, origin:math.Vec2, destination:math.Vec2, mvspd:number=1) {
            super(imageName, origin.x, origin.y);
            this._origin = origin;
            this._destination = destination;
            this.mvspd = mvspd;
        }

        public update() {
            this.move();
        }

        private getNextPosition():math.Vec2 {
            let newX: number;
            let newY: number;
            let run: number = math.Vec2.run(this._origin, this._destination);
            let rise: number = math.Vec2.rise(this._origin, this._destination);
            let c: number;
            let divisor: number;

            c = Math.sqrt(Math.pow(run, 2) + Math.pow(rise, 2));
            divisor = c / this.movementAmount;

            run /= divisor;
            rise /= divisor;
            
            newX = Math.round(this.x + run);
            newY = Math.round(this.y + rise);

            return new math.Vec2(newX, newY);
        }

        public move() {
            let newPosition: math.Vec2 = this.getNextPosition();
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
    }
}