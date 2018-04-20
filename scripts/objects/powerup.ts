module objects {
    export class Powerup extends createjs.Bitmap {
        private activationTime: number;  // milliseconds
        private duration: number;  // seconds - if negative, then infinite
        private activationFunction: () => void;  // function to invoke when activating powerup
        private scene: objects.Scene;
        public powerupType: config.Powerup;

        public static getRandomType():config.Powerup {
            /* ======== Powerup chances ========
                        Super speed chance = 50%
                       Super armour chance = 50%
            */
            let randomType: config.Powerup;
            let random: number = Math.random();
            
            if (random < 0.5) {
                randomType = config.Powerup.SUPERSPEED;
            } else{
                randomType = config.Powerup.SUPERARMOUR;
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
            this.scene = managers.Game.currentSceneObject;
            this.start();
        }

        private activateSuperSpeed() {
            this.scene.player.mvspd *= 2;
        }

        private activateSuperArmour() {
            this.scene.player.hp += 1;
        }

        private activateWarship() {
            
        }

        public start():void {
            switch (this.powerupType) {
                case config.Powerup.SUPERSPEED:
                    this.activationFunction = this.activateSuperSpeed;
                    this.duration = 10;
                    break;
                case config.Powerup.SUPERARMOUR:
                    this.activationFunction = this.activateSuperArmour;
                    this.duration = -1;
                    break;
                case config.Powerup.WARSHIP:
                    this.activationFunction = this.activateWarship;
                    this.duration = -1;
                    break;
            }

            this.activate();
        }

        public update():void {

        }

        public activate() {
            // Activate powerup
            this.activationTime = new Date().getMilliseconds();
            this.activationFunction();
        }
    }
}