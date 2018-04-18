module animate {
    export class PlayerDummy extends animate.Player {
        private _destinations: glm.vec2[] = [];

        constructor(character:config.Character, px:number, py:number) {
            super(character, px, py);
        }

        public update() {
            if (this._destinations)
                this.moveAuto();
            this.checkBounds();
        }

        public destroy() {
            this.isDestroyed = true;
            createjs.Sound.play("player_die");
        }

        public addPath(destination:glm.vec2) {
            if (!this._destinations)
                this._destination = destination;
            this._destinations.push(destination);
        } 

        public moveAuto() {
            let newPosition: glm.vec2 = this.getNextPosition();
            this.x = newPosition.x;
            this.y = newPosition.y;

            let run: number = glm.vec2.run(this._origin, this._destination);
            let rise: number = glm.vec2.rise(this._origin, this._destination);
            let hasReachedX: boolean = false;
            let hasReachedY: boolean = false;

            if ((run <= 0 && this.x <= this._destination.x) ||
            (run > 0 && this.x > this._destination.x)) {
                hasReachedX = true;
            }
            if ((rise <= 0 && this.y <= this._destination.y) ||
            (rise > 0 && this.y > this._destination.y)) {
                hasReachedY = true;
            }

            if (hasReachedX && hasReachedY) {
                this._destinations.splice(0, 1);
                if (this._destinations.length > 0)
                    this._destination = this._destinations[0];
            }
        }

        public stopAuto() {
            this._destinations = [];
        }

        public attackManual(targetX:number, targetY:number) {
            if (this._canFire) {
                let projectileType: string = "bullet";

                if (this.weapon.weaponType == config.Weapon.SHOTGUN) {
                    projectileType = "bullet2"
                }
                let newProjectile = new objects.Projectile(projectileType, this, targetX, targetY);
                this._canFire = false;
                setTimeout(() => {this._canFire = true}, this._weapon.fireRate * 1000);
            }
        }
    }
}