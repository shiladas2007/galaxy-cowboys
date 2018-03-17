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
var math;
(function (math) {
    var Vec2 = /** @class */ (function (_super) {
        __extends(Vec2, _super);
        function Vec2(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            return _super.call(this, x, y) || this;
        }
        Vec2.getGcd = function (x, y) {
            return y ? math.Vec2.getGcd(y, x % y) : x;
        };
        // Adapted from https://stackoverflow.com/a/4652513
        Vec2.reduce = function (numerator, denominator) {
            var gcd = math.Vec2.getGcd(numerator, denominator);
            return [numerator / gcd, denominator / gcd];
        };
        // Get distance between two Vec2 objects
        Vec2.distance = function (pointA, pointB) {
            return Math.floor(Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2)));
        };
        // For calculating paths
        Vec2.slope = function (pointA, pointB) {
            return math.Vec2.reduce(pointB.y - pointA.y, pointB.x - pointA.x);
        };
        Vec2.rise = function (pointA, pointB) {
            return pointB.y - pointA.y;
        };
        Vec2.run = function (pointA, pointB) {
            return pointB.x - pointA.x;
        };
        return Vec2;
    }(createjs.Point));
    math.Vec2 = Vec2;
})(math || (math = {}));
//# sourceMappingURL=vec2.js.map