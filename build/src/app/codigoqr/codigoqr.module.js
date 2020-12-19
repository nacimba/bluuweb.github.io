"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodigoqrPageModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const angular_1 = require("@ionic/angular");
const codigoqr_routing_module_1 = require("./codigoqr-routing.module");
const codigoqr_page_1 = require("./codigoqr.page");
let CodigoqrPageModule = class CodigoqrPageModule {
};
CodigoqrPageModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular_1.IonicModule,
            codigoqr_routing_module_1.CodigoqrPageRoutingModule
        ],
        declarations: [codigoqr_page_1.CodigoqrPage]
    })
], CodigoqrPageModule);
exports.CodigoqrPageModule = CodigoqrPageModule;
//# sourceMappingURL=codigoqr.module.js.map