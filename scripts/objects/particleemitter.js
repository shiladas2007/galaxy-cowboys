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
    var ParticleEmitter = /** @class */ (function (_super) {
        __extends(ParticleEmitter, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++
        function ParticleEmitter() {
            var _this = _super.call(this) || this;
            _this._emissionTime = 0;
            _this._timeRemaining = 0;
            _this.emissionShape = config.Emitter.ARC;
            _this.emissionRate = 10.0;
            _this.circleRadius = 10.0;
            _this.arcRadius = 200.0; // how far from emitter origin
            _this.arcAngle = 30.0; // the width of the arc
            _this.arcDirection = 90.0; // initial direction of arc
            // Emitter Playback
            _this.playing = true;
            _this.loop = true;
            _this.loopDelay = 0.0;
            _this.duration = -1.0; //negative duration means infinites
            // Particle Path Following
            _this.followPath = false;
            _this.directFollowMode = false;
            _this.lookAhead = 10.0; // how far ahead particles will seek
            _this.pathRadius = 10.0;
            _this.pathPower = 10.0; //treated like speed in direct mode, like force otherwise
            // Particlee Steering
            _this.seekingBehaviours = false;
            _this.steeringBehaviours = false;
            _this.seekForce = 0.0;
            _this.steerForce = 0.0;
            _this.steerMaxForce = 0.0;
            _this.gravitatePower = 0.0;
            _this.gravitateMaxForce = 0.0;
            _this.attractForce = 0.0;
            _this.attractRange = 0.0;
            _this.arriveForce = 0.0;
            _this.arriveRange = 0.0;
            _this.arriveMaxForce = 0.0;
            _this.globalEffects = false;
            _this.globalForceVector = new glm.vec2();
            _this.globalAccelerationVector = new glm.vec2(0.0, -10.0);
            // Particle default settings
            _this.limitSpeedOverLifetime = false;
            _this.initialSpeedLimitRange = new glm.vec2();
            _this.finalSpeedLimitRange = new glm.vec2();
            _this.sizeOverLifetime = false;
            _this.spinOverLifetime = false;
            _this.colourOverLifetime = false;
            _this.particleType = "circle";
            _this.position = new glm.vec2();
            _this.initialize(1);
            return _this;
        }
        // PRIVATE METHODs
        ParticleEmitter.prototype._emitFromRectangle = function (particle) {
            var pos = new glm.vec2();
            pos.x = glm.RandomRange(this.rectangleSize.x * -0.5, this.rectangleSize.x * 0.5);
            pos.y = glm.RandomRange(this.rectangleSize.y * -0.5, this.rectangleSize.y * 0.5);
            particle.x = pos.x;
            particle.y = pos.y;
            particle.velocity = new glm.vec2(0.0, -2.0); // up direction
        };
        ParticleEmitter.prototype._emitFromCircle = function (particle) {
            particle.x = 0;
            particle.y = 0;
            var randomAngle = glm.RandomRange(0.0, 360) * glm.Deg2Rad;
            var randomSpeed = glm.RandomRange(1.0, 2.0);
            var direction = new glm.vec2();
            direction.x = randomSpeed * Math.cos(randomAngle);
            direction.y = randomSpeed * Math.sin(randomAngle);
            particle.velocity = direction;
        };
        ParticleEmitter.prototype._emitFromArc = function (particle) {
            particle.x = 0;
            particle.y = 0;
            //this.arcTopRight = new glm.vec2(this.arcRadius * Math.cos(this.arcAngle * glm.Deg2Rad),
            //                                -this.arcRadius * Math.sin(this.arcAngle * glm.Deg2Rad));
            //this.arcTopLeft = new glm.vec2(-this.arcRadius * Math.cos(this.arcAngle * glm.Deg2Rad),
            //                                -this.arcRadius * Math.sin(this.arcAngle * glm.Deg2Rad));
            var halfArcAngle = this.arcAngle * 1.0;
            var randomAngle = glm.RandomRange(80, 110);
            var randomSpeed = glm.RandomRange(1.0, 2.0);
            var direction = glm.vec2.direction(glm.vec2.zero(), new glm.vec2());
            // let direction: glm.vec2 = new glm.vec2();
            // direction.x = randomSpeed * Math.cos(randomAngle);
            // direction.y = randomSpeed * Math.sin(randomAngle);
            //console.log(direction.x);
            if (direction.y > 0) {
                direction.y *= -1;
            }
            console.log("direction: " + direction.toString());
            console.log("angle: " + randomAngle);
            particle.velocity = direction;
        };
        ParticleEmitter.prototype.buildEmitter = function (numParticles) {
            if (numParticles > 0) {
                this._particles = new Array();
                this._numberOfParticles = numParticles;
            }
            for (var index = 0; index < this._numberOfParticles; index++) {
                this._particles.push(new objects.Particle(this.particleType));
            }
        };
        // PUBLIC METHODS
        ParticleEmitter.prototype.initialize = function (numParticles) {
            this.freeMemory(); // destroy any existing particles
            this.buildEmitter(numParticles);
            this._timeRemaining = this.duration;
            //transforms
            this.x = this.position.x;
            this.y = this.position.y;
            this.rotation = 0;
            //emitter properties
            this.rotationalVelocity = 0;
            this.emitterOffset = new glm.vec2();
            this.emissionRate = 50.0;
            // shape properties
            this.rectangleSize = new glm.vec2(10.0, 10.0);
            // playback properties
            this.playing = true;
            this.loop = true;
            this.loopDelay = 0.0;
            this.duration = -1;
            // path options
            this.followPath = false;
            this.directFollowMode = false;
            this.lookAhead = 0.1;
            this.pathRadius = 0.1;
            this.pathPower = 200.0;
            // seek options
            this.seekingBehaviours = false;
            this.seekPoint = new glm.vec2();
            this.seekForce = 0.0;
            // steer options
            this.steeringBehaviours = false;
            this.steerPoint = new glm.vec2();
            this.steerForce = 0.0;
            this.steerMaxForce = 1.0;
            // gravitate options
            this.gravitatePoint = new glm.vec2();
            this.gravitatePower = 0.0;
            this.gravitateMaxForce = 1.0;
            // attract options
            this.attractPoint = new glm.vec2();
            this.attractForce = 0.0;
            this.attractRange = 10.0;
            // arrive options
            this.arrivePoint = new glm.vec2();
            this.arriveForce = 0.0;
            this.arriveRange = 10.0;
            this.arriveMaxForce = 1.0;
            // gravity and global effects
            this.globalEffects = false;
            this.globalForceVector = new glm.vec2(0.0, -1.0);
            this.globalAccelerationVector = new glm.vec2(0.0, 10.0);
            // Speed Options
            this.limitSpeedOverLifetime = true;
            this.initialSpeedRange = new glm.vec2(20.0, 30.0);
            this.initialSpeedLimitRange = new glm.vec2(40.0, 50.0);
            this.finalSpeedLimitRange = new glm.vec2(40.0, 50.0);
            this.lifeRange = new glm.vec2(4.0, 7.0);
            // Size Options
            this.sizeOverLifetime = true;
            this.sizeRangeBegin = new glm.vec2(20.0, 30.0);
            this.sizeRangeEnd = new glm.vec2(0.5, 1.0);
            this.massRange = new glm.vec2(0.5, 1.0);
            // Rotation Options
            this.spinOverLifetime = true;
            this.spinBegin = -1.0;
            this.spinEnd = 1.0;
            // Colour Options
            this.colourOverLifetime = true;
            this.colourBegin0 = objects.Color.Red();
            this.colourBegin1 = objects.Color.DarkOrange();
            this.colourEnd0 = objects.Color.Black();
            this.colourEnd1 = objects.Color.DarkGrey();
        };
        ParticleEmitter.prototype.killParticles = function () {
            this._particles.forEach(function (particle) {
                particle.life = -1;
            });
        };
        ParticleEmitter.prototype.freeMemory = function () {
            if (this._particles) {
                this.removeAllChildren();
                delete this._particles;
                this._particles = null;
                this._numberOfParticles = 0;
            }
        };
        ParticleEmitter.prototype.Update = function () {
            var _this = this;
            var dt = 0.1667;
            this.rotation += this.rotationalVelocity;
            if (this._particles && this.playing) {
                this._emissionTime += dt;
                this._timeRemaining -= dt;
                if (this._timeRemaining < 0.0) {
                    if (this.duration > 0.0) {
                        this._emissionTime = 0.0; //will prevent particles from spawning
                        if (this.loop) {
                            if (this._timeRemaining < -this.loopDelay) {
                                this.killParticles();
                                this.removeAllChildren();
                                this._timeRemaining = this.duration;
                            }
                        }
                    }
                }
                var NumParticlesToEmit_1 = this._emissionTime * this.emissionRate;
                // loop through each particle
                this._particles.forEach(function (particle) {
                    if ((particle.life <= 0.0) && (NumParticlesToEmit_1 > 0)) {
                        _this.spawnParticle(particle);
                        NumParticlesToEmit_1--;
                        _this._emissionTime -= (1.0 / _this.emissionRate);
                        _this.UpdateParticle(particle, dt);
                    }
                    else {
                        if (particle) {
                            _this.UpdateParticle(particle, dt);
                        }
                    }
                });
            }
        };
        ParticleEmitter.prototype.UpdateParticle = function (particle, dt) {
            // Update physics
            if (this.seekingBehaviours) {
                particle.force = particle.force.add(particle.Seek(this.seekPoint, this.seekForce));
                particle.force = particle.force.add(particle.Gravitate(this.gravitatePoint, this.gravitatePower, this.gravitateMaxForce));
                particle.force = particle.force.add(particle.Attract(this.attractPoint, this.attractForce, this.attractRange));
            }
            if (this.steeringBehaviours) {
                particle.force = particle.force.add(particle.Steer(this.steerPoint, this.steerForce, this.steerMaxForce));
                particle.force = particle.force.add(particle.Arrive(this.arrivePoint, this.arriveForce, this.arriveRange, this.arriveMaxForce));
            }
            if (this.globalEffects) {
                particle.force = particle.force.add(this.globalForceVector);
                particle.acceleration = particle.acceleration.add(this.globalAccelerationVector);
            }
            if (this.followPath) {
                if (this.directFollowMode) {
                    //this.applyDirectPathFollow(dt, particle);
                }
                else {
                    //this.applyPathSteering(dt, particle);
                }
            }
            if (!particle.lifespan) {
                particle.lifespan = 1.0;
            }
            var normalizedLife = glm.clamp(1.0 - (particle.life / particle.lifespan), 0.0, 1.0);
            if (this.sizeOverLifetime) {
                var size = glm.lerp(particle.sizeBegin, particle.sizeEnd, normalizedLife);
                particle.size = size;
            }
            if (this.colourOverLifetime) {
                if (!particle.colourBegin) {
                    particle.colourBegin = this.colourBegin0;
                    particle.colourEnd = this.colourEnd0;
                }
                var color = glm.lerpColor(particle.colourBegin, particle.colourEnd, normalizedLife);
                particle.color = color;
            }
            if (this.limitSpeedOverLifetime) {
                var speed = glm.lerp(particle.speedLimitBegin, particle.speedLimitEnd, normalizedLife);
                particle.velocity = glm.limitMagnitude(particle.velocity, speed);
            }
            if (this.spinOverLifetime) {
                var rotation = glm.lerp(this.spinBegin, this.spinEnd, normalizedLife);
                particle.shape.rotation += rotation;
            }
            else {
                particle.shape.rotation += glm.RandomRange(this.spinBegin, this.spinEnd);
            }
            // move particle
            particle.x += particle.velocity.x * dt;
            particle.y += particle.velocity.y * dt;
            particle.life -= dt;
            if (this.emissionShape == config.Emitter.CIRCLE) {
                if (glm.vec2.distance(glm.vec2.zero(), new glm.vec2(particle.x, particle.y)) >= this.circleRadius) {
                    particle.life = 0.0;
                }
            }
            if (this.emissionShape == config.Emitter.ARC) {
                if (glm.vec2.distance(glm.vec2.zero(), new glm.vec2(particle.x, particle.y)) >= this.arcRadius) {
                    particle.life = 0.0;
                }
            }
            // Update position
            particle.Update();
        };
        ParticleEmitter.prototype.spawnParticle = function (particle) {
            particle.colourBegin = glm.lerpColor(this.colourBegin0, this.colourBegin1, Math.random());
            particle.colourEnd = glm.lerpColor(this.colourEnd0, this.colourEnd1, Math.random());
            particle.lifespan = glm.lerp(this.lifeRange.x, this.lifeRange.y, Math.random());
            particle.life = particle.lifespan;
            var randomTval_A = Math.random();
            //couple mass and size relationship
            particle.mass = glm.lerp(this.massRange.x, this.massRange.y, randomTval_A);
            particle.sizeBegin = glm.lerp(this.sizeRangeBegin.x, this.sizeRangeBegin.y, randomTval_A);
            particle.sizeEnd = glm.lerp(this.sizeRangeEnd.x, this.sizeRangeEnd.y, randomTval_A);
            //emission shapes determine initial velocity and position distribution
            switch (this.emissionShape) {
                case config.Emitter.RECTANGLE:
                    {
                        this._emitFromRectangle(particle);
                        break;
                    }
                case config.Emitter.CIRCLE:
                    {
                        this._emitFromCircle(particle);
                        break;
                    }
                case config.Emitter.ARC:
                    {
                        this._emitFromArc(particle);
                        break;
                    }
                default:
                    this._emitFromCircle(particle);
                    break;
            }
            //emit functions will set a position and a normalized velocity
            var startspeed = glm.RandomRange(this.initialSpeedRange.x, this.initialSpeedRange.y);
            particle.velocity.x *= startspeed;
            particle.velocity.y *= startspeed;
            // particle.transform.move(this.emitterOffset);
            particle.speedLimitBegin = glm.RandomRange(this.initialSpeedLimitRange.x, this.initialSpeedLimitRange.y);
            particle.speedLimitEnd = glm.RandomRange(this.finalSpeedLimitRange.x, this.finalSpeedLimitRange.y);
            particle.distanceTravelledAlongPath = 0.0;
            particle.size = particle.sizeBegin;
            particle.color = glm.lerpColor(particle.colourBegin, particle.colourEnd, 0.5);
            this.addChildAt(particle.shape, 0);
        };
        ParticleEmitter.prototype.getNumberOfParticles = function () {
            return this._numberOfParticles;
        };
        ParticleEmitter.prototype.getParticle = function (index) {
            if (index >= this._numberOfParticles) {
                console.log("ParticleEmitter::getParticlePosition ERROR: idx " + index + " out of range!");
                return null;
            }
            return this._particles[index];
        };
        ParticleEmitter.prototype.getParticlePosition = function (index) {
            if (index >= this._numberOfParticles) {
                console.log("ParticleEmitter::getParticlePosition ERROR: idx " + index + " out of range!");
                return null;
            }
            return this._particles[index].getPosition();
        };
        ParticleEmitter.prototype.setNumberOfParticles = function (numParticles) {
            this.freeMemory();
            this.buildEmitter(numParticles);
        };
        ParticleEmitter.prototype.setLifeRange = function (min, max) {
            this.lifeRange = new glm.vec2(min, max);
        };
        ParticleEmitter.prototype.setSizeRangeBegin = function (min, max) {
            this.sizeRangeBegin = new glm.vec2(min, max);
        };
        ParticleEmitter.prototype.setSizeRangeEnd = function (min, max) {
            this.sizeRangeEnd = new glm.vec2(min, max);
        };
        ParticleEmitter.prototype.setParticleType = function (type) {
            this.particleType = type;
            var numParticles = this._numberOfParticles;
            this.initialize(numParticles);
            this._numberOfParticles = numParticles;
        };
        ParticleEmitter.prototype.setCircleRadius = function (radius) {
            var numParticles = this._numberOfParticles;
            this.initialize(numParticles);
            this._numberOfParticles = numParticles;
            this.circleRadius = radius;
        };
        ParticleEmitter.prototype.setPosition = function (position) {
            this.position = position;
            this.x = position.x;
            this.y = position.y;
        };
        ParticleEmitter.prototype.setEmitterShape = function (type) {
            var numParticles = this._numberOfParticles;
            this.initialize(numParticles);
            this._numberOfParticles = numParticles;
            this.emissionShape = type;
        };
        ParticleEmitter.prototype.setRectangleWidth = function (width) {
            var numParticles = this._numberOfParticles;
            var height = this.rectangleSize.y;
            this.initialize(numParticles);
            this._numberOfParticles = numParticles;
            this.rectangleSize.x = width;
            this.rectangleSize.y = height;
        };
        ParticleEmitter.prototype.setRectangleHeight = function (height) {
            var numParticles = this._numberOfParticles;
            var width = this.rectangleSize.x;
            this.initialize(numParticles);
            this._numberOfParticles = numParticles;
            this.rectangleSize.x = width;
            this.rectangleSize.y = height;
        };
        return ParticleEmitter;
    }(createjs.Container));
    objects.ParticleEmitter = ParticleEmitter;
})(objects || (objects = {}));
//# sourceMappingURL=particleemitter.js.map