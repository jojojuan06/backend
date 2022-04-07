//--- aplication require importer--------
const express = require('express');//importer package express
const productControllers = require('../controllers/product'); // importation du controller stuff

// Creation d'un routeur
const router = express.Router(); // avec la methode routeur d'expresse (ex remplace app.get par router.get 

//---------  Routes  ----------- CRUD methode
router.post('/', productControllers.createProduct)
router.put('/:id', productControllers.updateProduct);
router.delete('/:id',  productControllers.deleteProduct);
router.get('/:id', productControllers.getOneProduct);
router.get('/',  productControllers.getAllProduct);

//-------------

module.exports = router;  // re-exporte le router de se fichier la route