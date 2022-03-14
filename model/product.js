// importez mongoose dans votre fichier 
const mongoose = require('mongoose');


//permet de créer un schéma de données pour votre base de données MongoDB
const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, required: true }
})

// model  transforme ce modèle en un modèle utilisable (nom du model,schema)
module.exports = mongoose.model('Sauce', productSchema);