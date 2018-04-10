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
        function Tooltip(imageString, messages) {
            var _this = _super.call(this) || this;
            _this._currentIndex = 0;
            _this._messages = messages;
            _this.start();
            return _this;
        }
        Tooltip.prototype.start = function () {
            this._bgImg = new ui.Image("tooltipBg");
            this.width = this._bgImg.width;
            this.height = this._bgImg.height;
            var marginX = 10;
            var marginY = 10;
            this.x = managers.Game.WIDTH - this.width - marginX;
            this.y = managers.Game.HEIGHT - this.height - marginY;
            this._tooltipLabel = new ui.Label(this._messages[0], "12px", "Sporting Grotesque", "#fff");
            this._tooltipLabel.shadow = new createjs.Shadow("#000", 1, 1, 0);
            this._nextButton = new ui.Button("next");
            this._closeButton = new ui.Button("close");
            this._arrange();
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
            if (managers.Game.keyboardManager.nextTooltip) {
                this.displayNextPage();
            }
            if (managers.Game.keyboardManager.closeTooltip) {
                managers.Game.currentSceneObject.removeChild(this);
            }
        };
        Tooltip.prototype.addPage = function (message) {
            this._messages.push(message);
        };
        Tooltip.prototype._arrange = function () {
            var marginX = 10;
            var marginY = 10;
            this._closeButton.x = this.width - this._closeButton.width - marginX;
            this._closeButton.y = marginY;
            this._nextButton.x = this.width - this._nextButton.width - marginX;
            this._nextButton.y = this.height - this._nextButton.height - marginY;
            this._tooltipLabel.x = 35;
            this._tooltipLabel.y = 15;
            this._tooltipLabel.lineWidth = this.width - this._closeButton.width - 35;
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