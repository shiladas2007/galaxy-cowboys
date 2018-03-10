module animate {
    export abstract class Animate extends objects.GameObject {
        private _mvspd: number; // multiplier; 1 = 100%

        public hp: number;
        
        get mvspd():number {
            return this._mvspd;
        }
        set mvspd(mvspd:number) {
            this._mvspd = mvspd;
        }

        get movementAmount():number {
            return managers.Game.BASE_MVSPD * this.mvspd;
        }

        constructor(assetManager:createjs.LoadQueue, imageName:string, hp:number, mvspd:number=1, px:number, py:number) {
            super(assetManager, imageName, px, py);
            this.hp = hp;
            this.mvspd = mvspd;
            this.lastValidPosition = new math.Vec2(px, py);
        }

        public reset():void {}

        public checkBounds(other:objects.GameObject=null):void {
            if (other) {
                
            }
        }

        public move() {}

        public attack() {}

        public collide(other:objects.GameObject) {
            if (other instanceof objects.GameObject) {
                console.log(this.lastValidPosition);
                this.x = this.lastValidPosition.x;
                this.y = this.lastValidPosition.y;
            } else {
                this.lastValidPosition.x = this.x;
                this.lastValidPosition.y = this.y;
            }
        }
    }
}