"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroPageRoutingModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const registro_page_1 = require("./registro.page");
const routes = [
    {
        path: '',
        component: registro_page_1.RegistroPage
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    })
], RegistroPageRoutingModule);
exports.RegistroPageRoutingModule = RegistroPageRoutingModule;
//# sourceMappingURL=registro-routing.module.js.map