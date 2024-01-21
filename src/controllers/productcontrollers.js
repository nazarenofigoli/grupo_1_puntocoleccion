const fs = require("fs");
const path = require("path");

const readProductsFromJson = () => {
    const json = fs.readFileSync(path.join(__dirname, "../database/product.json"), "utf-8");
    return JSON.parse(json);
};
const writeProductsToJson = (products) => {
    const json = JSON.stringify(products);
    fs.writeFileSync(path.join(__dirname, "../database/product.json"), json, "utf-8");
};

const productControllers = {
    detail: (req, res) => {
        const { id } = req.params;
        const products = readProductsFromJson();
        const product = products.find(product => product.id == id);
        res.render('products/detalleP', { title: product.name, product, usuario: req.session.user });
    },

    listadoproductos: (req, res) => {
        const products = readProductsFromJson();
        res.render('products/productos', { title: 'Todos los productos', products, usuario: req.session.user });
    },

    carrito: (req, res) => {
        res.render('products/carrito', { title: 'Carrito', usuario: req.session.user });
    },

    update: (req, res) => {
        const { id } = req.params;
        const products = readProductsFromJson();
        const product = products.find(product => product.id == parseInt(id));
        res.render('products/cargaDeProducto', { title: product.nombre, product });
    },

    editar: (req, res) => {
        const { id } = req.params;
        const { nombre, descripcion, precio, marca, categoria } = req.body;
        const products = readProductsFromJson();

        const nuevoArray = products.map(product => {
            if (product.id == parseInt(id)) {
                product.nombre = nombre.trim();
                product.descripcion = descripcion.trim();
                product.precio = precio;
                product.marca = marca.trim();
                product.categoria = categoria.trim();
                product.imagen = req.file ? req.file.filename : product.imagen;
            }
            return product;
        });

        writeProductsToJson(nuevoArray);

        res.redirect('/products/dashboard');
    },

    cargaDeProducto: (req, res) => {
        res.render('products/cargaDeProducto', { title: 'Carga de producto', product: null, usuario: req.session.user });
    },

    crearProducto: (req, res) => {
        const products = readProductsFromJson();

        const product = {
            id: products[products.length - 1].id + 1,
            nombre: req.body.nombre.trim(),
            descripcion: req.body.descripcion,
            precio: +req.body.precio,
            categoria: req.body.categoria.trim(),
            marca: req.body.marca.trim(),
            imagen: req.file ? req.file.filename : "naruto.jpg"
        };

        products.push(product);
        writeProductsToJson(products);

        res.redirect("/products/dashboard");
    },

    dashboard: (req, res) => {
        const products = readProductsFromJson();
        res.render('products/dashboard', { title: "Dashboard", products, usuario: req.session.user });
    },

    productDelete: (req, res) => {
        const { id } = req.params;
        const products = readProductsFromJson();

        const nuevoArray = products.filter((product) => product.id !== parseInt(id));

        writeProductsToJson(nuevoArray);

        res.redirect("/products/dashboard");
    }
};

module.exports = productControllers;
