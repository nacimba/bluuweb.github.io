"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePageModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const angular_1 = require("@ionic/angular");
const forms_1 = require("@angular/forms");
const home_page_1 = require("./home.page");
const home_routing_module_1 = require("./home-routing.module");
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular_1.IonicModule,
            home_routing_module_1.HomePageRoutingModule
        ],
        declarations: [home_page_1.HomePage]
    })
], HomePageModule);
exports.HomePageModule = HomePageModule;
//# sourceMappingURL=home.module.js.map