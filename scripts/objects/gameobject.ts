module objects {
    export abstract class GameObject extends createjs.Bitmap {
        protected _dy: number;
        protected _dx: number;
        private _mvspd: number; // multiplier; 1 = 100%

        public width: number;
        public height: number;
        public halfWidth: number;
        public halfHeight: number;
        public lastValidPosition: math.Vec2; // last known x,y coords where object didn't collide with an obstacle

        public isColliding: boolean;

        get leftX():number {
            return this.x - this.halfWidth;
        }
        get rightX():number {
            return this.x + this.halfWidth;
        }

        get topY():number {
            return this.y - this.halfHeight;
        }
        get bottomY():number {
            return this.y + this.halfHeight;
        }

        get mvspd():number {
            return this._mvspd;
        }
        set mvspd(mvspd:number) {
            this._mvspd = mvspd;
        }

        get movementAmount():number {
            return managers.Game.BASE_MVSPD * this.mvspd;
        }

        constructor(imageName:string, px:number, py:number) {
            super(managers.Game.assetManager.getResult(imageName));
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