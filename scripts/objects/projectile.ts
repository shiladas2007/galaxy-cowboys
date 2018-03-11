module objects {
    export class Projectile extends objects.GameObject {
        private shooter: animate.Animate;

        constructor(imageName:string, px:number, py:number) {
            super(imageName, px, py);
        }
    }
}