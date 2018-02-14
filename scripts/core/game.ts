(function() {
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;

    function Init():void {
        Start();
    }

    function Start():void {
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }

    function Update():void {
        stage.update();
    }

    function Main():void {

    }

    window.addEventListener("onload", Init);
})