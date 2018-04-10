module animate {
    export class Enemy extends Animate {
        //specify the character image, hp, and mvspd
        // private instance variables       
                 
        private attackInterval;
        
        // public properties
        // Constructor
        //here we can add heath point as 1 and speed as 0 for not moving in level1 and level2
        // but for for level3 and level4, we have to mention speed
        constructor(enemyType:config.Enemy, px:number,py:number) {
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

            super(enemyImg, hp, mvspd, px, py);
            console.log("constructor of enemy");
            this.hp=hp;
            this.mvspd=mvspd;
            this._weapon = new objects.Weapon(config.Weapon.BLASTER);
            this.start();
        }
        
        // private methods
        // public methods
        // Initializes variables and creates new objects
        public start():void {
            //this.attackInterval = setInterval(() => {this.attack()}, this._weapon.fireRate * 1000);
        }
    
        // updates the game object every frame
        public update():void {
            this.move();
            this.checkBounds();
        }
        
        // reset the object's location to some value
        public reset():void {
            this.x = Math.floor((Math.random() * (managers.Game.WIDTH - this.width)) + this.halfWidth);
            this.y = -this.height;
        }
    
        // move the object to some new location
        public move():void {
                        
        }
    
        // check to see if some boundary has been passed
        public checkBounds():void {
            // check lower bounds
            if (this.y >= managers.Game.HEIGHT + this.height) {
                this.reset();
            }         
        }

        public destroy() {
            super.destroy();
            clearInterval(this.attackInterval);
            let explosion = new objects.explosion(this.x, this.y, "smallexplosion");                      
            managers.Game.currentSceneObject.addChild(explosion);
            createjs.Sound.play("monster_die"); 
            managers.Game.scoreBoard.Score += 200;  
        }

        public attack():void {
            let currentPos: math.Vec2 = new math.Vec2(this.x, this.y);
            let targetX: number;
            let targetY: number;

            // Shoot down
            targetX = this.x;
            targetY = this.y + 1;

            let targetPos = new math.Vec2(targetX, targetY);
            let newProjectile = new objects.Projectile("laser", currentPos, targetPos);
            managers.Game.currentSceneObject.addProjectile(newProjectile);
        }
    }
}