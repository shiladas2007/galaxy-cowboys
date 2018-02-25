var objects;
(function (objects) {
    var Game = /** @class */ (function () {
        function Game() {
        }
        Game.WIDTH = 640;
        Game.HEIGHT = 480;
        Game.FPS = 60;
        // Points that the player has to reach to start moving around the map
        Game.TOP_BOUNDARY = 200; // move up
        Game.BOTTOM_BOUNDARY = Game.HEIGHT - 20; // move down
        Game.LEFT_BOUNDARY = 10; // move left
        Game.RIGHT_BOUNDARY = Game.WIDTH - 10; // move right
        return Game;
    }());
    objects.Game = Game;
})(objects || (objects = {}));
//# sourceMappingURL=game.js.map