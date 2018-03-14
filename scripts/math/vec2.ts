module math {
    export class Vec2 extends createjs.Point {
        constructor(x:number=0, y:number=0) {
            super(x, y);
        }

        private static getGcd(x:number, y:number):number {
            return y ? math.Vec2.getGcd(y, x%y) : x;
        }

        // Adapted from https://stackoverflow.com/a/4652513
        private static reduce(numerator:number, denominator:number):number[] {
            let gcd = math.Vec2.getGcd(numerator, denominator);
            return [numerator / gcd, denominator / gcd];
        }

        // Get distance between two Vec2 objects
        public static distance(pointA:Vec2, pointB:Vec2):number {
            return Math.floor(Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2)));
        }

        // For calculating paths
        public static slope(pointA:Vec2, pointB:Vec2):number[] {
            return math.Vec2.reduce(pointB.y - pointA.y, pointB.x - pointA.x);
        }

        public static rise(pointA:Vec2, pointB:Vec2):number {
            let y = math.Vec2.slope(pointA, pointB)[0];
            return y;
        }

        public static run(pointA:Vec2, pointB:Vec2):number {
            let x = math.Vec2.slope(pointA, pointB)[1];
            return x;
        }
    }
}