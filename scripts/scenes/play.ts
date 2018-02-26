module scenes {
    export abstract class PlayScene extends objects.Scene {
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        public Start():void {

        }

        public Update():number {
            return 0;
        }

        public Main():void {
            
        }
    }
}