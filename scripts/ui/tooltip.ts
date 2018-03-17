module ui {
    export class Tooltip  extends createjs.Container{
       
        private _tooltipLabel:Label;
        private _nextButton:Button;
        private _closeButton:Button;
        private _needNextButton:boolean;
        private _bgImg:Image;
        private _msg:string;

    
        
        constructor(imageString:string, x:number=0, y:number=0,msg:string,needNextButton=true) {
            super();
            this.x = x;
            this.y = y;
           this._msg=msg;
           this._needNextButton=needNextButton;
            this.start();
        }       
        public start():void {
            this._tooltipLabel = new Label(this._msg, "14px","SportingGrotesque", "#000000");            
            this._tooltipLabel.lineWidth=170;
              this._bgImg=new Image("tooltipBg");
            this._nextButton=new Button("next",100,75);
            if(!this._needNextButton)
            this._nextButton.visible=false;
           
            this._closeButton=new Button("close",165,0);
            this.main();
        }

        public main():void {
            this.addChild(this._bgImg);
            this.addChild(this._nextButton);
            this.addChild(this._closeButton);
            this.addChild(this._tooltipLabel);
            this._nextButton.on("click", this._nextButtonClick);
            this._closeButton.on("click", this._closeButtonClick);
        }
        

        private _nextButtonClick():void {
            //managers.Game.currentScene = config.Scene.LEVEL1;
          
           console.log("t");
           
          
        }
        private _closeButtonClick():void {
            //managers.Game.currentScene = config.Scene.LEVEL1;
           
            console.log("close in");
            //managers.Game.currentSceneObject.removeChild(this);
        }   
        
    }
}