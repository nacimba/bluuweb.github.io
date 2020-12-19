"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroPage = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let RegistroPage = class RegistroPage {
    constructor(camera, webView) {
        this.camera = camera;
        this.webView = webView;
    }
    takePicture() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA // puedo elegir con que tomar la foto o sacarla de la galeria pero nosotros usaremos la camara
        };
        this.camera.getPicture(options)
            .then((imageData) => {
            this.image = this.webView.convertFileSrc(imageData); // esta es la imagen que guardaremos en algun lugar
        }, (err) => {
            console.log(err);
        });
    }
};
RegistroPage = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-registro',
        templateUrl: './registro.page.html',
        styleUrls: ['./registro.page.scss'],
    })
], RegistroPage);
exports.RegistroPage = RegistroPage;
//# sourceMappingURL=registro.page.js.map