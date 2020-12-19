"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaPageModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const angular_1 = require("@ionic/angular");
const venta_routing_module_1 = require("./venta-routing.module");
const venta_page_1 = require("./venta.page");
let VentaPageModule = class VentaPageModule {
};
VentaPageModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular_1.IonicModule,
            venta_routing_module_1.VentaPageRoutingModule
        ],
        declarations: [venta_page_1.VentaPage]
    })
], VentaPageModule);
exports.VentaPageModule = VentaPageModule;
//# sourceMappingURL=venta.module.js.map