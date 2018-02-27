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
var scenes;
(function (scenes) {
    var Level1 = /** @class */ (function (_super) {
        __extends(Level1, _super);
        function Level1(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this._hasPlayerMoved = false;
            _this.Start();
            return _this;
        }
        Level1.prototype.Start = function () {
            this._map = new objects.MapLevel1(this.assetManager);
            console.log("Initializing enemies...");
            this._enemies = [
                new animate.Enemy(this.assetManager, "enemy1", 1, 1, 100, 50),
                new animate.Enemy(this.assetManager, "enemy2", 1, 1, 220, 180),
                new animate.Enemy(this.assetManager, "enemy3", 1, 1, 540, 150)
            ];
            console.log("Enemies initialized.");
            console.log("Initializing player...");
            this._player = new animate.Player(this.assetManager, "cowboy1", 1, 1, 100, 420);
            console.log("Player initialized.");
            this._controlsIntroduck = new ui.Image(this.assetManager, "controlsIntroduck", 120, 280);
            this.Main();
        };
        Level1.prototype.Update = function () {
            var _this = this;
            this._player.Update();
            this._map.Update();
            // Check for collisions
            this._enemies.forEach(function (enemy) {
                enemy.Update();
                if (managers.Collision.Check(_this._player, enemy)) {
                    _this._player.Hp -= 1;
                    if (_this._player.Hp <= 0) {
                        objects.Game.currentScene = config.Scene.GAMEOVER;
                    }
                }
            });
            // Make controls intro bubble disappear when player moves
            if (!this._hasPlayerMoved) {
                if (objects.Game.keyboardManager.moveForward || objects.Game.keyboardManager.moveBackward
                    || objects.Game.keyboardManager.moveLeft || objects.Game.keyboardManager.moveRight) {
                    this._hasPlayerMoved = true;
                    this.removeChild(this._controlsIntroduck);
                }
            }
            return objects.Game.currentScene;
        };
        Level1.prototype.Main = function () {
            var _this = this;
            this.addChild(this._map);
            this._enemies.forEach(function (enemy) {
                _this.addChild(enemy);
            });
            this.addChild(this._player);
            this.addChild(this._controlsIntroduck);
        };
        return Level1;
    }(objects.Scene));
    scenes.Level1 = Level1;
})(scenes || (scenes = {}));
//# sourceMappingURL=level1.js.map