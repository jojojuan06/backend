//--- aplication require importer--------
const express = require('express');//importer package express

// Creation d'un routeur
const router = express.Router(); // avec la methode routeur d'expresse (ex remplace app.get par router.get 

//---------  Routes  ----------- CRUD methode
router.post('/', productControllers.createThing)
router.put('/:id', productControllers.modifyThing);
router.delete('/:id',  productControllers.deleteThing);
router.get('/:id', productControllers.getOneThing);
router.get('/',  productControllers.getAllThing);

//-------------

module.exports = router;  // re-exporte le router de se fichier la route