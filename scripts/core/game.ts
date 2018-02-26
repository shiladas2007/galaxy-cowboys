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
        {id: "background", src:"./Assets/images/background.png"},
        {id: "mapLevel1", src:"./Assets/images/mapLevel1.png"},


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

        Main();
    }

    function Update():void {
        if (currentState != objects.Game.currentScene) {
            Main();
        }

        stage.update();
    }

    function Main():void {
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