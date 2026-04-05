const express = require('express');
const { connect } = require('./src/utils/db');
const movieRouter = require('./src/routes/movie.routes'); 
const cinemaRouter = require('./src/routes/cinema.routes');

connect();

const PORT = 3000;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));


server.use('/movies', movieRouter); 
server.use('/cinemas', cinemaRouter);

server.listen(PORT, () => {
    console.log(`✅ Servidor funcionando en http://localhost:${PORT} ✅`);
});