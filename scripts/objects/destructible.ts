module objects {
    export class Destructible extends Obstacle {
        public hp: number;
        constructor(imageName:string, hp:number, px:number, py:number) {
            super(imageName, px, py);
            this.hp = hp;          
            //this.x=px;
            //this.y=py;  
            this.lastValidPosition = new math.Vec2(px, py);
        }
        public reset():void {}

        public checkBounds(other:objects.GameObject=null):void {}

        public move() {}

        public attack() {}

        public collide(other:objects.GameObject) {
            if (other instanceof objects.Projectile) {
                this.hp -= 1;
            }
            if (this.hp <= 0) {
                this.destroy();
            }
        }

        public destroy() {
            super.destroy();
            createjs.Sound.play("breaking");   
            let breaking = new objects.explosion(this.x, this.y, "breaking");                      
            managers.Game.currentSceneObject.addChild(breaking);
        }
    }
}