module ui {
    export class Tooltip  extends createjs.Container{       
        private _tooltipLabel: Label;
        private _nextButton: Button;
        private _closeButton: Button;
        private _needNextButton: boolean;
        private _bgImg: Image;
        private _messages: string[];
        private _currentIndex: number = 0;

        public width: number;
        public height: number;
        
        constructor(imageString:string, messages:string[], x:number=0, y:number=0) {
            super();
            this.x = x;
            this.y = y;
            this._messages = messages;
            this.start();
        }       
        public start():void {
            this._bgImg = new Image("tooltipBg");

            this.width = this._bgImg.width;
            this.height = this._bgImg.height;

            this._tooltipLabel = new Label(this._messages[0], "12px","Sporting Grotesque", "#fff");
            this._tooltipLabel.shadow = new createjs.Shadow("#000", 1, 1, 0);
            this._nextButton = new Button("next");
            this._closeButton = new Button("close");
            this._arrange();
            
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
            if (managers.Game.keyboardManager.nextTooltip)
            {               
                this.displayNextPage();
            }
            if (managers.Game.keyboardManager.closeTooltip)
            {               
                managers.Game.currentSceneObject.removeChild(this);
            }
        }

        public addPage(message:string) {
            this._messages.push(message);
        }

        private _arrange() {
            let marginX: number = 5;
            let marginY: number = 5;
            
            this._closeButton.x = this.width - this._closeButton.width - marginX;
            this._closeButton.y = marginY;

            this._nextButton.x = this.width - this._nextButton.width - marginX;
            this._nextButton.y = this.height - this._nextButton.height - marginY;

            this._tooltipLabel.x = marginX;
            this._tooltipLabel.y = marginY;
            this._tooltipLabel.lineWidth = this.width - this._closeButton.width - (marginX * 2);
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