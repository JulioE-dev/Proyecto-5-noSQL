const mongoose = require('mongoose');

const urlDb = 'mongodb://localhost:27017/proyecto-basico-express-movies';

const connect = async () => {
    try {

        await mongoose.connect(urlDb);
        console.log('✅ Connected with DB successfully ✅');
    } catch (error) {

        console.error('❌ Error connecting to DB: ❌', error.message);
    }
};

module.exports = { connect };