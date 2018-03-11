module objects {
    export class Projectile extends objects.GameObject {
        private _origin: math.Vec2;
        private _destination: math.Vec2;
        private _mvspd: number; // multiplier; 1 = 100%

        get mvspd():number {
            return this._mvspd;
        }
        set mvspd(mvspd:number) {
            this._mvspd = mvspd;
        }

        constructor(imageName:string, origin:math.Vec2, destination:math.Vec2, mvspd:number=1) {
            super(imageName, origin.x, origin.y);
            this._origin = origin;
            this._destination = destination;
            this.mvspd = mvspd;
        }

        private getNextPosition():math.Vec2 {
            let newX: number;
            let newY: number;
            
            newX = this.x + (math.Vec2.run(this._origin, this._destination) * this.mvspd);
            newY = this.y + (math.Vec2.rise(this._origin, this._destination) * this.mvspd);

            return new math.Vec2(newX, newY);
        }

        public move() {
            let newPosition: math.Vec2 = this.getNextPosition();
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
    }
}