"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultaPageModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const angular_1 = require("@ionic/angular");
const consulta_routing_module_1 = require("./consulta-routing.module");
const consulta_page_1 = require("./consulta.page");
let ConsultaPageModule = class ConsultaPageModule {
};
ConsultaPageModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular_1.IonicModule,
            consulta_routing_module_1.ConsultaPageRoutingModule
        ],
        declarations: [consulta_page_1.ConsultaPage]
    })
], ConsultaPageModule);
exports.ConsultaPageModule = ConsultaPageModule;
//# sourceMappingURL=consulta.module.js.map