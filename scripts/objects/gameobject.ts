module objects {
    export abstract class GameObject extends createjs.Bitmap {
        protected _dy: number;
        protected _dx: number;

        public width: number;
        public height: number;
        public halfWidth: number;
        public halfHeight: number;
        public isColliding: boolean;

        constructor(assetManager:createjs.LoadQueue, imageName:string, px:number, py:number) {
            super(assetManager.getResult(imageName));
            this.name = imageName;
            this.x = px;
            this.y = py;
            
            this._initialize();
        }

        private _initialize():void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.isColliding = false;
        }

        public reset():void { }

        public checkBounds(other:objects.GameObject=null):void { }

        public move():void { }

        public start():void { }

        public update():void { }

        public collide(other:objects.GameObject):void { }
    }
}