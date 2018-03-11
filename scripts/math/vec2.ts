module math {
    export class Vec2 extends createjs.Point {
        constructor(x:number=0, y:number=0) {
            super(x, y);
        }

        // Get distance between two Vec2 objects
        public static distance(pointA:Vec2, pointB:Vec2):number {
            return Math.floor(Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2)));
        }

        // For calculating paths
        public static slope(pointA:Vec2, pointB:Vec2):number {
            return Vec2.rise(pointA, pointB) / Vec2.run(pointA, pointB);
        }

        public static rise(pointA:Vec2, pointB:Vec2):number {
            return pointB.y - pointA.y;
        }

        public static run(pointA:Vec2, pointB:Vec2):number {
            return pointB.x - pointA.x;
        }
    }
}