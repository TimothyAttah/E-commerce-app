const Product = require('../models/ProductModel');

const productControllers = {
	// CREATE
	createProduct: async (req, res) => {
    const newProduct = new Product( req.body );
    try {
      const savedProduct = await newProduct.save();
      res.status( 200 ).json( { message: 'New product added', savedProduct } );
    } catch (err) {
      return res.status(500).json({error: err.message})
    }
  },

  // UPDATE
  updateProduct: async ( req, res ) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);
			res
				.status(200)
				.json({ message: 'Product updated successfully.', updatedProduct });
    } catch (err) {
       return res.status(500).json({ error: err });
    }
  },

  // DELETE
  deleteProduct: async ( req, res ) => {
    try {
      await Product.findByIdAndDelete( req.params.id );
      res.status(200).json("Product has been deleted... ")
    } catch (err) {
       return res.status(500).json({ error: err });
    }
  },

  // GET PRODUCT
  getProduct: async ( req, res ) => {
    try {
      const product = await Product.findById( req.params.id );
      res.status(200).json( product);
    } catch (err) {
       return res.status(500).json({ error: err });
    }
  },

  // GET ALL PRODUCT
  getAllProducts: async ( req, res ) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let products;
      if ( qNew ) {
        products = await Product.find().sort( { createdAt: -1 } ).limit( 5 );
      } else if(qCategory){
        products = await Product.find( {
          categories: {
            $in: [ qCategory ]
          }
        } );
      }else {
        products = await Product.find().sort({createdAt: -1});
      }
      res.status(200).json({ message: ' All Products... ', products});
    } catch (err) {
       return res.status(500).json({ error: err });
    }
  },

};

module.exports = productControllers;
