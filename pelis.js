//importa el modulo fs, para manipular archivos
const fs = require("fs");

// Leer el archivo JSON, guarda en peliculas el JSON convertido a objeto javascript
const peliculas = JSON.parse(fs.readFileSync(__dirname + "/pelis.json"));

//funcion sin parametros

const todasLasPeliculas = () => {
  return peliculas;
};

//Funcion Sort
const ordenarPropiedad = (prop, tagBuscado) => {
  return peliculas.sort((a, b) => {
    const valA = typeof a[prop] === "string" ? a[prop].toLowerCase() : a[prop];
    const valB = typeof b[prop] === "string" ? b[prop].toLowerCase() : b[prop];

    if (valA < valB) return -1;
    if (valA > valB) return 1;
    return 0;
  });
};

//funcion busqueda por tag
const busquedaTag = (tagBuscado) => {
  return peliculas.filter((peli) =>
    peli.tags.includes(tagBuscado.toLowerCase())
  );
};

//funcion busqueda de titulo

const buscarPorTitulo = (textoBuscado) => {
  return peliculas.filter((peli) =>
    peli.title.toLowerCase().includes(textoBuscado.toLowerCase())
  );
};

module.exports = {
  todasLasPeliculas,
  ordenarPropiedad,
  buscarPorTitulo,
  busquedaTag,
};
