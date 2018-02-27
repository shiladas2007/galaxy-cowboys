module objects {
    export class Weapon {
        public fireRate: number;
        public projectile: Projectile;

        constructor(weaponType:config.Weapon) {
            let fireRate: number; // Seconds to wait before firing again
            let projectile: Projectile;

            switch (weaponType) {
                // Set fire rate and projectile based on weapon type:
                case config.Weapon.REVOLVER:
                    break;
                case config.Weapon.SHOTGUN:
                    break;
                case config.Weapon.BLASTER:
                    break; 
            }

            this.fireRate = fireRate;
            this.projectile = projectile;
        }
    }
}