//importer de model Product crée , pouvoir utiliser notre nouveau modèle Mongoose dans l'application, nous devons l'importer dans le fichier
const Product = require('../model/product');



//---------controller------------- (contenue des routes)

// POST
exports.createProduct = (req, res, next) => {
    delete req.body._id; // recuperer id de la req body
    const product = new Product({
    ...req.body //copie de l'objet existant avec spred recupere l'objet de la req body
    });
    product.save()
    .then(() => res.status(201).json({ product: Product }))//retourne une promise asynchrone qui attend ,201 la requête a réussi avec le message
    .catch(error => res.status(400).json({ error }));// capture l'erreur et renvoi un message erreur (egale error: error)
};
// PUT 
exports.modifyProduct = (req, res, next) => {
    Product.updateOne({ //objet de comparaison
    _id: req.params.id // compare ensuite que les deux id sont les meme
    },{ ...req.body  , _id: req.params.id //  req.body recuperer l'objet envoyer 2eme arg nouvelle objet (produit dans le cort de la req et le comparer a  l'id de la req)
    })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))// retourne la response 200 pour ok pour la methode http , renvoi objet modifier
    .catch(error => res.status(400).json({ error }));// capture l'erreur et renvoi un message erreur (egale error: error)
};
// DELETE
exports.deleteProduct = (req, res, next) => {
    Product.deleteOne({
    _id: req.params.id   //recupere lid des paramettre de route  
    })
    .then(() => res.status(200).json({message: 'Objet supprimer !'})) // retourne la response 200 pour ok pour la methode http , renvoi objet modifier
    .catch(error => res.status(400).json({ error })); // capture l'erreur et renvoi un message erreur (egale error: error)   
};
// GET
exports.getOneProduct = (req, res, next) => {//req.params.id acces a l'id des paramettre de route 
    Product.findOne({// un produit par sont identifiant , objet de comparaison
    _id: req.params.id }) // id en vente le meme que le paramettre de requete
    .then( product => res.status(200).json({ product })) // retourne la response 200 pour ok pour la methode http , renvoi l'objet (un objet)si il existe dans la Bd
    .catch(error => res.status(404).json({ error })) //objet non trouver et on renvoi l'erreur
};
//-----------
//GET
exports.getAllProduct = (req, res, next) => {
    Product.find() //liste des produits (sous forme de tableau)
    .then(products => res.status(200).json(products)) // retourne la response 200 pour ok pour la methode http , revoi le tableaux des products recu
    .catch(error => res.status(400).json({ error })); // capture l'erreur et renvoi un message erreur (egale error: error)
};
