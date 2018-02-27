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
                    this.moveForward = true;
                    break;
                case config.Key.S:
                    this.moveBackward = true;
                    break;
                case config.Key.A:
                    this.moveLeft = true;
                    break;
                case config.Key.D:
                    this.moveRight = true;
                    break;
            }
            console.log("Key down: " + event.key);
        }

        public onKeyUp(event:KeyboardEvent):void {
            switch (event.key) {
                case config.Key.W:
                    this.moveForward = false;
                    break;
                case config.Key.S:
                    this.moveBackward = false;
                    break;
                case config.Key.A:
                    this.moveLeft = false;
                    break;
                case config.Key.D:
                    this.moveRight = false;
                    break;
            }
        }
    }
}