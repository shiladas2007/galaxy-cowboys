module ui {
    export class Selection extends createjs.Container {
        private _overlay: createjs.Shape;
        private _sprite: createjs.Sprite;
        private _description: string;
        private _lblTitle: ui.Label;
        private _lblDescription: ui.Label;
        public halfWidth: number;
        public halfHeight: number;
        
        constructor(x:number, y:number, public width:number, public height:number,
        public title:string, description:string="", sprite:createjs.Sprite=null) {
            super();
            this.x = x;
            this.y = y;
            this._description = description;
            this._sprite = sprite;
            this.start();
        }

        public start():void {
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;

            ui.centreHorizontal(this, this._sprite);
            ui.centreVertical(this, this._sprite);

            this._lblTitle = new ui.Label(this.title, "18pt", "Sporting Grotesque", "#fff");
            ui.centreHorizontal(this, this._lblTitle);
            this._lblTitle.y = this._sprite.y + this._sprite.getBounds().height * 0.5 + 10;

            this._lblDescription = new ui.Label(this._description, "11pt", "Sporting Grotesque", "rgb(240,240,240)");
            this._lblDescription.lineWidth = this.width * 0.8;
            ui.centreHorizontal(this, this._lblDescription);
            this._lblDescription.y = this._lblTitle.y + this._lblTitle.height + 10;

            this._overlay = new createjs.Shape(
                new createjs.Graphics().beginFill("rgba(0,0,0,0.5)")
                .drawRoundRect(0, 0, this.width, this.height, 2)
            );
            this.main();
        }

        public update():number {
            return managers.Game.currentScene;
        }

        public main():void {
            this.addChild(this._overlay);
            this.addChild(this._sprite);
            this.addChild(this._lblTitle);
            this.addChild(this._lblDescription);
            this.on("mousehover", this._onHover);
            this.on("mouseout", this._onOut);
        }

        private _onHover() {
            createjs.Tween.get(this).to({scaleX: 1.1, scaleY: 1.1}, 300, createjs.Ease.get(2));
        }

        private _onOut() {
            createjs.Tween.get(this).to({scaleX: 1, scaleY: 1}, 300, createjs.Ease.get(2));
        }
    }
}