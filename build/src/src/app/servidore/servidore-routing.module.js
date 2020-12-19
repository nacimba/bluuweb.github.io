"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServidorePageRoutingModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const servidore_page_1 = require("./servidore.page");
const routes = [
    {
        path: '',
        component: servidore_page_1.ServidorePage
    }
];
let ServidorePageRoutingModule = class ServidorePageRoutingModule {
};
ServidorePageRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    })
], ServidorePageRoutingModule);
exports.ServidorePageRoutingModule = ServidorePageRoutingModule;
//# sourceMappingURL=servidore-routing.module.js.map