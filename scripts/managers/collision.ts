module managers {
    export class Collision {
        public static check(object1:objects.GameObject, object2:objects.GameObject):boolean {
            let pointA = new math.Vec2(object1.x, object1.y);
            let pointB = new math.Vec2(object2.x, object2.y);

            // Check for collision
            if (math.Vec2.distance(pointA, pointB) < (object1.halfHeight + object2.halfHeight)) {
                object1.collide(object2);
                object2.collide(object1);
                if (!object2.isColliding) {
                    console.log("Collision with " + object2.name);
                    if(object2.name=="bullet")
                    {
                    let explosion = new objects.explosion(object1.x,object1.y);                      
                    managers.Game.currentSceneObject.addChild(explosion);
                    createjs.Sound.play("dying");                    
                    }
                    else if (object2.name=="enemyWatcher")
                    {
                        createjs.Sound.play("dying");    
                    }
                    else if(object2.name=="crate")
                    {
                        console.log("crate");
                        createjs.Sound.play("dying");    
                    }
                    object2.isColliding = true;
                    
                    return true;
                }
            } else {
                object2.isColliding = false;
            }
            
            return false;
        }
    }
}