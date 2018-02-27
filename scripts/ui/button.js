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
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        function Button(assetManager, imageString, x, y, mouseOverAlpha, isCentered) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (mouseOverAlpha === void 0) { mouseOverAlpha = 1; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, assetManager.getResult(imageString)) || this;
            _this.x = x;
            _this.y = y;
            if (isCentered) {
                _this.x -= _this.getBounds().width / 2;
            }
            _this._mouseOverAlpha = mouseOverAlpha;
            _this.on("mouseover", _this.mouseOver);
            _this.on("mouseout", _this.mouseOut);
            return _this;
        }
        Button.prototype.mouseOver = function () {
            this.alpha = this._mouseOverAlpha;
        };
        Button.prototype.mouseOut = function () {
            this.alpha = 1;
        };
        return Button;
    }(createjs.Bitmap));
    ui.Button = Button;
})(ui || (ui = {}));
//# sourceMappingURL=button.js.map