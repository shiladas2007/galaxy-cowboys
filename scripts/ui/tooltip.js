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
    var Tooltip = /** @class */ (function (_super) {
        __extends(Tooltip, _super);
        function Tooltip(imageString, x, y, msg, needNextButton) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (needNextButton === void 0) { needNextButton = true; }
            var _this = _super.call(this) || this;
            _this.x = x;
            _this.y = y;
            _this._msg = msg;
            _this._needNextButton = needNextButton;
            _this.start();
            return _this;
        }
        Tooltip.prototype.start = function () {
            this._tooltipLabel = new ui.Label(this._msg, "12px", "Sporting Grotesque", "#000000");
            this._tooltipLabel.lineWidth = 170;
            this._bgImg = new ui.Image("tooltipBg");
            this._nextButton = new ui.Button("next", 100, 75);
            if (!this._needNextButton) {
                this._nextButton.visible = false;
            }
            this._closeButton = new ui.Button("close", 165, 0);
            this.main();
        };
        Tooltip.prototype.main = function () {
            this.addChild(this._bgImg);
            this.addChild(this._nextButton);
            this.addChild(this._closeButton);
            this.addChild(this._tooltipLabel);
            this._nextButton.on("click", this._nextButtonClick);
            this._closeButton.on("click", this._closeButtonClick);
        };
        Tooltip.prototype._nextButtonClick = function () {
            console.log("t");
        };
        Tooltip.prototype._closeButtonClick = function () {
            console.log("close in");
            //managers.Game.currentSceneObject.removeChild(this);
        };
        return Tooltip;
    }(createjs.Container));
    ui.Tooltip = Tooltip;
})(ui || (ui = {}));
//# sourceMappingURL=tooltip.js.map