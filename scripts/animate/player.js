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
        function Player(assetManager, imageName, hp, mvspd) {
            if (mvspd === void 0) { mvspd = 1; }
            return _super.call(this, assetManager, "pl", hp, mvspd) || this;
        }
        Player.prototype.Reset = function () {
        };
        Player.prototype.CheckBounds = function () {
            // Checking vertical boundaries
            if (this.position.y >= objects.Game.BOTTOM_BOUNDARY - this.halfHeight) {
                this.position.y = objects.Game.BOTTOM_BOUNDARY - this.halfHeight;
            }
            else if (this.position.y >= objects.Game.TOP_BOUNDARY + this.halfHeight) {
                this.position.y = this.halfHeight;
            }
            // Checking horizontal boundaries
            if (this.position.y >= objects.Game.RIGHT_BOUNDARY - this.halfWidth) {
                this.position.y = objects.Game.RIGHT_BOUNDARY - this.halfWidth;
            }
            else if (this.position.y <= objects.Game.LEFT_BOUNDARY + this.halfWidth) {
                this.position.y = this.halfWidth;
            }
        };
        Player.prototype.Move = function () {
            if (objects.Game.keyboardManager.moveForward) {
                this.position.y += this.MovementAmount;
            }
            if (objects.Game.keyboardManager.moveBackward) {
                this.position.y -= this.MovementAmount;
            }
            if (objects.Game.keyboardManager.moveLeft) {
                this.position.y -= this.MovementAmount;
            }
            if (objects.Game.keyboardManager.moveRight) {
                this.position.x += this.MovementAmount;
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