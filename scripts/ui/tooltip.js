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
        function Tooltip(imageString, messages, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var _this = _super.call(this) || this;
            _this._currentIndex = 0;
            _this.x = x;
            _this.y = y;
            _this._messages = messages;
            _this.start();
            return _this;
        }
        Tooltip.prototype.start = function () {
            this._tooltipLabel = new ui.Label(this._messages[0], "12px", "Sporting Grotesque", "#000000");
            this._tooltipLabel.lineWidth = 170;
            this._bgImg = new ui.Image("tooltipBg");
            this._nextButton = new ui.Button("next", 100, 75);
            this._closeButton = new ui.Button("close", 165, 0);
            this.main();
        };
        Tooltip.prototype.main = function () {
            var _this = this;
            this.addChild(this._bgImg);
            this.addChild(this._nextButton);
            this.addChild(this._closeButton);
            this.addChild(this._tooltipLabel);
            this.displayPage(0);
            this._nextButton.addEventListener("click", function () {
                _this.displayNextPage();
            });
            this._closeButton.addEventListener("click", function () {
                _this.close();
            });
        };
        Tooltip.prototype.update = function () {
            if (managers.Game.keyboardManager.nextTutorial) {
                this.displayNextPage();
            }
            if (managers.Game.keyboardManager.closeTutorial) {
                managers.Game.currentSceneObject.removeChild(this);
            }
        };
        Tooltip.prototype.addPage = function (message) {
            this._messages.push(message);
        };
        Tooltip.prototype.displayPage = function (index) {
            if (index >= this._messages.length) {
                return;
            }
            this._tooltipLabel.text = this._messages[index];
            if (index == this._messages.length - 1) {
                // Last page
                this._nextButton.visible = false;
            }
        };
        Tooltip.prototype.displayNextPage = function () {
            this._currentIndex++;
            this.displayPage(this._currentIndex);
        };
        Tooltip.prototype.close = function () {
            managers.Game.currentSceneObject.removeChild(this);
        };
        return Tooltip;
    }(createjs.Container));
    ui.Tooltip = Tooltip;
})(ui || (ui = {}));
//# sourceMappingURL=tooltip.js.map