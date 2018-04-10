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
            //this.x=px;
            //this.y=py;  
            _this.lastValidPosition = new math.Vec2(px, py);
            return _this;
        }
        Destructible.prototype.reset = function () { };
        Destructible.prototype.checkBounds = function (other) {
            if (other === void 0) { other = null; }
        };
        Destructible.prototype.move = function () { };
        Destructible.prototype.attack = function () { };
        Destructible.prototype.collide = function (other) {
            if (other instanceof objects.Projectile) {
                this.hp -= 1;
            }
            if (this.hp <= 0) {
                this.destroy();
            }
        };
        Destructible.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            createjs.Sound.play("breaking");
            var breaking = new objects.explosion(this.x, this.y, "breaking");
            managers.Game.currentSceneObject.addChild(breaking);
        };
        return Destructible;
    }(objects.Obstacle));
    objects.Destructible = Destructible;
})(objects || (objects = {}));
//# sourceMappingURL=destructible.js.map