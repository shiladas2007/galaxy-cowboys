module animate {
    export class Enemy extends Animate {
        //specify the character image, hp, and mvspd
        // private instance variables       
                
        //for setting eneme is dead 
        private enemyIsDead: boolean;
        
        // public properties
        // Constructor
        //here we can add heath point as 1 and speed as 0 for not moving in level1 and level2
        // but for for level3 and level4, we have to mention speed
        constructor(assetManager:createjs.LoadQueue, enemyType:config.Enemy, px:number,py:number) {
            let enemyImg: string = "enemyGuard";
            let hp: number = 1;
            let mvspd: number = 1;

            switch (enemyType) {
                case config.Enemy.GUARD:
                    enemyImg = "enemyGuard";
                    break;
                case config.Enemy.WATCHER:
                    enemyImg = "enemyWatcher";
                    break;
                case config.Enemy.PATROLLER:
                    enemyImg = "enemyPatroller";
                    break;
            }

            super(assetManager, enemyImg, hp, mvspd, px, py);
            console.log("constructor of enemy");
            this.Hp=hp;
            this.Mvspd=mvspd;
            this.Start();
        }
        
        // private methods
        // public methods
        public isDead():boolean {
            return this.enemyIsDead;
        }
       
        // Initializes variables and creates new objects
        public Start():void {
            console.log("start of enemy");
        }
    
        // updates the game object every frame
        public Update():void {
            this.Move();
            this.CheckBounds();
        }
        
        // reset the object's location to some value
        public Reset():void {
            this.x = Math.floor((Math.random() * (objects.Game.WIDTH - this.width)) + this.halfWidth);
            this.y = -this.height;
        }
    
        // move the object to some new location
        public Move():void {
                        
        }
    
        // check to see if some boundary has been passed
        public CheckBounds():void {
            // check lower bounds
            if (this.y >= objects.Game.HEIGHT + this.height) {
                this.Reset();
            }         
        }
        public Attack():void {
            console.log("attack");
        }
    }
}