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
        { id: "background", src: "./assets/images/background.png" },
        { id: "mapLevel1", src: "./assets/images/mapLevel1.png" },
        { id: "enemy1", src: "./assets/images/enemy1.png" },
        { id: "enemy2", src: "./assets/images/enemy2.png" },
        { id: "enemy3", src: "./assets/images/enemy3.png" }
    ];
    function Init() {
        console.log("Initializing...");
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting application...");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        objects.Game.stage = stage;
        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        keyboardManager = new managers.Keyboard();
        Main();
    }
    function Update() {
        if (currentState != objects.Game.currentScene) {
            Main();
        }
        stage.update();
    }
    function Main() {
        stage.removeAllChildren();
        console.log("rip children");
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                console.log("Start scene");
                currentScene = new scenes.StartScene(assetManager);
                break;
            case config.Scene.LEVEL1:
                currentScene = new scenes.Level1(assetManager);
                break;
        }
        currentState = objects.Game.currentScene;
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map