//importation de l'application node-js
const express =  require('express'); //aplication express require pour importer package express
const mongoose = require('mongoose'); // importez mongoose dans votre fichier 
//-------

// enregistrer notre nouveau routeur dans notre fichier app.js--------
const productRoutes = require('./routes/product');
//---------

// proteger les donnée------
require('dotenv').config(); 


// appelle de la methode express (une function) permet de crée une application expresse
const app = express();


// -----------conection a la base de donnée mongoose ----------- interpolation de variable .env
mongoose.connect(`${process.env.DB_LOGIN_ACCOUNT}`, // DB_LOGIN_ACCOUNT identifiant utilisateur login du .env

{     
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));
//---------------------

//--------Creation de Middleware--------


//----------

//acces au corp de la requete (body)
app.use(express.json());// intercepte toute les requetes qui on un content type json (format) et mais a disposition dans le  cors sur objet req  (body)

// enregistrer notre routeur pour toutes les demandes effectuées vers /api/product
app.use('/api/products', productRoutes);

// exporter cette application pour y avoir acces depuis les autre fichier de notre projet notament le server node
module.exports = app;


