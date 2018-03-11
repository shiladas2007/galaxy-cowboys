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
        function Level1() {
            var _this = _super.call(this, "mapLevel1") || this;
            _this._hasPlayerMoved = false;
            _this.start();
            return _this;
        }
        Level1.prototype.start = function () {
            console.log("Initializing enemies...");
            this._enemies = [
                new animate.Enemy(config.Enemy.GUARD, 100, 50),
                new animate.Enemy(config.Enemy.WATCHER, 220, 180),
                new animate.Enemy(config.Enemy.PATROLLER, 540, 150)
            ];
            console.log("Enemies initialized.");
            console.log("Initializing player...");
            this._player = new animate.Player("cowboy1", 1, 1, 100, 420);
            console.log("Player initialized.");
            this._controlsIntroduck = new ui.Image("controlsIntroduck", 120, 280);
            this.main();
        };
        Level1.prototype.update = function () {
            _super.prototype.update.call(this);
            // Make controls intro bubble disappear when player moves
            if (!this._hasPlayerMoved) {
                if (managers.Game.keyboardManager.moveForward || managers.Game.keyboardManager.moveBackward
                    || managers.Game.keyboardManager.moveLeft || managers.Game.keyboardManager.moveRight) {
                    this._hasPlayerMoved = true;
                    this.removeChild(this._controlsIntroduck);
                }
            }
            return managers.Game.currentScene;
        };
        Level1.prototype.main = function () {
            _super.prototype.main.call(this);
            this.addChild(this._controlsIntroduck);
        };
        return Level1;
    }(scenes.PlayScene));
    scenes.Level1 = Level1;
})(scenes || (scenes = {}));
//# sourceMappingURL=level1.js.map