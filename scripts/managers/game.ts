module managers {
    export class Game {
        public static stage: createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static currentScene: number;
        public static currentSceneObject: objects.Scene;
        public static keyboardManager: managers.Keyboard;
        public static textureAtlas: createjs.SpriteSheet;
        public static isPlaying: boolean = false;
        public static scoreBoard: managers.ScoreBoard;
        
        public static readonly WIDTH = 640;
        public static readonly HEIGHT = 480;
        public static readonly FPS = 60;

        // Points that the player has to reach to start moving around the map
        public static readonly TOP_ANCHOR = 150; // move up
        public static readonly BOTTOM_ANCHOR = Game.HEIGHT - 20; // move down
        public static readonly LEFT_ANCHOR = 10; // move left
        public static readonly RIGHT_ANCHOR = Game.WIDTH - 10; // move right

        // Game boundaries
        public static readonly TOP_BOUNDARY = 0;
        public static readonly BOTTOM_BOUNDARY = Game.HEIGHT;
        public static readonly LEFT_BOUNDARY = 0;
        public static readonly RIGHT_BOUNDARY = Game.WIDTH;

        // Measured in pixels
        public static readonly BASE_MVSPD = 3;

        // Layer indices
        public static readonly INDEX_BACKGROUND = 0;
        public static readonly INDEX_GAMEOBJECTS = 1;
        public static readonly INDEX_UI = 2;
    }
}