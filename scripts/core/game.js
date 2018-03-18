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
        { id: "cowboy1", src: "./assets/images/cowboy1.png" },
        { id: "controlsIntroduck", src: "./assets/images/controlsIntroduck.png" },
        { id: "bullet", src: "./assets/images/bombSmall.png" },
        { id: "close", src: "./assets/images/close.png" },
        { id: "next", src: "./assets/images/next.png" },
        { id: "tooltipBg", src: "./assets/images/tooltipBg.png" },
        { id: "shot", src: "./Assets/audio/Shoot.wav" },
        { id: "dying", src: "./Assets/audio/dying.wav" }
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
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", update);
        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.START;
        managers.Game.assetManager = assetManager;
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
        stage.addChild(currentScene);
    }
    window.onload = init;
})();
//# sourceMappingURL=game.js.map