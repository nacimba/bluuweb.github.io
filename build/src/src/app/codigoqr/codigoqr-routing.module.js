"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodigoqrPageRoutingModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const codigoqr_page_1 = require("./codigoqr.page");
const routes = [
    {
        path: '',
        component: codigoqr_page_1.CodigoqrPage
    }
];
let CodigoqrPageRoutingModule = class CodigoqrPageRoutingModule {
};
CodigoqrPageRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    })
], CodigoqrPageRoutingModule);
exports.CodigoqrPageRoutingModule = CodigoqrPageRoutingModule;
//# sourceMappingURL=codigoqr-routing.module.js.map