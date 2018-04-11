module objects {
    export class Weapon {
        public fireRate: number;

        constructor(public weaponType:config.Weapon) {
            let fireRate: number = 1; // Seconds to wait before firing again

            switch (weaponType) {
                // Set fire rate and projectile based on weapon type:
                case config.Weapon.REVOLVER:
                    fireRate = 0.5;
                    break;
                case config.Weapon.SHOTGUN:
                    fireRate = 1.2;
                    break;
                case config.Weapon.BLASTER:
                    fireRate = 0.7;
                    break; 
            }
            
            this.fireRate = fireRate;
        }
    }
}