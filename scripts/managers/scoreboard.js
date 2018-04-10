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
var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function (_super) {
        __extends(ScoreBoard, _super);
        // constructors
        function ScoreBoard() {
            var _this = _super.call(this) || this;
            // private instance variables
            _this._lives = 1;
            _this._score = 0;
            _this._initialize();
            return _this;
        }
        Object.defineProperty(ScoreBoard.prototype, "Lives", {
            // public properties
            get: function () {
                return this._lives;
            },
            set: function (newLives) {
                this._lives = newLives;
                this.LivesLabel.text = "Lives: " + this._lives;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Score", {
            get: function () {
                return this._score;
            },
            set: function (newScore) {
                this._score = newScore;
                this.ScoreLabel.text = "Score: " + this._score;
            },
            enumerable: true,
            configurable: true
        });
        ScoreBoard.prototype.main = function () {
            this.addChild(this.LivesLabel);
            this.addChild(this.ScoreLabel);
        };
        ScoreBoard.prototype._initialize = function () {
            this.LivesLabel = new ui.Label("Lives: 0", "14pt", "Sporting Grotesque", "#FFFF00", 20, 10, false);
            this.ScoreLabel = new ui.Label("Score: 0", "14pt", "Sporting Grotesque", "#FFFF00", 500, 10, false);
            this.Lives = 1;
            this.Score = 0;
            this.main();
        };
        return ScoreBoard;
    }(createjs.Container));
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map