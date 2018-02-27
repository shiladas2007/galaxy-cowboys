(function() {
    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;
    let assetManager: createjs.LoadQueue;
    let assetManifest: any[];
    let currentScene: objects.Scene;
    let helloLabel: ui.Label;
    let clickMeButton: ui.Button;
    let currentState: number;
    let keyboardManager: managers.Keyboard;
    assetManifest = [
        {id: "startButton", src:"./assets/images/startButton.png"},
        {id: "startButton2", src:"./assets/images/startButton2.png"},
        {id: "background", src:"./assets/images/background.png"},
        {id: "gameover", src:"./assets/images/gameover.png"},
        {id: "mapLevel1", src:"./assets/images/mapLevel1.png"},
        {id: "enemy1", src:"./assets/images/enemy1.png"},
        {id: "enemy2", src:"./assets/images/enemy2.png"},
        {id:  "enemy3", src:"./assets/images/enemy3.png"},
        {id:  "cowboy1", src:"./assets/images/cowboy1.png"},
        {id:  "controlsIntroduck", src:"./assets/images/controlsIntroduck.png"}
    ];

    function Init():void {
        console.log("Initializing...");
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start():void {
        console.log("Starting application...");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        objects.Game.stage = stage;
        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        
        keyboardManager = new managers.Keyboard();
        objects.Game.keyboardManager = keyboardManager;
        Main();
    }
    function Update():void {
        if (currentState != objects.Game.currentScene) {
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main():void {
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
    window.onload = Init;
})();