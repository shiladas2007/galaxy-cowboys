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
    var Image = /** @class */ (function (_super) {
        __extends(Image, _super);
        function Image(imageString, x, y, isCentered) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, managers.Game.assetManager.getResult(imageString)) || this;
            _this.x = x;
            _this.y = y;
            _this.width = _this.getBounds().width;
            _this.height = _this.getBounds().height;
            if (isCentered) {
                _this.x -= _this.width * 0.5;
            }
            return _this;
        }
        return Image;
    }(createjs.Bitmap));
    ui.Image = Image;
})(ui || (ui = {}));
//# sourceMappingURL=image.js.map