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
        { id: "enemyGuard", src: "./assets/images/enemyGuard.png" },
        { id: "enemyWatcher", src: "./assets/images/enemyWatcher.png" },
        { id: "enemyPatroller", src: "./assets/images/enemyPatroller.png" },
        { id: "cowboy1", src: "./assets/images/cowboy1.png" },
        { id: "controlsIntroduck", src: "./assets/images/controlsIntroduck.png" }
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
        objects.Game.stage = stage;
        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        keyboardManager = new managers.Keyboard();
        objects.Game.keyboardManager = keyboardManager;
        main();
    }
    function update() {
        if (currentState != objects.Game.currentScene) {
            main();
        }
        currentScene.update();
        stage.update();
    }
    function main() {
        stage.removeAllChildren();
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                currentScene = new scenes.StartScene(assetManager);
                break;
            case config.Scene.LEVEL1:
                currentScene = new scenes.Level1(assetManager);
                break;
            case config.Scene.GAMEOVER:
                currentScene = new scenes.GameOverScene(assetManager);
                break;
        }
        currentState = objects.Game.currentScene;
        stage.addChild(currentScene);
    }
    window.onload = init;
})();
//# sourceMappingURL=game.js.map