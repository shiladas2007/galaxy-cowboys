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
        function Button(assetManager, imageString, x, y, isCentered) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, assetManager.getResult(imageString)) || this;
            _this.x = x;
            _this.y = y;
            _this.on("mouseover", _this.mouseOver);
            _this.on("mouseout", _this.mouseOut);
            return _this;
        }
        Button.prototype.mouseOver = function () {
            // mouseover effect
        };
        Button.prototype.mouseOut = function () {
            // mouseout effect
        };
        return Button;
    }(createjs.Bitmap));
    ui.Button = Button;
})(ui || (ui = {}));
//# sourceMappingURL=button.js.map