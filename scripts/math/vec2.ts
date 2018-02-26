module math {
    export class Vec2 extends createjs.Point {
        constructor(x:number=0, y:number=0) {
            super(x, y);
        }

        // Get distance between two Vec2 objects
        public static Distance(pointA:Vec2, pointB:Vec2):number {
            return Math.floor(Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2)));
        }
    }
}