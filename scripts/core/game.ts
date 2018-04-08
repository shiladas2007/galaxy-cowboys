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
    let textureAtlasData: any;
    let textureAtlas: createjs.SpriteSheet;
    textureAtlasData = {
            "images": [
                "./assets/sprites/texture.png"
            ],
            
            "frames": [
                [0, 0, 30, 30, 0, 0, 0],
    [30, 0, 25, 25, 0, 0, 0],
    [55, 0, 50, 50, 0, 0, 0],
    [105, 0, 50, 50, 0, 0, 0],
    [155, 0, 50, 46, 0, 0, 0],
    [0, 50, 50, 49, 0, 0, 0],
    [50, 50, 50, 50, 0, 0, 0],
    [100, 50, 50, 47, 0, 0, 0],
    [150, 50, 50, 53, 0, 0, 0],
    [0, 103, 50, 53, 0, 0, 0],
    [50, 103, 35, 35, 0, 0, 0],
    [85, 103, 120, 105, 0, 0, 0],
    [0, 208, 50, 50, 0, 0, 0],
    [50, 208, 60, 60, 0, 0, 0],
    [110, 208, 60, 60, 0, 0, 0],
    [170, 208, 60, 60, 0, 0, 0],
    [0, 268, 100, 30, 0, 0, 0],
    [100, 268, 35, 35, 0, 0, 0],
    [135, 268, 99, 94, 0, 0, 0],
    [0, 362, 32, 32, 0, 0, 0],
    [32, 362, 32, 32, 0, 0, 0],
    [64, 362, 32, 32, 0, 0, 0],
    [96, 362, 32, 32, 0, 0, 0],
    [128, 362, 32, 32, 0, 0, 0],
    [160, 362, 32, 32, 0, 0, 0],
    [0, 394, 200, 60, 0, 0, 0],
    [0, 454, 200, 60, 0, 0, 0],
    [0, 514, 200, 109, 0, 0, 0],
    [0, 623, 50, 50, 0, 0, 0],
    [50, 623, 80, 80, 0, 0, 0],
    [130, 623, 50, 50, 0, 0, 0]
            ],
            
            "animations": {
                "breaking": { "frames": [2,3,4,5,6,7,8,9], "speed": 0.08 },
                "smallexplosion": { "frames": [19,20,21,22,23,24], "speed": 0.16 }
            }
        };
    
    assetManifest = [
        {id: "startButton", src:"./assets/images/startButton.png"},
        {id: "startButton2", src:"./assets/images/startButton2.png"},
        {id: "background", src:"./assets/images/background.png"},
        {id: "gameover", src:"./assets/images/gameover.png"},
        {id: "mapLevel1", src:"./assets/images/mapLevel1.png"},
        {id: "mapLevel2", src:"./assets/images/mapLevel2.png"},
        {id: "mapLevel3", src:"./assets/images/mapLevel3.png"},
        {id: "enemyGuard", src:"./assets/images/enemyGuard.png"},
        {id: "enemyWatcher", src:"./assets/images/enemyWatcher.png"},
        {id: "enemyPatroller", src:"./assets/images/enemyPatroller.png"},        
        {id: "crate", src:"./assets/images/crate.png"},
        {id: "cowboy1", src:"./assets/images/cowboy1.png"},
        {id: "controlsIntroduck", src:"./assets/images/controlsIntroduck.png"},
        {id: "bullet", src:"./assets/images/bombSmall.png"},
        {id: "laser", src:"./assets/images/laser.png"},
        {id: "close", src:"./assets/images/close.png"},
        {id: "next", src:"./assets/images/next.png"},
        {id: "tooltipBg", src:"./assets/images/tooltipBg.png"},
        {id: "shot", src:"./assets/audio/shoot.mp3"},
        {id: "monster_die", src:"./assets/audio/monster_die.mp3"},
        {id: "player_die", src:"./assets/audio/player_die.mp3"},
        {id: "breaking", src:"./assets/audio/breaking.wav"},
        {id: "dying", src:"./assets/audio/dying.wav"}
    ];

    function init():void {
        console.log("Initializing...");
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", start, this);
    }
    function start():void {
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
    function update():void {
        if (currentState != managers.Game.currentScene) {
            main();
        }
        currentScene.update();
        stage.update();
    }
    function main():void {
        stage.removeAllChildren();
        managers.Game.isPlaying = false;  // set to true when a PlayScene is initialized
        
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