var objects;
(function (objects) {
    var Weapon = /** @class */ (function () {
        function Weapon(weaponType) {
            var fireRate = 1; // Seconds to wait before firing again
            switch (weaponType) {
                // Set fire rate and projectile based on weapon type:
                case config.Weapon.REVOLVER:
                    break;
                case config.Weapon.SHOTGUN:
                    break;
                case config.Weapon.BLASTER:
                    fireRate = 0.7;
                    break;
            }
            this.fireRate = fireRate;
        }
        return Weapon;
    }());
    objects.Weapon = Weapon;
})(objects || (objects = {}));
//# sourceMappingURL=weapon.js.map