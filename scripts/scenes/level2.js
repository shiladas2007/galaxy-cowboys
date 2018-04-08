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
    var Level2 = /** @class */ (function (_super) {
        __extends(Level2, _super);
        // private _scoreboard: managers.ScoreBoard;
        function Level2() {
            var _this = _super.call(this, "mapLevel2") || this;
            _this.start();
            return _this;
        }
        Level2.prototype.start = function () {
            _super.prototype.start.call(this);
            console.log("s" + managers.Game.scoreBoard.Score);
            // create the scoreboard UI for the Scene
            this._scoreboard = new managers.ScoreBoard();
            this._scoreboard = managers.Game.scoreBoard;
            console.log("Initializing enemies...");
            this._enemies = [
                new animate.Enemy(config.Enemy.GUARD, 120, 140),
                new animate.Enemy(config.Enemy.WATCHER, 320, 340),
                new animate.Enemy(config.Enemy.PATROLLER, 500, 100)
            ];
            console.log("Enemies initialized.");
            console.log("Initializing player...");
            this._player = new animate.Player(config.Character.GUNSLINGER, 100, 420);
            console.log("Player initialized.");
            this.main();
        };
        Level2.prototype.update = function () {
            _super.prototype.update.call(this);
            if (!this._enemies.length) {
                managers.Game.currentScene = config.Scene.LEVEL3;
            }
            return managers.Game.currentScene;
        };
        Level2.prototype.main = function () {
            _super.prototype.main.call(this);
        };
        return Level2;
    }(scenes.PlayScene));
    scenes.Level2 = Level2;
})(scenes || (scenes = {}));
//# sourceMappingURL=level2.js.map