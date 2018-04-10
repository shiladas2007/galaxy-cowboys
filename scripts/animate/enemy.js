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
        function Enemy(enemyType, px, py) {
            var _this = this;
            var enemyImg = "enemyGuard";
            var hp = 1;
            var mvspd = 1;
            switch (enemyType) {
                case config.Enemy.GUARD:
                    enemyImg = "enemyGuard";
                    break;
                case config.Enemy.WATCHER:
                    enemyImg = "enemyWatcher";
                    break;
                case config.Enemy.PATROLLER:
                    enemyImg = "enemyPatroller";
                    break;
            }
            _this = _super.call(this, enemyImg, hp, mvspd, px, py) || this;
            console.log("constructor of enemy");
            _this.hp = hp;
            _this.mvspd = mvspd;
            _this._weapon = new objects.Weapon(config.Weapon.BLASTER);
            _this.start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        Enemy.prototype.start = function () {
            var _this = this;
            this.attackInterval = setInterval(function () { _this.attack(); }, this._weapon.fireRate * 1000);
        };
        // updates the game object every frame
        Enemy.prototype.update = function () {
            this.move();
            this.checkBounds();
        };
        // reset the object's location to some value
        Enemy.prototype.reset = function () {
            this.x = Math.floor((Math.random() * (managers.Game.WIDTH - this.width)) + this.halfWidth);
            this.y = -this.height;
        };
        // move the object to some new location
        Enemy.prototype.move = function () {
        };
        // check to see if some boundary has been passed
        Enemy.prototype.checkBounds = function () {
            // check lower bounds
            if (this.y >= managers.Game.HEIGHT + this.height) {
                this.reset();
            }
        };
        Enemy.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            clearInterval(this.attackInterval);
            var explosion = new objects.explosion(this.x, this.y, "smallexplosion");
            managers.Game.currentSceneObject.addChild(explosion);
            createjs.Sound.play("monster_die");
            managers.Game.scoreBoard.Score += 200;
        };
        Enemy.prototype.attack = function () {
            var targetX;
            var targetY;
            // Shoot down
            targetX = this.x;
            targetY = this.y + 1;
            var targetPos = new math.Vec2(targetX, targetY);
            var newProjectile = new objects.Projectile("laser", this, targetPos);
        };
        return Enemy;
    }(animate.Animate));
    animate.Enemy = Enemy;
})(animate || (animate = {}));
//# sourceMappingURL=enemy.js.map