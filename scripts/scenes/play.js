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
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        function PlayScene(assetManager, mapString) {
            var _this = _super.call(this, assetManager) || this;
            _this._map = new objects.Map(_this.assetManager, mapString);
            return _this;
        }
        PlayScene.prototype.Start = function () {
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            this._map.Update();
            this._player.Update();
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
            return objects.Game.currentScene;
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this._map);
            this._enemies.forEach(function (enemy) {
                _this.addChild(enemy);
            });
            this.addChild(this._player);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map