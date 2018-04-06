module ui {
    export class Tooltip  extends createjs.Container{       
        private _tooltipLabel: Label;
        private _nextButton: Button;
        private _closeButton: Button;
        private _needNextButton: boolean;
        private _bgImg: Image;
        private _messages: string[];
        private _currentIndex: number = 0;
        
        constructor(imageString:string, messages:string[], x:number=0, y:number=0) {
            super();
            this.x = x;
            this.y = y;
            this._messages = messages;
            this.start();
        }       
        public start():void {
            this._tooltipLabel = new Label(this._messages[0], "12px","Sporting Grotesque", "#000000");            
            this._tooltipLabel.lineWidth = 170;
            this._bgImg = new Image("tooltipBg");
            this._nextButton = new Button("next",100,75);
            this._closeButton = new Button("close",165,0);
            
            this.main();
        }

        public main():void {
            this.addChild(this._bgImg);
            this.addChild(this._nextButton);
            this.addChild(this._closeButton);
            this.addChild(this._tooltipLabel);
            this.displayPage(0);
            this._nextButton.addEventListener("click", () => {
                this.displayNextPage();
            });
            this._closeButton.addEventListener("click", () => {
                this.close();
            });
        }

        public update() {
            if (managers.Game.keyboardManager.nextTutorial)
            {               
                this.displayNextPage();
            }
            if (managers.Game.keyboardManager.closeTutorial)
            {               
                managers.Game.currentSceneObject.removeChild(this);
            }
        }

        public addPage(message:string) {
            this._messages.push(message);
        }

        private displayPage(index:number) {
            if (index >= this._messages.length) {
                return;
            }
            
            this._tooltipLabel.text = this._messages[index];
            if (index == this._messages.length - 1) {
                // Last page
                this._nextButton.visible = false;
            }
        }

        private displayNextPage() {
            this._currentIndex++;
            this.displayPage(this._currentIndex);
        }

        private close() {
            managers.Game.currentSceneObject.removeChild(this);
        }
    }
}