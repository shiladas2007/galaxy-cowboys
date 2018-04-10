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
    var Scene = /** @class */ (function (_super) {
        __extends(Scene, _super);
        function Scene() {
            var _this = _super.call(this) || this;
            _this.assetManager = managers.Game.assetManager;
            return _this;
        }
        Object.defineProperty(Scene.prototype, "topBoundary", {
            get: function () {
                return this.y;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "bottomBoundary", {
            get: function () {
                return this.y + managers.Game.HEIGHT;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "leftBoundary", {
            get: function () {
                return this.x;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "rightBoundary", {
            get: function () {
                return this.x + managers.Game.WIDTH;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "player", {
            get: function () {
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "enemies", {
            get: function () {
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "projectiles", {
            get: function () {
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "tooltips", {
            get: function () {
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Scene.prototype.start = function () { };
        Scene.prototype.update = function () {
            return 0;
        };
        Scene.prototype.main = function () { };
        Scene.prototype.addProjectile = function (projectile) { };
        Scene.prototype.removeObject = function (o) {
            this.removeChild(o);
            o = null;
        };
        Scene.prototype.destroyAll = function () { };
        return Scene;
    }(createjs.Container));
    objects.Scene = Scene;
})(objects || (objects = {}));
//# sourceMappingURL=scene.js.map