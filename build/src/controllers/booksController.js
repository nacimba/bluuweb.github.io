"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksController = void 0;
const tslib_1 = require("tslib");
const Book_1 = require("../models/Book");
//definimos una clase IndexController******
//(req: Request, res) =>{
//res.send('HELLO JHONY')
//}
class BooksController {
    index(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const books = yield Book_1.default.find().lean();
            res.render('books/index', {
                title: 'Books',
                books
            });
        });
    }
    // vamos a crear los metodos
    renderFormBook(req, res) {
        res.render('books/add', {
            title: 'Add a book'
        });
    }
    // nuevo metodo para almacenar libros
    saveBook(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // sin bbdd
            //console.log(req.body);
            //res.send('received')
            //con bbdd
            const { title, author, isbn } = req.body;
            const book = new Book_1.default({ title, author, isbn });
            //usamos metodos del mongo con asyn away(para empezar a uzarlo)
            yield book.save();
            // envia una respuesta que se han recivido
            //res.send('received');
            res.redirect('/books');
        });
    }
}
exports.booksController = new BooksController();
//# sourceMappingURL=booksController.js.map