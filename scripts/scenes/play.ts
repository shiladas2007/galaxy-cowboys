module scenes {
    export abstract class PlayScene extends objects.Scene {
        protected _map: objects.Map;

        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        public Start():void {

        }

        public Update():number {
            this._map.Update();
            return 0;
        }

        public Main():void {
            
        }
    }
}