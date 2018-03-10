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
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        function GameOverScene() {
            var _this = _super.call(this) || this;
            _this.start();
            return _this;
        }
        GameOverScene.prototype.start = function () {
            _super.prototype.start.call(this);
            this._background = new ui.Background(this.assetManager, "gameover");
            this._startButton2 = new ui.Button(this.assetManager, "startButton2", managers.Game.WIDTH * 0.5, 320, 1, true);
            this._startButton = new ui.Button(this.assetManager, "startButton", managers.Game.WIDTH * 0.5, 320, 0.1, true);
            this.main();
        };
        GameOverScene.prototype.Main = function () {
            _super.prototype.main.call(this);
        };
        return GameOverScene;
    }(scenes.StartScene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map