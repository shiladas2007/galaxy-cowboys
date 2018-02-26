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
var objects;
(function (objects) {
    var MapLevel1 = /** @class */ (function (_super) {
        __extends(MapLevel1, _super);
        function MapLevel1(assetManager) {
            var _this = _super.call(this, assetManager.getResult("mapLevel1")) || this;
            _this.Start();
            return _this;
        }
        MapLevel1.prototype._checkBounds = function () {
            if (this.y >= 0) {
            }
        };
        MapLevel1.prototype._move = function () {
            this.y += this._dy;
        };
        MapLevel1.prototype.Start = function () {
            this._dy = 5;
        };
        MapLevel1.prototype.Update = function () {
        };
        return MapLevel1;
    }(createjs.Bitmap));
    objects.MapLevel1 = MapLevel1;
})(objects || (objects = {}));
//# sourceMappingURL=mapLevel1.js.map