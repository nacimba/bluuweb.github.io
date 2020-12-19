"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServidorePageModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const angular_1 = require("@ionic/angular");
const servidore_routing_module_1 = require("./servidore-routing.module");
const servidore_page_1 = require("./servidore.page");
let ServidorePageModule = class ServidorePageModule {
};
ServidorePageModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular_1.IonicModule,
            servidore_routing_module_1.ServidorePageRoutingModule
        ],
        declarations: [servidore_page_1.ServidorePage]
    })
], ServidorePageModule);
exports.ServidorePageModule = ServidorePageModule;
//# sourceMappingURL=servidore.module.js.map