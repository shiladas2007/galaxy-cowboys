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
        constructor(assetManager:createjs.LoadQueue,enemyImg:string, hp:number=1, mvspd:number=0,px:number,py:number) {
            super(assetManager, enemyImg, hp, mvspd);
            console.log("constructor of enemy");
            this.Hp=hp;
            this.Mvspd=mvspd;
            this.position.x=px;            
            this.position.y=py;
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
            this._dy = 5;
            this.Reset();
        }
    
        // updates the game object every frame
        public Update():void {
            this.Move();
            this.CheckBounds();
        }
        // reset the objects location to some value
        public Reset():void {
            this.position.x = Math.floor((Math.random() * (objects.Game.WIDTH - this.width)) + this.halfWidth);
            this.position.y = -this.height;
            //this._dx = Math.floor((Math.random() * 5) - 2);
            //this._dy = Math.floor((Math.random() * 6) + 5);
        }
    
        // move the object to some new location
        public Move():void {
            this.position.y += this._dy;            
        }
    
        // check to see if some boundary has been passed
        public CheckBounds():void {
            // check lower bounds
            if (this.position.y >= objects.Game.HEIGHT + this.height) {
                this.Reset();
            }         
        }
        public Attack():void {
            console.log("attack");
        }
    }
}