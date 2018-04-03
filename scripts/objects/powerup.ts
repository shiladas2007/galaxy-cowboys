module objects {
    export class Powerup extends createjs.Bitmap {
        public powerupType: config.Powerup;

        public static getRandomType():config.Powerup {
            /* ======== Powerup chances ========
                        Super speed chance = 47.5%
                       Super armour chance = 47.5%
               Warship fire support chance = 5%
            */
            let randomType: config.Powerup;
            let random: number = Math.random();
            
            if (random < 0.475) {
                randomType = config.Powerup.SUPERSPEED;
            } else if (random < 0.95) {
                randomType = config.Powerup.SUPERARMOUR;
            } else {
                randomType = config.Powerup.WARSHIP;
            }

            return randomType;
        }

        constructor(powerupType: config.Powerup) {
            let imageString: string;
            switch (powerupType) {
                case config.Powerup.SUPERSPEED:
                    break;
                case config.Powerup.SUPERARMOUR:
                    break;
                case config.Powerup.WARSHIP:
                    break;
            }
            
            super(managers.Game.assetManager.getResult(imageString));
            this.powerupType = powerupType;
            this.start();
        }

        private _checkBounds():void {}

        public start():void {
            
        }

        public update():void {

        }
    }
}