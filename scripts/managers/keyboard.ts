module managers {
    export class Keyboard {
        // Private instance variables

        // Public Properties
        public moveForward: boolean;
        public moveBackward: boolean;
        public moveLeft: boolean;
        public moveRight: boolean;
        public enabled: boolean;
        public paused: boolean;

        // Constructors
        constructor() {
            this.enabled = false;
            document.addEventListener("keydown", this.onKeyDown.bind(this), false);
            document.addEventListener("keyup", this.onKeyUp.bind(this), false);
        }

        // Private methods

        // Public methods
        public onKeyDown(event:KeyboardEvent):void {
            switch (event.key) {
                case config.Key.W:
                case config.Key.ARROW_UP:
                    this.moveForward = true;
                    break;
                case config.Key.S:
                case config.Key.ARROW_DOWN:
                    this.moveBackward = true;
                    break;
                case config.Key.A:
                case config.Key.ARROW_LEFT:
                    this.moveLeft = true;
                    break;
                case config.Key.D:
                case config.Key.ARROW_RIGHT:
                    this.moveRight = true;
                    break;
            }
        }

        public onKeyUp(event:KeyboardEvent):void {
            switch (event.key) {
                case config.Key.W:
                case config.Key.ARROW_UP:
                    this.moveForward = false;
                    break;
                case config.Key.S:
                case config.Key.ARROW_DOWN:
                    this.moveBackward = false;
                    break;
                case config.Key.A:
                case config.Key.ARROW_LEFT:
                    this.moveLeft = false;
                    break;
                case config.Key.D:
                case config.Key.ARROW_RIGHT:
                    this.moveRight = false;
                    break;
            }
        }
    }
}