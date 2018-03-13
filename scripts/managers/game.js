var managers;
(function (managers) {
    var Game = /** @class */ (function () {
        function Game() {
        }
        Game.isPlaying = false;
        Game.WIDTH = 640;
        Game.HEIGHT = 480;
        Game.FPS = 60;
        // Points that the player has to reach to start moving around the map
        Game.TOP_ANCHOR = 200; // move up
        Game.BOTTOM_ANCHOR = Game.HEIGHT - 20; // move down
        Game.LEFT_ANCHOR = 10; // move left
        Game.RIGHT_ANCHOR = Game.WIDTH - 10; // move right
        // Game boundaries
        Game.TOP_BOUNDARY = 0;
        Game.BOTTOM_BOUNDARY = Game.HEIGHT;
        Game.LEFT_BOUNDARY = 0;
        Game.RIGHT_BOUNDARY = Game.WIDTH;
        // Measured in pixels
        Game.BASE_MVSPD = 3;
        return Game;
    }());
    managers.Game = Game;
})(managers || (managers = {}));
//# sourceMappingURL=game.js.map