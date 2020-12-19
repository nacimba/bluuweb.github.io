"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultaPageRoutingModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const consulta_page_1 = require("./consulta.page");
const routes = [
    {
        path: '',
        component: consulta_page_1.ConsultaPage
    }
];
let ConsultaPageRoutingModule = class ConsultaPageRoutingModule {
};
ConsultaPageRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    })
], ConsultaPageRoutingModule);
exports.ConsultaPageRoutingModule = ConsultaPageRoutingModule;
//# sourceMappingURL=consulta-routing.module.js.map