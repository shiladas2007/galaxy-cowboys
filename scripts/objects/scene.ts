module objects {
    export abstract class Scene extends createjs.Container {
        public assetManager;

        constructor(assetManager: createjs.LoadQueue) {
            super();
            this.assetManager = assetManager;
        }
    
        public start():void { }

        public update():number { 
            return 0;
        }

        public main():void { }
    }
}