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
    var Particle = /** @class */ (function (_super) {
        __extends(Particle, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Particle(type, color, size) {
            if (type === void 0) { type = "circle"; }
            if (color === void 0) { color = objects.Color.Red(); }
            if (size === void 0) { size = 50; }
            var _this = _super.call(this) || this;
            // PUBLIC INSTANCE VARIABLES
            _this.velocity = new glm.vec2();
            _this.acceleration = new glm.vec2();
            _this.force = new glm.vec2();
            _this.mass = 1.0;
            _this.life = 0; // lifetime remaining in seconds
            _this.color = color;
            _this.size = size;
            _this.type = type;
            _this._initialize();
            return _this;
        }
        Object.defineProperty(Particle.prototype, "size", {
            // PUBLIC PROPERTIES
            /**
             * This property returns the size of the particle in pixels
             *
             * @type {number}
             * @memberof Particle
             */
            get: function () {
                return this._size;
            },
            /**
             * This property sets the size of the particle in pixels
             *
             * @memberof Particle
             */
            set: function (newSize) {
                this._size = newSize;
                if (this.shape) {
                    switch (this.type) {
                        case "circle":
                            this._setCircleGraphics();
                            this._setCircleCache();
                            break;
                        case "square":
                            this._setSquareGraphics();
                            this._setSquareCache();
                            break;
                        case "triangle":
                            this._setTriangleGraphics();
                            this._setTriangleCache();
                            break;
                        case "hexagon":
                            this._setHexagonGraphics();
                            this._setHexagonCache();
                            break;
                        case "star":
                            this._setStarGraphics();
                            this._setStarCache();
                            break;
                        case "explosion":
                        case "flame":
                            this.shape.scaleX = this._size / this.shapeWidth;
                            this.shape.scaleY = this._size / this.shapeHeight;
                            break;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Particle.prototype, "color", {
            /**
             * This property returns the color of the particle
             *
             * @type {objects.Color}
             * @memberof Particle
             */
            get: function () {
                return this._color;
            },
            /**
             * This property sets the color of the particle
             *
             * @memberof Particle
             */
            set: function (newColor) {
                this.filters = [new createjs.ColorFilter(newColor.r / 255.0, newColor.g / 255.0, newColor.b / 255.0, newColor.a / 255.0)];
                if (this.shape) {
                    switch (this.type) {
                        case "circle":
                            this._setCircleGraphics();
                            break;
                        case "square":
                            this._setSquareGraphics();
                            break;
                        case "triangle":
                            this._setTriangleGraphics();
                            break;
                        case "hexagon":
                            this._setHexagonGraphics();
                            break;
                        case "star":
                            this._setStarGraphics();
                            break;
                        case "explosion":
                        case "flame":
                            this.shape.filters = this.filters;
                            this.shape.updateCache();
                            break;
                    }
                }
                this._color = newColor;
            },
            enumerable: true,
            configurable: true
        });
        // PRIVATE METHODS
        Particle.prototype._initialize = function () {
            var filter = new createjs.ColorFilter(this.color.r / 255.0, this.color.g / 255.0, this.color.b / 255.0, this.color.a / 255.0);
            this.filters = [filter];
            switch (this.type) {
                case "circle":
                    this.graphics = new createjs.Graphics();
                    this._setCircleGraphics();
                    this.shape = new createjs.Shape(this.graphics);
                    this._setCircleCache();
                    break;
                case "square":
                    this.graphics = new createjs.Graphics();
                    this._setSquareGraphics();
                    this.shape = new createjs.Shape(this.graphics);
                    this._setSquareCache();
                    break;
                case "triangle":
                    this.graphics = new createjs.Graphics();
                    this._setTriangleGraphics();
                    this.shape = new createjs.Shape(this.graphics);
                    this._setTriangleCache();
                    break;
                case "hexagon":
                    this.graphics = new createjs.Graphics();
                    this._setHexagonGraphics();
                    this.shape = new createjs.Shape(this.graphics);
                    this._setHexagonCache();
                    break;
                case "star":
                    this.graphics = new createjs.Graphics();
                    this._setStarGraphics();
                    this.shape = new createjs.Shape(this.graphics);
                    this._setStarCache();
                    break;
                case "explosion":
                    this.shape = new createjs.Bitmap(objects.Game.assetManager.getResult("explosionParticle"));
                    this.shapeWidth = this.shape.getBounds().width;
                    this.shapeHeight = this.shape.getBounds().height;
                    this._setBitmapParticleCache();
                    break;
                case "flame":
                    this.shape = new createjs.Bitmap(objects.Game.assetManager.getResult("flameParticle"));
                    this.shapeWidth = this.shape.getBounds().width;
                    this.shapeHeight = this.shape.getBounds().height;
                    this._setBitmapParticleCache();
                    break;
                default:
                    this.shape = new createjs.Shape();
                    break;
            }
        };
        Particle.prototype._setBitmapParticleCache = function () {
            this.shape.regX = this.shapeWidth * 0.5;
            this.shape.regY = this.shapeHeight * 0.5;
            this.shape.filters = this.filters;
            //this.shape.cache(0, 0, this.shape.getBounds().width, this.shape.getBounds().height, 1);
            this.shape.cache(0, 0, this.shapeWidth, this.shapeHeight, 1);
        };
        Particle.prototype._setSquareCache = function () {
            this.shape.filters = this.filters;
            //this.shape.cache(-this.size, -this.size, this.size * 2, this.size * 2, 1);
            this.shape.regX = this.size * 0.5;
            this.shape.regY = this.size * 0.5;
        };
        Particle.prototype._setCircleCache = function () {
            this.shape.filters = this.filters;
            //this.shape.cache(-this.size, -this.size, this.size * 2, this.size * 2, 1);
        };
        Particle.prototype._setTriangleCache = function () {
            this.shape.filters = this.filters;
            this.shape.regX = this.size * 0.5;
            this.shape.regY = this.size * 0.5;
        };
        Particle.prototype._setHexagonCache = function () {
            this.shape.filters = this.filters;
            this.shape.regX = this.size * 0.5;
            this.shape.regY = this.size * 0.5;
        };
        Particle.prototype._setStarCache = function () {
            this.shape.filters = this.filters;
            this.shape.regX = this.size * 0.5;
            this.shape.regY = this.size * 0.5;
        };
        Particle.prototype._setCircleGraphics = function () {
            this.graphics.clear();
            this.graphics.beginFill(this.color.hex);
            this.graphics.drawCircle(0, 0, this.size);
            this.graphics.endFill();
        };
        Particle.prototype._setSquareGraphics = function () {
            this.graphics.clear();
            this.graphics.beginFill(this.color.hex);
            this.graphics.drawRect(0, 0, this.size, this.size);
            this.graphics.endFill();
        };
        Particle.prototype._setTriangleGraphics = function () {
            this.graphics.clear();
            this.graphics.beginFill(this.color.hex);
            this.graphics.drawPolyStar(0, 0, this.size, 3, 0, 90);
            this.graphics.endFill();
        };
        Particle.prototype._setHexagonGraphics = function () {
            this.graphics.clear();
            this.graphics.beginFill(this.color.hex);
            this.graphics.drawPolyStar(0, 0, this.size, 6, 0, 90);
            this.graphics.endFill();
        };
        Particle.prototype._setStarGraphics = function () {
            this.graphics.clear();
            this.graphics.beginFill(this.color.hex);
            this.graphics.drawPolyStar(0, 0, this.size, 5, 0.5, 90);
            this.graphics.endFill();
        };
        // PUBLIC METHODS
        Particle.prototype.Update = function () {
            this.force.x /= this.mass;
            this.force.y /= this.mass;
            this.acceleration = this.acceleration.add(this.force);
            this.velocity = this.velocity.add(this.acceleration);
            this.force.x *= 0.0;
            this.force.y *= 0.0;
            this.acceleration.x *= 0.0;
            this.acceleration.y *= 0.0;
            this.shape.x = this.x;
            this.shape.y = this.y;
        };
        Particle.prototype.Seek = function (target, strength) {
            var targetVector = new glm.vec2();
            targetVector = targetVector.subtract(new glm.vec2(this.x, this.y));
            var length = glm.vec2.magnitude(targetVector);
            if (length > 0.0) {
                targetVector = targetVector.divide(new glm.vec2(length, length));
                targetVector = targetVector.multiply(new glm.vec2(strength, strength));
                return targetVector;
            }
            else {
                return new glm.vec2();
            }
        };
        // move toward/away from target, but only within radius
        Particle.prototype.Attract = function (target, strength, radius, minRange) {
            if (minRange === void 0) { minRange = glm.EPSILON; }
            var targetVector = target.subtract(new glm.vec2(this.x, this.y));
            var length2 = targetVector.sqrMagnitude();
            var rad2 = radius * radius;
            var result = new glm.vec2();
            if (length2 > (minRange * minRange)) {
                if (length2 < rad2) {
                    length2 = Math.sqrt(length2) * strength;
                    targetVector.x /= length2;
                    targetVector.y /= length2;
                    result = targetVector.subtract(this.velocity);
                }
            }
            else {
                result = new glm.vec2();
            }
            return result;
        };
        //power = scale / distance^2. capped power, min range within which produces a zero output.
        Particle.prototype.Gravitate = function (target, strength, powerCap, minRange) {
            if (minRange === void 0) { minRange = glm.EPSILON; }
            var targetVector = target.subtract(new glm.vec2(this.x, this.y));
            var length2 = targetVector.sqrMagnitude();
            var result = new glm.vec2();
            if (length2 > (minRange * minRange)) {
                var power = strength / (length2);
                power = Math.min(power, powerCap);
                targetVector.x /= Math.sqrt(length2);
                targetVector.y /= Math.sqrt(length2);
                targetVector.x *= power;
                targetVector.y *= power;
                result = targetVector;
            }
            else {
                result = new glm.vec2();
            }
            return result;
        };
        //steering behaviours that take velocity into account
        //like seek, but takes velocity into account
        Particle.prototype.Steer = function (target, strength, powerCap) {
            var targetVector = target.subtract(new glm.vec2(this.x, this.y));
            var length = glm.vec2.magnitude(targetVector);
            if (length > 0.0) {
                targetVector.x *= (strength / length);
                targetVector.y *= (strength / length);
                targetVector = targetVector.subtract(this.velocity);
                var result = targetVector;
                length = glm.vec2.magnitude(result);
                if (length > powerCap) {
                    powerCap /= length;
                    result.x *= powerCap;
                    result.y *= powerCap;
                    return result;
                }
            }
            return new glm.vec2();
        };
        //move toward target, slow down at the target
        Particle.prototype.Arrive = function (target, strength, radius, powerCap) {
            var targetVector = target.subtract(new glm.vec2(this.x, this.y));
            //faster than length() < radius
            var length2 = glm.vec2.squaredMagnitude(targetVector);
            var rad2 = radius * radius;
            var result = new glm.vec2();
            if (length2 < rad2) {
                radius *= strength;
                targetVector.x /= radius;
                targetVector.y /= radius;
                result = targetVector.subtract(this.velocity);
            }
            else {
                length2 = Math.sqrt(length2) * strength;
                targetVector.x /= length2;
                targetVector.y /= length2;
                result = targetVector.subtract(this.velocity);
            }
            var length = result.magnitude();
            if (length > powerCap) {
                powerCap /= length;
                result.x *= powerCap;
                result.y *= powerCap;
                return result;
            }
            return result;
        };
        Particle.prototype.setScale = function (size) {
            this.shape.scaleX = size;
            this.shape.scaleY = size;
        };
        Particle.prototype.getPosition = function () {
            return new glm.vec2(this.x, this.y);
        };
        return Particle;
    }(createjs.DisplayObject));
    objects.Particle = Particle;
})(objects || (objects = {}));
//# sourceMappingURL=particle.js.map