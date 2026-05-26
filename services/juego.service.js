const  { juegos } = require('../data/memoria');

const obtenerTodos = () => {
    return juegos;
};

const obtenerPorId = (id) => {
    return juegos.find(j => j.id === parseInt(id));
};

const crear = (datos) => {
    const nuevoJuego = {
        id: juegos.length > 0 ? juegos[juegos.length - 1].id + 1 : 1,
        titulo: datos.titulo,
        genero: datos.genero,
        precio: parseInt(datos.precio)
    };
    juegos.push(nuevoJuego);
    return nuevoJuego;
};

module.exports = {obtenerTodos, obtenerPorId, crear};