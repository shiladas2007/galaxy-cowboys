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
            return objects.Game.BASE_MVSPD * this.mvspd;
        }

        constructor(assetManager:createjs.LoadQueue, imageName:string, hp:number, mvspd:number=1, px:number, py:number) {
            super(assetManager, imageName, px, py);
            this.hp = hp;
            this.mvspd = mvspd;
        }

        public reset():void {}

        public checkBounds(other:objects.GameObject=null):void {
            if (other) {
                // Checking vertical boundaries

                // Checking horizontal boundaries
            }
        }

        public move() {}

        public attack() {}

        public collide(other:objects.GameObject) {
            if (other instanceof objects.Obstacle) {
                
            }
        }
    }
}