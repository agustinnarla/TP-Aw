import objPeliculas from "./peliculas.js"



const contenedor = document.getElementById("catalogo")

contenedor.innerHTML = "hola pelis"

let contenidoHtml = ``;

objPeliculas.peliculas.forEach((imagen) => {
  contenidoHtml += `
      <div class="box0">
        <img src=""${imagen.img}"" alt="" class="box-0-1">
      </div>
      <div class="box1">
        <img src="${imagen.img}" alt="" class="box-1-1">
      </div>`

})

contenedor.innerHTML = contenidoHtml