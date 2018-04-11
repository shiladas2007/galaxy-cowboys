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
var glm;
(function (glm) {
    var vec3 = /** @class */ (function (_super) {
        __extends(vec3, _super);
        function vec3(x, y, z) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            var _this = this;
            var thisX;
            var thisY;
            var thisZ;
            if (typeof x != 'number') {
                thisX = x.x;
                thisY = x.y;
                thisZ = y;
            }
            else {
                thisX = x;
                thisY = y;
                thisZ = z;
            }
            _this = _super.call(this, thisX, thisY, thisZ) || this;
            return _this;
        }
        Object.defineProperty(vec3.prototype, "xyz", {
            // PUBLIC GETTERS AND SETTERS
            get: function () {
                return new glm.Vector(this.x, this.y, this.z);
            },
            set: function (vec) {
                this.x = vec.x;
                this.y = vec.y;
                this.z = vec.z;
                this.w = 1.0;
            },
            enumerable: true,
            configurable: true
        });
        // PUBLIC METHODS
        vec3.prototype.toString = function () {
            return "(" + this.x + ", " + this.y + ", " + this.z + ")";
        };
        return vec3;
    }(glm.Vector));
    glm.vec3 = vec3;
})(glm || (glm = {}));
//# sourceMappingURL=vec3.js.map