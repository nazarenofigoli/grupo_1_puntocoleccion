const db = require("../../database/models");
const { validationResult } = require("express-validator");

const productosController = {
    create: async (req, res) => {
        const errores = validationResult(req);
        try {
            if (errores.isEmpty()) {
                const product = await db.Product.create(req.body);
                return res.status(200).send(product);
            } else {
                const erroresMapeado = errores.mapped();
                for (const key in erroresMapeado) {
                    delete erroresMapeado[key].type;
                    delete erroresMapeado[key].location;
                    delete erroresMapeado[key].path;
                }
                const errorJson = JSON.stringify(erroresMapeado);
                throw new Error(errorJson);
            }
        } catch (error) {
            console.error("Error al crear el producto:", error);
            res.status(400).send(error.message);
        }
    },
    all: async (req, res) => {
        try {
            const countProducts = await db.Product.count();
            const allProducts = await db.Product.findAll({limit:7});
            
            res.status(200).json({ count: countProducts, allProducts });
        } catch (error) {
            console.error("Error al obtener todos los productos:", error);
            res.status(400).send(error.message);
        }
    },
    update: async (req, res) => {
        try {
            const errores = validationResult(req);
            const id = parseInt(req.params.id);
            if (!Number.isInteger(id)) {
                throw new Error(`El ID indicado debe ser un número entero`);
            }
            if (errores.isEmpty()) {
                const product = await db.Product.findByPk(id);
                if (!product)
                    throw new Error(`No existe un producto con el ID "${id}" indicado`);
                await product.update(req.body);
                return res.status(200).send(product);
            } else {
                const erroresMapeado = errores.mapped();
                for (const key in erroresMapeado) {
                    delete erroresMapeado[key].type;
                    delete erroresMapeado[key].location;
                    delete erroresMapeado[key].path;
                }
                const errorStringify = JSON.stringify(erroresMapeado);
                throw new Error(errorStringify);
            }
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
            res.status(400).send(error.message);
        }
    },
    destroy: async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            if (!Number.isInteger(id)) {
                throw new Error(`El ID indicado debe ser un número entero`);
            }
            const product = await db.Product.findByPk(id);
            if (!product) {
                throw new Error(`No existe un producto con el ID ${id} indicado`);
            }
            await product.destroy();
            res.status(200).send(`El producto con ID ${id} ha sido eliminado correctamente`);
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
            res.status(400).send(error.message);
        }
    },
    getProduct: async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            if (!Number.isInteger(id)) {
                throw new Error(`El ID indicado debe ser un número entero`);
            }
            const product = await db.Product.findByPk(id);
            if (!product) {
                throw new Error(`No existe un producto con el ID ${id} indicado`);
            }
            res.status(200).send(product);
        } catch (error) {
            console.error("Error al obtener el producto por ID:", error);
            res.status(400).send(error.message);
        }
    }, 
    allcategories : async (req, res) => {
    
                try {
                    const categorias = await db.Category.findAll();
                    const respuesta =  categorias.length;
                    res.status(200).json({count:respuesta, categorias})
                } catch (error) {
                    console.error("Error al obtener categorías:", error);
                    res.status(500).json({ error: "Error interno del servidor" });
                }
    },
    lastProduct : async (req, res) => {
        try {
          const ultimoProducto = await db.Product.findOne({
            include: [{ association: "Imageproducts" }],
            order: [["id", "DESC"]]})
            res.status(200).json(ultimoProducto) 
          } catch (error) {
                console.log('Error al obtener el ultimo producto', error)
                res.status(500).json({ error: "Error interno del servidor" });
          }

    
}
}


module.exports = productosController;
