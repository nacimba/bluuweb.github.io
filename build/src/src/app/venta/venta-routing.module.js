"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaPageRoutingModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const venta_page_1 = require("./venta.page");
const routes = [
    {
        path: '',
        component: venta_page_1.VentaPage
    }
];
let VentaPageRoutingModule = class VentaPageRoutingModule {
};
VentaPageRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    })
], VentaPageRoutingModule);
exports.VentaPageRoutingModule = VentaPageRoutingModule;
//# sourceMappingURL=venta-routing.module.js.map