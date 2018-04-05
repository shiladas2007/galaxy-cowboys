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
        function Level2() {
            var _this = _super.call(this, "mapLevel2") || this;
            _this.start();
            return _this;
        }
        Level2.prototype.start = function () {
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
            // Manage tooltip
            if (managers.Game.keyboardManager.nextTutorial) {
                this.removeChild(this._tooltip);
                //this._tooltip = new ui.Tooltip("tooltipBg",430,370,"Use Left-click to shoot. Press 'c' for closing this tutorial",false);
                this.addChild(this._tooltip);
            }
            if (managers.Game.keyboardManager.closeTutorial) {
                this.removeChild(this._tooltip);
            }
            if (!this._enemies.length) {
                //managers.Game.currentScene = config.Scene.LEVEL2;
            }
            return managers.Game.currentScene;
        };
        Level2.prototype.main = function () {
            _super.prototype.main.call(this);
            //this._tooltip = new ui.Tooltip("tooltipBg", 430, 370, "Use WASD and arrow keys to move. Press 'n' for next tutorial. Or 'c' for closing this tutorial.");                    
            //this.addChild(this._tooltip);
        };
        return Level2;
    }(scenes.PlayScene));
    scenes.Level2 = Level2;
})(scenes || (scenes = {}));
//# sourceMappingURL=level2.js.map