module animate {
    export abstract class Animate extends objects.GameObject {
        protected _mvspd: number; // 0.0 to 2.0 (0% to 200%)

        public Hp: number;

        constructor(assetManager:createjs.LoadQueue, imageUrl:string, hp:number, mvspd:number=1) {
            super(assetManager, imageUrl);
            this.Hp = hp;
            this._mvspd = mvspd;
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