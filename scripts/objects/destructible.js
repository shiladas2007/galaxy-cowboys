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
    var Destructible = /** @class */ (function (_super) {
        __extends(Destructible, _super);
        function Destructible(imageName, hp, px, py) {
            var _this = _super.call(this, imageName, px, py) || this;
            _this.hp = hp;
            return _this;
            //this.lastValidPosition = new math.Vec2(px, py);
        }
        Destructible.prototype.reset = function () { };
        Destructible.prototype.checkBounds = function (other) {
            if (other === void 0) { other = null; }
        };
        Destructible.prototype.move = function () { };
        Destructible.prototype.attack = function () { };
        Destructible.prototype.collide = function (other) {
            if (other instanceof objects.GameObject) {
                console.log(this.lastValidPosition);
                //this.x = this.lastValidPosition.x;
                //this.y = this.lastValidPosition.y;
            }
            else {
                this.lastValidPosition.x = this.x;
                this.lastValidPosition.y = this.y;
            }
        };
        return Destructible;
    }(objects.Obstacle));
    objects.Destructible = Destructible;
})(objects || (objects = {}));
//# sourceMappingURL=destructible.js.map