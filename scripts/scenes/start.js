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
        function StartScene() {
            var _this = _super.call(this) || this;
            _this.start();
            return _this;
        }
        StartScene.prototype.start = function () {
            this._background = new ui.Background(this.assetManager, "background");
            this._startButton2 = new ui.Button(this.assetManager, "startButton2", 300, 240);
            this._startButton = new ui.Button(this.assetManager, "startButton", 300, 240, 0.1);
            this.main();
        };
        StartScene.prototype.update = function () {
            return managers.Game.currentScene;
        };
        StartScene.prototype.main = function () {
            this.addChild(this._background);
            this.addChild(this._startButton2);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick);
        };
        StartScene.prototype._startButtonClick = function () {
            managers.Game.currentScene = config.Scene.LEVEL1;
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map