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
            _this.Start();
            return _this;
        }
        Level1.prototype.Start = function () {
            this._mapLevel1 = new objects.MapLevel1(this.assetManager);
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
            this.Main();
        };
        Level1.prototype.Update = function () {
            this._player.Update();
            return 0;
        };
        Level1.prototype.Main = function () {
            var _this = this;
            this.addChild(this._mapLevel1);
            this._enemies.forEach(function (enemy) {
                _this.addChild(enemy);
            });
            this.addChild(this._player);
        };
        return Level1;
    }(objects.Scene));
    scenes.Level1 = Level1;
})(scenes || (scenes = {}));
//# sourceMappingURL=level1.js.map