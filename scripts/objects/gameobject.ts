module objects {
    export abstract class GameObject extends createjs.Bitmap {
        protected _dy: number;
        protected _dx: number;

        public width: number;
        public height: number;
        public halfWidth: number;
        public halfHeight: number;

        constructor(assetManager:createjs.LoadQueue, imageUrl:string) {
            super(assetManager.getResult(imageUrl));
            this._initialize();
        }

        private _initialize():void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        }

        public Reset():void { }

        public CheckBounds():void { }

        public Move():void { }

        public Start():void { }

        public Update():void { }
    }
}