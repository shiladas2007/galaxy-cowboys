module managers {
    export class Collision {
        public static Check(object1:objects.GameObject, object2:objects.GameObject) {
            let pointA = new math.Vec2(object1.position.x, object1.position.y);
            let pointB = new math.Vec2(object2.position.x, object2.position.y);

            // Check for collision
            if (math.Vec2.Distance(pointA, pointB) < (object1.halfHeight + object2.halfHeight)) {
                if (!object2.isColliding) {
                    console.log("Collision with" + object2.name);
                    object2.isColliding = true;
                }
            }
            else {
                object2.isColliding = false;
            }
        }
    }
}