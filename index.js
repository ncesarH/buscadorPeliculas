const {
  todasLasPeliculas,
  ordenarPropiedad,
  buscarPorTitulo,
  busquedaTag,
} = require("./pelis.js");

function main() {
  const solicitud = process.argv;

  if (solicitud[2] === undefined) {
    console.log(todasLasPeliculas());
  }

  if (solicitud[2] === "--sort") {
    console.log(ordenarPropiedad(solicitud[3]));
  }

  if (solicitud[2] === "--tag") {
    console.log(busquedaTag(solicitud[3]));
  }

  if (solicitud[2] === "--search") {
    console.log(buscarPorTitulo(solicitud[3]));
  }
}

main();
