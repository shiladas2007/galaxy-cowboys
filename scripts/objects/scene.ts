module objects {
    export abstract class Scene extends createjs.Container {
        public assetManager;

        constructor() {
            super();
            this.assetManager = managers.Game.assetManager;
        }
    
        public start():void { }

        public update():number { 
            return 0;
        }

        public main():void { }
    }
}