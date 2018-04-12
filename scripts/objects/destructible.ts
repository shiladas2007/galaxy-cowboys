module objects {
    export class Destructible extends Obstacle {
        public hp: number;
        constructor(imageName:string, hp:number, px:number, py:number) {
            super(imageName, px, py);
            this.hp = hp;          
            //this.x=px;
            //this.y=py;  
            this.lastValidPosition = new glm.vec2(px, py);
        }
        public reset():void {}

        public checkBounds(other:objects.GameObject=null):void {}

        public move() {}

        public attack() {}

        public collide(other:objects.GameObject) {
            if (this.hp <= 0) {
                this.destroy();
            }
        }

        public destroy(silent:boolean=false) {
            super.destroy(silent);

            if (!silent)
                createjs.Sound.play("breaking");
            let breaking = new objects.explosion(this.x, this.y, "breaking");                      
            managers.Game.currentSceneObject.addChildAt(breaking, managers.Game.INDEX_GAMEOBJECTS);
        }
    }
}