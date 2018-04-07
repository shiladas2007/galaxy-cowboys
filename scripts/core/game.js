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
    textureAtlasData = {
        "images": [
            "./assets/sprites/texture.png"
        ],
        "frames": [
            [0, 0, 32, 32, 0, 0, 0],
            [32, 0, 32, 32, 0, 0, 0],
            [64, 0, 32, 32, 0, 0, 0],
            [96, 0, 32, 32, 0, 0, 0],
            [128, 0, 32, 32, 0, 0, 0],
            [160, 0, 32, 32, 0, 0, 0]
        ],
        "animations": {
            "smallexplosion": { "frames": [0, 1, 2, 3, 4, 5], "speed": 0.16 }
        }
    };
    assetManifest = [
        { id: "startButton", src: "./assets/images/startButton.png" },
        { id: "startButton2", src: "./assets/images/startButton2.png" },
        { id: "background", src: "./assets/images/background.png" },
        { id: "gameover", src: "./assets/images/gameover.png" },
        { id: "mapLevel1", src: "./assets/images/mapLevel1.png" },
        { id: "mapLevel2", src: "./assets/images/mapLevel2.png" },
        { id: "enemyGuard", src: "./assets/images/enemyGuard.png" },
        { id: "enemyWatcher", src: "./assets/images/enemyWatcher.png" },
        { id: "enemyPatroller", src: "./assets/images/enemyPatroller.png" },
        { id: "crate", src: "./assets/images/crate.png" },
        { id: "cowboy1", src: "./assets/images/cowboy1.png" },
        { id: "controlsIntroduck", src: "./assets/images/controlsIntroduck.png" },
        { id: "bullet", src: "./assets/images/bombSmall.png" },
        { id: "close", src: "./assets/images/close.png" },
        { id: "next", src: "./assets/images/next.png" },
        { id: "tooltipBg", src: "./assets/images/tooltipBg.png" },
        { id: "shot", src: "./assets/audio/Shoot.wav" },
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
        if (currentState != managers.Game.currentScene) {
            main();
        }
        currentScene.update();
        stage.update();
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