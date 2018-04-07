module objects {
    export class Destructible extends Obstacle {
        public hp: number;
        constructor(imageName:string, hp:number, px:number, py:number) {
            super(imageName, px, py);
            this.hp = hp;            
            //this.lastValidPosition = new math.Vec2(px, py);
        }
        public reset():void {}

        public checkBounds(other:objects.GameObject=null):void {}

        public move() {}

        public attack() {}

        public collide(other:objects.GameObject) {
            if (other instanceof objects.GameObject) {
                console.log(this.lastValidPosition);
                //this.x = this.lastValidPosition.x;
                //this.y = this.lastValidPosition.y;
            } else {
                this.lastValidPosition.x = this.x;
                this.lastValidPosition.y = this.y;
            }
        }
    }
}