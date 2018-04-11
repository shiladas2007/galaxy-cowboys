/// <reference path = "../objects/color.ts"/>
var glm;
/// <reference path = "../objects/color.ts"/>
(function (glm) {
    glm.EPSILON = 0.000001;
    glm.Deg2Rad = Math.PI / 180.0;
    glm.Rad2Deg = 180.0 / Math.PI;
    /**
     * Returns the -1 if the value is less than 0 and 1 if the value is greater than 0
     *
     * @export
     * @param {number} value
     * @returns {number}
     */
    function sign(value) {
        return (value < 0.0) ? -1.0 : 1.0;
    }
    glm.sign = sign;
    /**
     * This method confines the value provided between min and max and returns the result
     *
     * @export
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @returns {number}
     */
    function clamp(value, min, max) {
        if (value < min) {
            value = min;
        }
        else if (value > max) {
            value = max;
        }
        return value;
    }
    glm.clamp = clamp;
    /**
     * Clamps a value between 0 and 1 and returns the result
     *
     * @export
     * @param {number} value
     * @returns {number}
     */
    function clamp01(value) {
        var result;
        if (value < 0.0) {
            result = 0.0;
        }
        else if (value > 1.0) {
            result = 1.0;
        }
        else {
            result = value;
        }
        return result;
    }
    glm.clamp01 = clamp01;
    function limitMagnitude(vector, magnitude) {
        var length = glm.vec2.magnitude(vector);
        if (length > magnitude) {
            var limiter = magnitude / length;
            vector.x *= limiter;
            vector.y *= limiter;
            return vector;
        }
        else {
            return vector;
        }
    }
    glm.limitMagnitude = limitMagnitude;
    /**
     * Performs Linear Interpolation between and b
     * at some t value betwee 0 and 1
     *
     * @export
     * @param {number} a
     * @param {number} b
     * @param {number} t
     * @returns {number}
     */
    function lerp(a, b, t) {
        return a + (b - a) * glm.clamp01(t);
    }
    glm.lerp = lerp;
    /**
     * Lerps between a and b at some t value - unclamped.
     *
     * @export
     * @param {number} a
     * @param {number} b
     * @param {number} t
     * @returns {number}
     */
    function lerpUnclamped(a, b, t) {
        return a + (b - a) * t;
    }
    glm.lerpUnclamped = lerpUnclamped;
    /**
     * Same as Lerp but makes sure the values interpolate correctly when they wrap around 360 degrees.
     *
     * @export
     * @param {number} a
     * @param {number} b
     * @param {number} t
     * @returns {number}
     */
    function lerpAngle(a, b, t) {
        var num = glm.repeat(b - a, 360.0);
        if (num > 180.0) {
            num -= 360.0;
        }
        return a + num * glm.clamp01(t);
    }
    glm.lerpAngle = lerpAngle;
    /**
     * lerps between to color objects at some tValue;
     *
     * @export
     * @param {objects.Color} a
     * @param {objects.Color} b
     * @param {number} t
     * @returns {objects.Color}
     */
    function lerpColor(a, b, t) {
        var red = a.r + (b.r - a.r) * glm.clamp01(t);
        var green = a.g + (b.g - a.g) * glm.clamp01(t);
        var blue = a.b + (b.b - a.b) * glm.clamp01(t);
        var alpha = a.a + (b.a - a.a) * glm.clamp01(t);
        return new objects.Color(red, green, blue, alpha);
    }
    glm.lerpColor = lerpColor;
    /**
     * Moves a value current towards target.
     * This is essentially the same as Lerp but instead the function will ensure that the speed never exceeds maxDelta.
     * Negative values of maxDelta pushes the value away from target.
     *
     * @export
     * @param {number} current  // the current value
     * @param {number} target   // the value to move towards
     * @param {number} maxDelta // the maximum change that should be applie to the value
     * @returns {number}
     */
    function moveTowards(current, target, maxDelta) {
        var result;
        if (Math.abs(target - current) <= maxDelta) {
            result = target;
        }
        else {
            result = current + glm.sign(target - current) * maxDelta;
        }
        return result;
    }
    glm.moveTowards = moveTowards;
    /**
     * Same as MoveTowards but makes sure the values interpolate correctly when they wrap around 360 degrees.
     * Variables current and target are assumed to be in degrees.
     *
     * @export
     * @param {number} current
     * @param {number} target
     * @param {number} maxDelta
     * @returns {number}
     */
    function moveTowardsAngle(current, target, maxDelta) {
        var num = glm.deltaAngle(current, target);
        var result;
        if (-maxDelta < num && num < maxDelta) {
            result = target;
        }
        else {
            target = current + num;
            result = glm.moveTowards(current, target, maxDelta);
        }
        return result;
    }
    glm.moveTowardsAngle = moveTowardsAngle;
    /**
     * Interpolates between min and max with smoothing at the limits.
     *
     * @export
     * @param {number} from
     * @param {number} to
     * @param {number} t
     * @returns {number}
     */
    function smoothStep(from, to, t) {
        t = glm.clamp01(t);
        t = -2.0 * t * t * t + 3.0 * t * t;
        return to * t + from * (1.0 - t);
    }
    glm.smoothStep = smoothStep;
    function gamma(value, absmax, gamma) {
        var flag = false;
        if (value < 0.0) {
            flag = true;
        }
        var num = Math.abs(value);
        var result;
        if (num > absmax) {
            result = ((!flag) ? num : (-num));
        }
        else {
            var num2 = Math.pow(num / absmax, gamma) * absmax;
            result = ((!flag) ? num2 : (-num2));
        }
        return result;
    }
    glm.gamma = gamma;
    /**
     * Compares two floating point values and returns true if they are similar.
     *
     * @export
     * @param {number} a
     * @param {number} b
     * @returns {boolean}
     */
    function approximately(a, b) {
        return Math.abs(b - a) < Math.max(1E-06 * Math.max(Math.abs(a), Math.abs(b)), glm.EPSILON * 8.0);
    }
    glm.approximately = approximately;
    /**
     * Loops the value t, so that it is never larger than length and never smaller than 0.
     *
     * @export
     * @param {number} t
     * @param {number} length
     * @returns {number}
     */
    function repeat(t, length) {
        return glm.clamp(t - Math.floor(t / length) * length, 0.0, length);
    }
    glm.repeat = repeat;
    /**
     * PingPongs the value t, so that it is never larger than length and never smaller than 0.
     *
     * @export
     * @param {number} t
     * @param {number} length
     * @returns {number}
     */
    function pingpong(t, length) {
        t = glm.repeat(t, length * 2.0);
        return length - Math.abs(t - length);
    }
    glm.pingpong = pingpong;
    /**
     * Calculates the linear parameter t that produces the interpolant value within the range [a, b].
     *
     * @export
     * @param {number} a
     * @param {number} b
     * @param {number} value
     * @returns {number}
     */
    function inverseLerp(a, b, value) {
        var result;
        if (a != b) {
            result = glm.clamp01((value - a) / (b - a));
        }
        else {
            result = 0.0;
        }
        return result;
    }
    glm.inverseLerp = inverseLerp;
    /**
     * Calculates the shortest difference between two given angles given in degrees.
     *
     * @export
     * @param {number} current
     * @param {number} target
     * @returns {number}
     */
    function deltaAngle(current, target) {
        var num = glm.repeat(target - current, 360.0);
        if (num > 180.0) {
            num -= 360.0;
        }
        return num;
    }
    glm.deltaAngle = deltaAngle;
    function lineIntersection(p1, p2, p3, p4, result) {
        if (!result) {
            result = new glm.vec2();
        }
        var num = p2.x - p1.x;
        var num2 = p2.y - p1.y;
        var num3 = p4.x - p3.x;
        var num4 = p4.y - p3.y;
        var num5 = num * num4 - num2 * num3;
        var result2;
        if (num5 == 0.0) {
            result2 = false;
        }
        else {
            var num6 = p3.x - p1.x;
            var num7 = p3.y - p1.y;
            var num8 = (num6 * num4 - num7 * num3) / num5;
            result = new glm.vec2(p1.x + num8 * num, p1.y + num8 * num2);
            result2 = true;
        }
        return result2;
    }
    glm.lineIntersection = lineIntersection;
    function RandomRange(min, max) {
        return Math.random() * (max - min + 1) + min;
    }
    glm.RandomRange = RandomRange;
    /**
     * This Utility function checks to see if a number is very small (close to EPSILON)
     * If so, it changes the value to 0.0;
     *
     * @export
     * @param {number} value
     * @returns {number}
     */
    function Sanitize(value) {
        if ((value >= -glm.EPSILON) && (value <= glm.EPSILON)) {
            value = 0.0;
        }
        return value;
    }
    glm.Sanitize = Sanitize;
})(glm || (glm = {}));
//# sourceMappingURL=util.js.map