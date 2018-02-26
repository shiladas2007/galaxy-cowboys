module animate {
    export class Enemy extends Animate {
        // private instance variables
        private enemyWidth: number;
        private enemyHeight: number;
        private speed: number;
        private enemyPosX: number;
        private enemyPosY: number;
        private enemyIsDead: boolean;
        private enemySize: number;
        private enemyHealth: number = 100;
        private explosionIterator: number = 1;
        private explosionDelay: number = 0;

        // public properties

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager, "Alien Guard",400,1);
            this.Start();
        }

        // private methods

        // public methods

        public getSpeed():number {
            return this.speed;
        }

        public isDead():boolean {
            return this.enemyIsDead;
        }

        public getPosX():number {
            return this.enemyPosX;
        }

        public getPosY():number {
            return this.enemyPosY;
        }

        public getWidth():number {
            return this.enemyWidth;
        }

        public getHeight() {
            return this.enemyHeight;
        }

        // Initializes variables and creates new objects
        public Start():void {
            this.Reset();
        }
    
        // updates the game object every frame
        public Update():void {
            this.Move();
            this.CheckBounds();
        }


        // reset the objects location to some value
        public Reset():void {
            this.position.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
            this.position.y = -this.height;
            this._dx = Math.floor((Math.random() * 5) - 2);
            this._dy = Math.floor((Math.random() * 6) + 5);
        }
    
        // move the object to some new location
        public Move():void {
            this.position.y += this._dy;
            this.position.x += this._dx;
        }
    
        // check to see if some boundary has been passed
        public CheckBounds():void {
            // check lower bounds
            if (this.position.y >= 480 + this.height) {
                this.Reset();
            }
        }
    }
}
