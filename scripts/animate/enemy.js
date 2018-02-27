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
        //here we can add heath point as 1 and speed as 0 for not moving in level1 and level2
        // but for for level3 and level4, we have to mention speed
        function Enemy(assetManager, enemyImg, hp, mvspd, px, py) {
            if (hp === void 0) { hp = 1; }
            if (mvspd === void 0) { mvspd = 0; }
            var _this = _super.call(this, assetManager, enemyImg, hp, mvspd, px, py) || this;
            console.log("constructor of enemy");
            _this.Hp = hp;
            _this.Mvspd = mvspd;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Enemy.prototype.isDead = function () {
            return this.enemyIsDead;
        };
        // Initializes variables and creates new objects
        Enemy.prototype.Start = function () {
            console.log("start of enemy");
            this._dy = 5;
            this.Reset();
        };
        // updates the game object every frame
        Enemy.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        Enemy.prototype.Reset = function () {
            this.position.x = Math.floor((Math.random() * (objects.Game.WIDTH - this.width)) + this.halfWidth);
            this.position.y = -this.height;
            //this._dx = Math.floor((Math.random() * 5) - 2);
            //this._dy = Math.floor((Math.random() * 6) + 5);
        };
        // move the object to some new location
        Enemy.prototype.Move = function () {
            this.position.y += this._dy;
        };
        // check to see if some boundary has been passed
        Enemy.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.position.y >= objects.Game.HEIGHT + this.height) {
                this.Reset();
            }
        };
        Enemy.prototype.Attack = function () {
            console.log("attack");
        };
        return Enemy;
    }(animate.Animate));
    animate.Enemy = Enemy;
})(animate || (animate = {}));
//# sourceMappingURL=enemy.js.map