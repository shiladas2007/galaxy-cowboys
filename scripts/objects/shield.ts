module objects {
    export class Shield extends objects.GameObject {
        constructor(px:number, py:number) {
            super("shield", px, py);
        }

        public collide(other:objects.GameObject) {
            
        }
    }
}