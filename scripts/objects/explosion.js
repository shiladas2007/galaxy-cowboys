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
    var explosion = /** @class */ (function (_super) {
        __extends(explosion, _super);
        // private instance variables
        // public properties
        // constructors
        function explosion(px, py) {
            var _this = this;
            console.log("t");
            console.log(managers.Game.textureAtlas);
            _this = _super.call(this, managers.Game.textureAtlas, "smallexplosion") || this;
            _this.x = px;
            _this.y = py;
            _this.Start();
            return _this;
        }
        // private methods
        explosion.prototype._animationEnded = function () {
            this.alpha = 0;
            this.off("animationend", this._animationEnded.bind(this), false);
            managers.Game.currentSceneObject.removeChild(this);
        };
        // public methods
        explosion.prototype.Start = function () {
            this.on("animationend", this._animationEnded.bind(this), false);
        };
        explosion.prototype.Update = function () {
        };
        return explosion;
    }(createjs.Sprite));
    objects.explosion = explosion;
})(objects || (objects = {}));
//# sourceMappingURL=explosion.js.map