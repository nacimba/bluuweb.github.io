"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let HomePage = class HomePage {
    constructor(router) {
        this.router = router;
    }
    navigateToRegistro() {
        this.router.navigate(['/registro']);
    }
    navigateToVenta() {
        this.router.navigate(['/venta']);
    }
    navigateToConsulta() {
        this.router.navigate(['/consulta']);
    }
    navigateToRegistroqr() {
        this.router.navigate(['/codigoqr']);
    }
};
HomePage = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    })
], HomePage);
exports.HomePage = HomePage;
//# sourceMappingURL=home.page.js.map