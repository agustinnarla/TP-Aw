import objPeliculas from "./peliculas.js";


const contenedor = document.getElementById("catalogo");

let contenidoHtml = ``;

objPeliculas.peliculas.forEach((pelicula, index) => {
  contenidoHtml += `
      <div class="box0" onclick="verTrailer(${index})">
        <img src="${pelicula.img}" alt="${pelicula.nombre}" class="box-0-1">
      </div>`;
});

contenedor.innerHTML = contenidoHtml;



