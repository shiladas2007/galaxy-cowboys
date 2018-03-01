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
var ui;
(function (ui) {
    var Background = /** @class */ (function (_super) {
        __extends(Background, _super);
        // private instance variables
        // public properties
        // Constructor
        function Background(assetManager, imageString) {
            var _this = _super.call(this, assetManager.getResult(imageString)) || this;
            _this.start();
            return _this;
        }
        // private methods
        // reset the objects location to some value
        // public methods
        // Initializes variables and creates new objects
        Background.prototype.start = function () {
        };
        // updates the game object every frame
        Background.prototype.update = function () {
        };
        return Background;
    }(createjs.Bitmap));
    ui.Background = Background;
})(ui || (ui = {}));
//# sourceMappingURL=background.js.map