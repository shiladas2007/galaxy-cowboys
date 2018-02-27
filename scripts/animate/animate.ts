module animate {
    export abstract class Animate extends objects.GameObject {
        private _mvspd: number; // multiplier; 1 = 100%

        public Hp: number;

        get Mvspd():number {
            return this._mvspd;
        }
        set Mvspd(mvspd:number) {
            this._mvspd = mvspd;
        }

        get MovementAmount():number {
            return objects.Game.BASE_MVSPD * this.Mvspd;
        }

        constructor(assetManager:createjs.LoadQueue, imageName:string, hp:number, mvspd:number=1, px:number, py:number) {
            super(assetManager, imageName);
            this.Hp = hp;
            this.Mvspd = mvspd;
            this.x = px;
            this.y = py;
        }

        public Reset():void {

        }

        public CheckBounds():void {

        }

        public Move() {
            
        }

        public Attack() {

        }
    }
}