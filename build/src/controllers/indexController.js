"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
//definimos una clase IndexController******
//(req: Request, res) =>{
//res.send('HELLO JHONY')
//}
class IndexController {
    // el => no se pone ya que es una clase
    index(req, res) {
        res.render('index', { title: 'welcome to books app' });
    }
}
exports.indexController = new IndexController();
// o export default  indexController;
//# sourceMappingURL=indexController.js.map