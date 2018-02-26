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
        function Animate(assetManager, imageName, hp, mvspd) {
            if (mvspd === void 0) { mvspd = 1; }
            var _this = _super.call(this, assetManager, imageName) || this;
            _this.Hp = hp;
            _this.Mvspd = mvspd;
            return _this;
        }
        Object.defineProperty(Animate.prototype, "Mvspd", {
            get: function () {
                return this._mvspd;
            },
            set: function (mvspd) {
                this._mvspd = mvspd;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animate.prototype, "MovementAmount", {
            get: function () {
                return objects.Game.BASE_MVSPD * this.Mvspd;
            },
            enumerable: true,
            configurable: true
        });
        Animate.prototype.Reset = function () {
        };
        Animate.prototype.CheckBounds = function () {
        };
        Animate.prototype.Move = function () {
        };
        Animate.prototype.Attack = function () {
        };
        return Animate;
    }(objects.GameObject));
    animate.Animate = Animate;
})(animate || (animate = {}));
//# sourceMappingURL=animate.js.map