module objects {
    export class Powerup extends createjs.Bitmap {
        public powerupType: config.Powerup;

        public static getRandomType():config.Powerup {
            let randomType: config.Powerup;
            // generate random type
            
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