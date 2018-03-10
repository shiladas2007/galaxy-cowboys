var managers;
(function (managers) {
    var Keyboard = /** @class */ (function () {
        // Constructors
        function Keyboard() {
            this.enabled = false;
            document.addEventListener("keydown", this.onKeyDown.bind(this), false);
            document.addEventListener("keyup", this.onKeyUp.bind(this), false);
        }
        // Private methods
        // Public methods
        Keyboard.prototype.onKeyDown = function (event) {
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
        };
        Keyboard.prototype.onKeyUp = function (event) {
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
        };
        return Keyboard;
    }());
    managers.Keyboard = Keyboard;
})(managers || (managers = {}));
//# sourceMappingURL=keyboard.js.map