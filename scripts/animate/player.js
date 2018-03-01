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
        Player.prototype.checkBounds = function (other) {
            if (other === void 0) { other = null; }
            _super.prototype.checkBounds.call(this, other);
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
        Player.prototype.move = function () {
            if (objects.Game.keyboardManager.moveForward) {
                this.y -= this.movementAmount;
            }
            if (objects.Game.keyboardManager.moveBackward) {
                this.y += this.movementAmount;
            }
            if (objects.Game.keyboardManager.moveLeft) {
                this.x -= this.movementAmount;
            }
            if (objects.Game.keyboardManager.moveRight) {
                this.x += this.movementAmount;
            }
        };
        Player.prototype.update = function () {
            this.move();
            this.checkBounds();
        };
        Player.prototype.collide = function (other) {
            _super.prototype.collide.call(this, other);
            if (other instanceof animate.Enemy) {
                this.hp -= 1;
            }
            if (this.hp <= 0) {
                objects.Game.currentScene = config.Scene.GAMEOVER;
            }
        };
        Player.prototype.attack = function () {
        };
        return Player;
    }(animate.Animate));
    animate.Player = Player;
})(animate || (animate = {}));
//# sourceMappingURL=player.js.map