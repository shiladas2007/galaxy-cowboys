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
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        // public properties
        // Constructor
        function Enemy(assetManager) {
            var _this = _super.call(this, assetManager, "Alien Guard", 400, 1) || this;
            _this.enemyHealth = 100;
            _this.explosionIterator = 1;
            _this.explosionDelay = 0;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Enemy.prototype.getSpeed = function () {
            return this.speed;
        };
        Enemy.prototype.isDead = function () {
            return this.enemyIsDead;
        };
        Enemy.prototype.getPosX = function () {
            return this.enemyPosX;
        };
        Enemy.prototype.getPosY = function () {
            return this.enemyPosY;
        };
        Enemy.prototype.getWidth = function () {
            return this.enemyWidth;
        };
        Enemy.prototype.getHeight = function () {
            return this.enemyHeight;
        };
        // Initializes variables and creates new objects
        Enemy.prototype.Start = function () {
            this.Reset();
        };
        // updates the game object every frame
        Enemy.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        Enemy.prototype.Reset = function () {
            this.position.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
            this.position.y = -this.height;
            this._dx = Math.floor((Math.random() * 5) - 2);
            this._dy = Math.floor((Math.random() * 6) + 5);
        };
        // move the object to some new location
        Enemy.prototype.Move = function () {
            this.position.y += this._dy;
            this.position.x += this._dx;
        };
        // check to see if some boundary has been passed
        Enemy.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.position.y >= 480 + this.height) {
                this.Reset();
            }
        };
        return Enemy;
    }(animate.Animate));
    animate.Enemy = Enemy;
})(animate || (animate = {}));
//# sourceMappingURL=enemy.js.map