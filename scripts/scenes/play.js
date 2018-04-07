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
var scenes;
(function (scenes) {
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        function PlayScene(mapString) {
            var _this = _super.call(this) || this;
            _this._tooltips = [];
            _this._projectiles = [];
            _this._map = new objects.Map(mapString);
            managers.Game.isPlaying = true;
            _this.on("click", _this.onClick);
            return _this;
        }
        Object.defineProperty(PlayScene.prototype, "topBoundary", {
            get: function () {
                return this._topAnchor - managers.Game.TOP_ANCHOR;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayScene.prototype, "bottomBoundary", {
            get: function () {
                return this._bottomAnchor + managers.Game.BOTTOM_ANCHOR;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayScene.prototype, "leftBoundary", {
            get: function () {
                return this._leftAnchor - managers.Game.LEFT_ANCHOR;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayScene.prototype, "rightBoundary", {
            get: function () {
                return this._rightAnchor + managers.Game.RIGHT_ANCHOR;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayScene.prototype, "enemies", {
            get: function () {
                return this._enemies;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayScene.prototype, "player", {
            get: function () {
                return this._player;
            },
            enumerable: true,
            configurable: true
        });
        PlayScene.prototype.update = function () {
            if (managers.Game.keyboardManager.paused) {
                return managers.Game.currentScene;
            }
            // TODO: centralize collision check
            this._player.isColliding = false;
            this._player.update();
            this._checkBounds();
            this._tooltips.forEach(function (tooltip) {
                tooltip.update();
            });
            // Check for collisions
            this._updateEnemies();
            this._updateProjectiles();
            if (!this._player.isColliding) {
                this._player.lastValidPosition.x = this._player.x;
                this._player.lastValidPosition.y = this._player.y;
            }
            return managers.Game.currentScene;
        };
        PlayScene.prototype.start = function () {
            this._topAnchor = managers.Game.TOP_ANCHOR;
            this._bottomAnchor = managers.Game.BOTTOM_ANCHOR;
            this._leftAnchor = managers.Game.LEFT_ANCHOR;
            this._rightAnchor = managers.Game.RIGHT_ANCHOR;
        };
        PlayScene.prototype.main = function () {
            var _this = this;
            this.addChild(this._map);
            this._enemies.forEach(function (enemy) {
                _this.addChild(enemy);
            });
            this.addChild(this._player);
            this._tooltips.forEach(function (tooltip) {
                _this.addChild(tooltip);
            });
        };
        PlayScene.prototype._checkBounds = function () {
            var moveX = 0;
            var moveY = 0;
            if (this._player.y <= this._topAnchor) {
                if (managers.Game.keyboardManager.moveForward) {
                    if (!(this.y > this._map.height - managers.Game.HEIGHT)) {
                        moveY = 5;
                    }
                }
            }
            if (this._player.y >= this._bottomAnchor) {
                if (managers.Game.keyboardManager.moveBackward) {
                    if (!(this.y < 0)) {
                        moveY = -5;
                    }
                }
            }
            if (this.x < 0 || this.x > this._map.width - managers.Game.WIDTH) {
                // Left & right boundary
                moveX = 0;
            }
            this._move(moveX, moveY);
        };
        PlayScene.prototype._move = function (x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x += x;
            this._leftAnchor -= x;
            this._rightAnchor -= x;
            this.y += y;
            this._topAnchor -= y;
            this._bottomAnchor -= y;
        };
        PlayScene.prototype.onClick = function () {
            var playerPos = new math.Vec2(this._player.x, this._player.y);
            var targetPos = new math.Vec2(managers.Game.stage.mouseX, managers.Game.stage.mouseY);
            var newProjectile = new objects.Projectile("bullet", playerPos, targetPos);
            this._projectiles.push(newProjectile);
            this.addChild(newProjectile);
        };
        PlayScene.prototype._updateEnemies = function () {
            var _this = this;
            var keepers = [];
            this._enemies.forEach(function (enemy) {
                enemy.update();
                if (managers.Collision.check(_this._player, enemy)) {
                    _this._player.isColliding = true;
                }
                var pKeepers = [];
                _this._projectiles.forEach(function (projectile) {
                    if (managers.Collision.check(enemy, projectile)) {
                        _this.removeChild(projectile);
                    }
                    else {
                        pKeepers.push(projectile);
                    }
                });
                _this._projectiles = pKeepers;
                if (enemy.hp <= 0) {
                    _this.removeChild(enemy);
                }
                else {
                    keepers.push(enemy);
                }
            });
            this._enemies = keepers;
        };
        PlayScene.prototype._updateProjectiles = function () {
            var _this = this;
            if (this._projectiles.length) {
                var keepers_1 = [];
                this._projectiles.forEach(function (projectile) {
                    projectile.update();
                    // If off-screen, remove projectile
                    if (projectile.y >= managers.Game.BOTTOM_BOUNDARY + projectile.halfHeight ||
                        projectile.y <= managers.Game.TOP_BOUNDARY - projectile.halfHeight ||
                        projectile.x >= managers.Game.RIGHT_BOUNDARY + projectile.halfWidth ||
                        projectile.x <= managers.Game.LEFT_BOUNDARY - projectile.halfWidth) {
                        _this.removeChild(projectile);
                    }
                    else {
                        keepers_1.push(projectile);
                    }
                });
                this._projectiles = keepers_1;
            }
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map