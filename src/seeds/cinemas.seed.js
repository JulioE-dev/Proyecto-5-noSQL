const mongoose = require('mongoose');
const Cinema = require('../models/Cinema');

const cinemas = [
    {
    "name": "KINEPOLIS",
    "location": "Madrid",
    "movies": []
},

{
    "name": "Cine Callao",
    "location": "Madrid",
    "movies": []
},

{
    "name": "Cine Capitol",
    "location": "Madrid",
    "movies": []
},

{
    "name": "Cine Ideal",
    "location": "Madrid",
    "movies": []
},

{
    "name": "Cine Doré",
    "location": "Madrid",
    "movies": []
}
];
const cinemaDocuments = cinemas.map(cinema => new Cinema(cinema));
mongoose
    .connect('mongodb://localhost:27017/proyecto-basico-express-movies')
    .then(async () => {
    const allCinemas = await Cinema.find();
    if (allCinemas.length) {
        await Cinema.collection.drop(); 
    }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
		await Cinema.insertMany(cinemaDocuments);
    console.log('DatabaseCreated')
	})
    .catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect());