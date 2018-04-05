var config;
(function (config) {
    var Enemy;
    (function (Enemy) {
        Enemy[Enemy["GUARD"] = 0] = "GUARD";
        Enemy[Enemy["WATCHER"] = 1] = "WATCHER";
        Enemy[Enemy["PATROLLER"] = 2] = "PATROLLER";
    })(Enemy = config.Enemy || (config.Enemy = {}));
})(config || (config = {}));
//# sourceMappingURL=enemy.js.map