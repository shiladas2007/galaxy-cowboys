var config;
(function (config) {
    var Scene;
    (function (Scene) {
        Scene[Scene["START"] = 0] = "START";
        Scene[Scene["LEVEL1"] = 1] = "LEVEL1";
        Scene[Scene["LEVEL2"] = 2] = "LEVEL2";
        Scene[Scene["LEVEL3"] = 3] = "LEVEL3";
        Scene[Scene["BOSS"] = 4] = "BOSS";
        Scene[Scene["GAMEOVER"] = 5] = "GAMEOVER";
        Scene[Scene["END"] = 6] = "END";
    })(Scene = config.Scene || (config.Scene = {}));
})(config || (config = {}));
//# sourceMappingURL=scene.js.map