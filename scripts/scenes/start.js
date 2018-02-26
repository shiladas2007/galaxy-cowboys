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
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        function StartScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        StartScene.prototype.Start = function () {
            this._background = new ui.Background(this.assetManager);
            this._startButton = new ui.Button(this.assetManager, "startButton", 180, 300);
            this.Main();
        };
        StartScene.prototype.Update = function () {
            return objects.Game.currentScene;
        };
        StartScene.prototype.Main = function () {
            this.addChild(this._background);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick);
        };
        StartScene.prototype._startButtonClick = function () {
            objects.Game.currentScene = config.Scene.LEVEL1;
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map