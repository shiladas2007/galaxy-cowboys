(function () {
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    var currentScene;
    var helloLabel;
    var clickMeButton;
    var currentState;
    var keyboardManager;
    var textureAtlasData;
    var textureAtlas;
    var stats;
    textureAtlasData = {
        "images": [
            "./assets/sprites/textureData.png"
        ],
        "framerate": 20,
        "frames": [
            [1, 1, 23, 23, 0, -1, -1],
            [26, 1, 50, 50, 0, 0, 0],
            [78, 1, 50, 46, 0, 0, 0],
            [130, 1, 50, 49, 0, 0, 0],
            [182, 1, 50, 50, 0, 0, 0],
            [1, 53, 50, 47, 0, 0, 0],
            [53, 53, 50, 53, 0, 0, 0],
            [105, 53, 50, 53, 0, 0, 0],
            [157, 53, 34, 33, 0, -1, -1],
            [1, 108, 114, 97, 0, -3, -1],
            [117, 108, 48, 48, 0, -1, -2],
            [167, 108, 50, 50, 0, 0, 0],
            [1, 207, 55, 60, 0, 0, 0],
            [58, 207, 45, 60, 0, 0, 0],
            [105, 207, 59, 58, 0, 0, 0],
            [166, 207, 28, 40, 0, 0, 0],
            [1, 269, 100, 30, 0, 0, 0],
            [103, 269, 35, 35, 0, 0, 0],
            [140, 269, 85, 84, 0, -6, -7],
            [1, 355, 31, 29, 0, 0, -2],
            [34, 355, 31, 29, 0, 0, -2],
            [67, 355, 31, 29, 0, 0, -2],
            [100, 355, 31, 29, 0, 0, -2],
            [133, 355, 29, 29, 0, -1, -2],
            [164, 355, 31, 29, 0, 0, -2],
            [1, 386, 199, 60, 0, -1, 0],
            [1, 448, 199, 60, 0, -1, 0],
            [1, 510, 250, 133, 0, 0, 0]
        ],
        "animations": {
            "bullet": { "frames": [0] },
            "breaking": { "frames": [1, 2, 3, 4, 5, 6, 7] },
            "close": { "frames": [8] },
            "controlsIntroduck": { "frames": [9] },
            "cowboy1": { "frames": [10] },
            "crate": { "frames": [11] },
            "enemyGuard": { "frames": [12] },
            "enemyPatroller": { "frames": [13] },
            "enemyWatcher": { "frames": [14] },
            "laser": { "frames": [15] },
            "next": { "frames": [16] },
            "pauseSmall": { "frames": [17] },
            "restart": { "frames": [18] },
            "smallexplosion": { "frames": [19, 20, 21, 22, 23, 24] },
            "startButton": { "frames": [25] },
            "startButton2": { "frames": [26] },
            "tooltipBg": { "frames": [27] }
        }
    };
    assetManifest = [
        { id: "startButton", src: "./assets/images/startButton.png" },
        { id: "startButton2", src: "./assets/images/startButton2.png" },
        { id: "background", src: "./assets/images/background.png" },
        { id: "gameover", src: "./assets/images/gameover.png" },
        { id: "mapLevel1", src: "./assets/images/mapLevel1.png" },
        { id: "mapLevel2", src: "./assets/images/mapLevel2.png" },
        { id: "mapLevel3", src: "./assets/images/mapLevel3.png" },
        { id: "enemyGuard", src: "./assets/images/enemyGuard.png" },
        { id: "enemyWatcher", src: "./assets/images/enemyWatcher.png" },
        { id: "enemyPatroller", src: "./assets/images/enemyPatroller.png" },
        { id: "crate", src: "./assets/images/crate.png" },
        { id: "cowboy1", src: "./assets/images/cowboy1.png" },
        { id: "controlsIntroduck", src: "./assets/images/controlsIntroduck.png" },
        { id: "bullet", src: "./assets/images/bombSmall.png" },
        { id: "laser", src: "./assets/images/laser.png" },
        { id: "close", src: "./assets/images/close.png" },
        { id: "next", src: "./assets/images/next.png" },
        { id: "tooltipBg", src: "./assets/images/tooltipBg.png" },
        { id: "shot", src: "./assets/audio/shoot.mp3" },
        { id: "monster_die", src: "./assets/audio/monster_die.mp3" },
        { id: "player_die", src: "./assets/audio/player_die.mp3" },
        { id: "breaking", src: "./assets/audio/breaking.wav" },
        { id: "dying", src: "./assets/audio/dying.wav" }
    ];
    function init() {
        console.log("Initializing...");
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", start, this);
    }
    function start() {
        console.log("Starting application...");
        stats = new Stats();
        stats.showPanel(0);
        document.body.appendChild(stats.dom);
        //textureAtlasData.images = [ assetManager.getResult("textureAtlas") ];
        textureAtlas = new createjs.SpriteSheet(textureAtlasData);
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", update);
        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.START;
        managers.Game.assetManager = assetManager;
        managers.Game.textureAtlas = textureAtlas;
        keyboardManager = new managers.Keyboard();
        managers.Game.keyboardManager = keyboardManager;
        main();
    }
    function update() {
        stats.begin();
        if (currentState != managers.Game.currentScene) {
            main();
        }
        currentScene.update();
        stage.update();
        stats.end();
    }
    function main() {
        stage.removeAllChildren();
        managers.Game.isPlaying = false; // set to true when a PlayScene is initialized
        switch (managers.Game.currentScene) {
            case config.Scene.START:
                currentScene = new scenes.StartScene();
                break;
            case config.Scene.LEVEL1:
                currentScene = new scenes.Level1();
                break;
            case config.Scene.LEVEL2:
                currentScene = new scenes.Level2();
                break;
            case config.Scene.LEVEL3:
                currentScene = new scenes.Level3();
                break;
            case config.Scene.GAMEOVER:
                currentScene = new scenes.GameOverScene();
                break;
        }
        currentState = managers.Game.currentScene;
        managers.Game.currentSceneObject = currentScene;
        stage.addChild(currentScene);
    }
    window.onload = init;
})();
//# sourceMappingURL=game.js.map