//importation de l'application node-js
const express =  require('express'); //aplication express require pour importer package express
const mongoose = require('mongoose'); // importez mongoose dans votre fichier 
const  dotenv  =  require ( 'dotenv' ); // proteger les donnée

// appelle de la methode express (une function) permet de crée une application expresse
const app = express();

// -----------conection a la base de donnée mongoose -----------
mongoose.connect('mongodb+srv://jojo:3f0kukHOv1LGYea5@cluster0.wi3rn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
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


// exporter cette application pour y avoir acces depuis les autre fichier de notre projet notament le server node
module.exports = app;