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
    var Level1 = /** @class */ (function (_super) {
        __extends(Level1, _super);
        function Level1(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        Level1.prototype.Start = function () {
            this._mapLevel1 = new objects.MapLevel1(this.assetManager);
            console.log("before initiate enemy");
            this._enemy11 = new animate.Enemy(this.assetManager, "enemy1", 1, 0, 100, 100);
            //this._enemy12=new animate.Enemy(this.assetManager,"enemy1",1,1,220,180);
            //this._enemy13=new animate.Enemy(this.assetManager,"enemy1",1,1,400,150);
            console.log("initiate enemy done");
            this.Main();
        };
        Level1.prototype.Update = function () {
            return 0;
        };
        Level1.prototype.Main = function () {
            this.addChild(this._mapLevel1);
            this.addChild(this._enemy11);
            this.addChild(this._enemy12);
            this.addChild(this._enemy13);
        };
        return Level1;
    }(objects.Scene));
    scenes.Level1 = Level1;
})(scenes || (scenes = {}));
//# sourceMappingURL=level1.js.map