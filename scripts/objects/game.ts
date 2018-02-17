module objects {
    export class Game {
        public static stage: createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static currentScene: number;
        
        public static readonly WIDTH = 640;
        public static readonly HEIGHT = 480;
    }
}