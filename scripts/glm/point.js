var glm;
(function (glm) {
    var Point = /** @class */ (function () {
        function Point(x, y, z, w) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (w === void 0) { w = 0; }
            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;
        }
        return Point;
    }());
    glm.Point = Point;
})(glm || (glm = {}));
//# sourceMappingURL=point.js.map