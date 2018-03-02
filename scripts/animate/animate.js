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
var animate;
(function (animate) {
    var Animate = /** @class */ (function (_super) {
        __extends(Animate, _super);
        function Animate(assetManager, imageName, hp, mvspd, px, py) {
            if (mvspd === void 0) { mvspd = 1; }
            var _this = _super.call(this, assetManager, imageName, px, py) || this;
            _this.hp = hp;
            _this.mvspd = mvspd;
            _this.lastValidPosition = new math.Vec2(px, py);
            return _this;
        }
        Object.defineProperty(Animate.prototype, "mvspd", {
            get: function () {
                return this._mvspd;
            },
            set: function (mvspd) {
                this._mvspd = mvspd;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animate.prototype, "movementAmount", {
            get: function () {
                return objects.Game.BASE_MVSPD * this.mvspd;
            },
            enumerable: true,
            configurable: true
        });
        Animate.prototype.reset = function () { };
        Animate.prototype.checkBounds = function (other) {
            if (other === void 0) { other = null; }
            if (other) {
            }
        };
        Animate.prototype.move = function () { };
        Animate.prototype.attack = function () { };
        Animate.prototype.collide = function (other) {
            if (other instanceof objects.GameObject) {
                console.log(this.lastValidPosition);
                this.x = this.lastValidPosition.x;
                this.y = this.lastValidPosition.y;
            }
            else {
                this.lastValidPosition.x = this.x;
                this.lastValidPosition.y = this.y;
            }
        };
        return Animate;
    }(objects.GameObject));
    animate.Animate = Animate;
})(animate || (animate = {}));
//# sourceMappingURL=animate.js.map