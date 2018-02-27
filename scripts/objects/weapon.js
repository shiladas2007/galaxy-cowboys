var objects;
(function (objects) {
    var Weapon = /** @class */ (function () {
        function Weapon(weaponType) {
            var fireRate; // Seconds to wait before firing again
            var projectile;
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
        return Weapon;
    }());
    objects.Weapon = Weapon;
})(objects || (objects = {}));
//# sourceMappingURL=weapon.js.map