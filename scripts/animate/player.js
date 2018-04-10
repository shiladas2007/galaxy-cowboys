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
        function Player(character, px, py) {
            var _this = this;
            var imageName = "cowboy1";
            var hp = 1;
            var mvspd;
            switch (character) {
                case config.Character.GUNSLINGER:
                    mvspd = 1;
                    break;
                case config.Character.QUICKSILVER:
                    mvspd = 1.5;
                    break;
            }
            _this = _super.call(this, imageName, hp, mvspd, px, py) || this;
            return _this;
        }
        Player.prototype.checkBounds = function () {
            // Checking vertical boundaries
            var bottom = managers.Game.currentSceneObject.bottomBoundary - this.halfHeight;
            var top = managers.Game.currentSceneObject.topBoundary + this.halfHeight;
            if (this.y > bottom) {
                this.y = bottom;
            }
            else if (this.y < top) {
                this.y = top;
            }
            // Checking horizontal boundaries
            if (this.x >= managers.Game.RIGHT_BOUNDARY - this.halfWidth) {
                this.x = managers.Game.RIGHT_BOUNDARY - this.halfWidth;
            }
            else if (this.x <= managers.Game.LEFT_BOUNDARY + this.halfWidth) {
                this.x = this.halfWidth;
            }
        };
        Player.prototype.move = function () {
            if (managers.Game.keyboardManager.moveForward) {
                this.y -= this.movementAmount;
            }
            if (managers.Game.keyboardManager.moveBackward) {
                this.y += this.movementAmount;
            }
            if (managers.Game.keyboardManager.moveLeft) {
                this.x -= this.movementAmount;
            }
            if (managers.Game.keyboardManager.moveRight) {
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
                this.destroy();
            }
        };
        Player.prototype.destroy = function () {
            createjs.Sound.play("player_die");
            managers.Game.currentScene = config.Scene.GAMEOVER;
        };
        Player.prototype.attack = function () {
        };
        return Player;
    }(animate.Animate));
    animate.Player = Player;
})(animate || (animate = {}));
//# sourceMappingURL=player.js.map