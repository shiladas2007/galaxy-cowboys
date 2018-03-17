module animate {
    export abstract class Animate extends objects.GameObject {
        public hp: number;

        get movementAmount():number {
            return managers.Game.BASE_MVSPD * this.mvspd;
        }

        constructor(imageName:string, hp:number, mvspd:number=1, px:number, py:number) {
            super(imageName, px, py);
            this.hp = hp;
            this.mvspd = mvspd;
            this.lastValidPosition = new math.Vec2(px, py);
        }

        public reset():void {}

        public checkBounds(other:objects.GameObject=null):void {}

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