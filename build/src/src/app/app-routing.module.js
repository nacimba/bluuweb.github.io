"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const routes = [
    {
        path: 'home',
        loadChildren: () => Promise.resolve().then(() => require('./home/home.module')).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'registro',
        loadChildren: () => Promise.resolve().then(() => require('./registro/registro.module')).then(m => m.RegistroPageModule)
    },
    {
        path: 'venta',
        loadChildren: () => Promise.resolve().then(() => require('./venta/venta.module')).then(m => m.VentaPageModule)
    },
    {
        path: 'consulta',
        loadChildren: () => Promise.resolve().then(() => require('./consulta/consulta.module')).then(m => m.ConsultaPageModule)
    },
    {
        path: 'codigoqr',
        loadChildren: () => Promise.resolve().then(() => require('./codigoqr/codigoqr.module')).then(m => m.CodigoqrPageModule)
    },
    {
        path: 'servidore',
        loadChildren: () => Promise.resolve().then(() => require('./servidore/servidore.module')).then(m => m.ServidorePageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })
        ],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map