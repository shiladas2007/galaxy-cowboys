(function () {
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    var currentScene;
    assetManifest = [];
    function Init() {
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = objects.Game.FPS;
        createjs.Ticker.on("tick", Update);
        objects.Game.currentScene = config.Scene.START;
        Main();
    }
    function Update() {
        if (currentScene.Update() != objects.Game.currentScene) {
            Main();
        }
        stage.update();
    }
    function Main() {
        stage.removeAllChildren();
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                break;
        }
    }
    window.addEventListener("onload", Init);
});
//# sourceMappingURL=game.js.map