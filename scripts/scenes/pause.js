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
    var PauseScene = /** @class */ (function (_super) {
        __extends(PauseScene, _super);
        function PauseScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.start();
            return _this;
        }
        PauseScene.prototype.start = function () {
        };
        PauseScene.prototype.update = function () {
            return 0;
        };
        PauseScene.prototype.main = function () {
        };
        return PauseScene;
    }(objects.Scene));
    scenes.PauseScene = PauseScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=pause.js.map