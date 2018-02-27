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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player(assetManager, imageName, hp, mvspd, px, py) {
            if (mvspd === void 0) { mvspd = 1; }
            return _super.call(this, assetManager, imageName, hp, mvspd, px, py) || this;
        }
        Player.prototype.CheckBounds = function () {
            // Checking vertical boundaries
            if (this.y >= objects.Game.BOTTOM_BOUNDARY - this.halfHeight) {
                this.y = objects.Game.BOTTOM_BOUNDARY - this.halfHeight;
            }
            else if (this.y <= objects.Game.TOP_BOUNDARY + this.halfHeight) {
                this.y = this.halfHeight;
            }
            // Checking horizontal boundaries
            if (this.x >= objects.Game.RIGHT_BOUNDARY - this.halfWidth) {
                this.x = objects.Game.RIGHT_BOUNDARY - this.halfWidth;
            }
            else if (this.x <= objects.Game.LEFT_BOUNDARY + this.halfWidth) {
                this.x = this.halfWidth;
            }
        };
        Player.prototype.Move = function () {
            if (objects.Game.keyboardManager.moveForward) {
                this.y -= this.MovementAmount;
            }
            if (objects.Game.keyboardManager.moveBackward) {
                this.y += this.MovementAmount;
            }
            if (objects.Game.keyboardManager.moveLeft) {
                this.x -= this.MovementAmount;
            }
            if (objects.Game.keyboardManager.moveRight) {
                this.x += this.MovementAmount;
            }
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        Player.prototype.Attack = function () {
        };
        return Player;
    }(animate.Animate));
    animate.Player = Player;
})(animate || (animate = {}));
//# sourceMappingURL=player.js.map