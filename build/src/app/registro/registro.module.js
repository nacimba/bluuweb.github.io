"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroPageModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const angular_1 = require("@ionic/angular");
const registro_routing_module_1 = require("./registro-routing.module");
const registro_page_1 = require("./registro.page");
let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular_1.IonicModule,
            registro_routing_module_1.RegistroPageRoutingModule
        ],
        declarations: [registro_page_1.RegistroPage]
    })
], RegistroPageModule);
exports.RegistroPageModule = RegistroPageModule;
//# sourceMappingURL=registro.module.js.map