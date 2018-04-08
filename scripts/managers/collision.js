var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.check = function (object1, object2) {
            var pointA = new math.Vec2(object1.x, object1.y);
            var pointB = new math.Vec2(object2.x, object2.y);
            // Check for collision
            if (math.Vec2.distance(pointA, pointB) < (object1.halfHeight + object2.halfHeight)) {
                object1.collide(object2);
                object2.collide(object1);
                if (!object2.isColliding) {
                    console.log("Collision with " + object2.name);
                    if (object1.name == "cowboy1" && (object2.name == "enemyGuard" || object2.name == "enemyPatroller" || object2.name == "enemyWatcher")) {
                        createjs.Sound.play("player_die");
                    }
                    else if (object2.name == "bullet" && object1.name == "enemyWatcher") {
                        var explosion = new objects.explosion(object1.x, object1.y, "smallexplosion");
                        managers.Game.currentSceneObject.addChild(explosion);
                        createjs.Sound.play("monster_die");
                        managers.Game.scoreBoard.Score += 200;
                    }
                    else if (object2.name == "bullet" && object1.name == "enemyGuard") {
                        var explosion = new objects.explosion(object1.x, object1.y, "smallexplosion");
                        managers.Game.currentSceneObject.addChild(explosion);
                        createjs.Sound.play("monster_die");
                        managers.Game.scoreBoard.Score += 200;
                    }
                    else if (object2.name == "bullet" && object1.name == "enemyPatroller") {
                        var explosion = new objects.explosion(object1.x, object1.y, "smallexplosion");
                        managers.Game.currentSceneObject.addChild(explosion);
                        createjs.Sound.play("monster_die");
                        managers.Game.scoreBoard.Score += 200;
                    }
                    else if (object1.name == "crate" && object2.name == "bullet") {
                        //console.log("crate");
                        createjs.Sound.play("breaking");
                        var breaking = new objects.explosion(object1.x, object1.y, "breaking");
                        managers.Game.currentSceneObject.addChild(breaking);
                        //add 25% chance to drop a powerup
                        //this._powerup=new objects.Powerup()
                        // managers.Game.currentSceneObject.
                    }
                    //else (object1.name=="" && object2.name=="crate")
                    console.log(object1.name + "" + object2.name);
                    object2.isColliding = true;
                    return true;
                }
            }
            else {
                object2.isColliding = false;
            }
            return false;
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map