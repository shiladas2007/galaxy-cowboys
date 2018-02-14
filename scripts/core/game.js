(function () {
    var canvas = document.getElementById("canvas");
    var stage;
    function Init() {
        Start();
    }
    function Start() {
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        stage.update();
    }
    function Main() {
    }
    window.addEventListener("onload", Init);
});
//# sourceMappingURL=game.js.map