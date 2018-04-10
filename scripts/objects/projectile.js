var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Projectile = /** @class */ (function (_super) {
        __extends(Projectile, _super);
        function Projectile(imageName, shooter, destination, mvspd) {
            if (mvspd === void 0) { mvspd = 2; }
            var _this = _super.call(this, imageName, shooter.x, shooter.y) || this;
            _this._origin = new math.Vec2(shooter.x, shooter.y);
            _this._destination = destination;
            _this._shooter = shooter;
            _this.mvspd = mvspd;
            // Move projectile in front of shooter
            _this._spawnPosition();
            createjs.Sound.play("shot");
            return _this;
        }
        Projectile.prototype.update = function () {
            this.move();
            this._checkBounds();
        };
        Projectile.prototype._checkBounds = function () {
            if (this.y >= managers.Game.currentSceneObject.bottomBoundary + this.halfHeight ||
                this.y <= managers.Game.currentSceneObject.topBoundary - this.halfHeight ||
                this.x >= managers.Game.currentSceneObject.rightBoundary + this.halfWidth ||
                this.x <= managers.Game.currentSceneObject.leftBoundary - this.halfWidth) {
                this.destroy();
            }
        };
        Projectile.prototype._spawnPosition = function () {
            var run = Math.abs(math.Vec2.run(this._origin, this._destination));
            var rise = Math.abs(math.Vec2.rise(this._origin, this._destination));
            var mvAmt;
            var margin = 10;
            if (run < rise) {
                // Path is more vertical than horizontal - use shooter's height to spawn bullet
                mvAmt = this._shooter.halfHeight + margin;
            }
            else {
                mvAmt = this._shooter.halfWidth + margin;
            }
            this.move(mvAmt);
            managers.Game.currentSceneObject.addProjectile(this);
        };
        Projectile.prototype.getNextPosition = function (movementAmount) {
            if (movementAmount === void 0) { movementAmount = null; }
            var newX;
            var newY;
            var run = math.Vec2.run(this._origin, this._destination);
            var rise = math.Vec2.rise(this._origin, this._destination);
            var c;
            var divisor;
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
        };
        Projectile.prototype.move = function (movementAmount) {
            if (movementAmount === void 0) { movementAmount = null; }
            var newPosition = this.getNextPosition(movementAmount);
            this.x = newPosition.x;
            this.y = newPosition.y;
        };
        Projectile.prototype.collide = function (other) {
            if (other instanceof animate.Enemy && this.name == "bullet" ||
                other instanceof animate.Player && this.name == "laser" ||
                other instanceof objects.Destructible && this.name == "bullet") {
                other.hp -= 1; // TODO: Decrease according to damage
                this.destroy();
            }
        };
        Projectile.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            var explosion = new objects.explosion(this.x - this.halfWidth, this.y - this.halfHeight, "smallexplosion");
            managers.Game.currentSceneObject.addChild(explosion);
        };
        return Projectile;
    }(objects.GameObject));
    objects.Projectile = Projectile;
})(objects || (objects = {}));
//# sourceMappingURL=projectile.js.map