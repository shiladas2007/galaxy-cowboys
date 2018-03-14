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
        function Projectile(imageName, origin, destination, mvspd) {
            if (mvspd === void 0) { mvspd = 1; }
            var _this = _super.call(this, imageName, origin.x, origin.y) || this;
            _this._origin = origin;
            _this._destination = destination;
            _this.mvspd = mvspd;
            return _this;
        }
        Object.defineProperty(Projectile.prototype, "mvspd", {
            get: function () {
                return this._mvspd;
            },
            set: function (mvspd) {
                this._mvspd = mvspd;
            },
            enumerable: true,
            configurable: true
        });
        Projectile.prototype.update = function () {
            this.move();
        };
        Projectile.prototype.getNextPosition = function () {
            var newX;
            var newY;
            newX = this.x + (math.Vec2.run(this._origin, this._destination) * this.mvspd);
            newY = this.y + (math.Vec2.rise(this._origin, this._destination) * this.mvspd);
            return new math.Vec2(newX, newY);
        };
        Projectile.prototype.move = function () {
            var newPosition = this.getNextPosition();
            this.x = newPosition.x;
            this.y = newPosition.y;
        };
        return Projectile;
    }(objects.GameObject));
    objects.Projectile = Projectile;
})(objects || (objects = {}));
//# sourceMappingURL=projectile.js.map