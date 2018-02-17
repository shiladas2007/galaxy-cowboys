module animate {
    export abstract class Animate {
        private _hp: number;
        private _mvspd: number;
        public posX: number;
        public posY: number;

        constructor(hp:number, mvspd:number=1) {
            this._hp = hp;
            this._mvspd = mvspd;
        }

        public move() {

        }

        public attack() {
            
        }
    }
}