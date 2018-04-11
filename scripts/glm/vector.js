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
    var Vector = /** @class */ (function (_super) {
        __extends(Vector, _super);
        function Vector(x, y, z, w) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (w === void 0) { w = 0; }
            return _super.call(this, x, y, z, w) || this;
        }
        Object.defineProperty(Vector.prototype, "rgb", {
            get: function () {
                return new Vector(this.x, this.y, this.z);
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
        return Vector;
    }(glm.Point));
    glm.Vector = Vector;
})(glm || (glm = {}));
//# sourceMappingURL=vector.js.map