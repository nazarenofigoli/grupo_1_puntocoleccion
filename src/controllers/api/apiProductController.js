const db = require("../../database/models");
const { validationResult } = require("express-validator");
const productosController = {

    create: async (req, res) => {
    const errores = validationResult(req);
    try {
      if (errores.isEmpty()) {
        const product = await db.Product.create(req.body);
        console.log(product);
        return res.status(200).send(product);
      } else {
        console.log("else", errores);
        const erroresMapeado = errores.mapped();
        for (const key in erroresMapeado) {
          delete erroresMapeado[key].type;
          delete erroresMapeado[key].location;
          delete erroresMapeado[key].path;
        }
        const errorJson = JSON.stringify(erroresMapeado);
        //return res.status(400).send(erroresMapeado);
        throw new Error(errorJson);
      }
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  },
  all: async (req, res) => {
    try {
      const allProducts = await db.Product.findAll();
      const productCount = allProducts.length;
      res.status(200).json({ count: productCount, allProducts });;
    } catch (error) {
      return res.status(400).send(error.message)
    }
  }, 
  update: async (req, res) => {
    try {
      const errores = validationResult(req);
      const id = parseInt(req.params.id);
      if (!Number.isInteger(id)) {
        throw new Error(`El ID indicado debe ser un numero entero`);
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
      return res.status(400).send(error.message);
    }
  },
  destroy: async (req, res) => {
    try {
      const id = parseInt(req.params.id);

      if (!Number.isInteger(id)) {
        throw new Error(`El ID indicado debe ser un numero entero`);
      }

      const product = await db.Product.findByPk(id);

      if(!product){
        throw new Error(`No existe un producto con el ID ${id} indicado`);
      }

      await product.destroy();

      res.status(200).send(`El producto id ${id} fue eliminado`)
    } catch (error) {
      return res.status(400).send(error.message)
    }
  },
  getProduct: async (req, res) => {
      try {
        const id = parseInt(req.params.id);
  
        if (!Number.isInteger(id)) {
          throw new Error(`El ID indicado debe ser un numero entero`);
        }
  
        const product = await db.Product.findByPk(id);
  
        if(!product){
          throw new Error(`No existe un producto con el ID ${id} indicado`);
        }
  
        res.status(200).send(product)
      } catch (error) {
        return res.status(400).send(error.message)
      }
    }
};

module.exports = productosController;