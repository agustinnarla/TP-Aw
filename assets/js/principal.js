import objPeliculas from "./peliculas.js"



const contenedor = document.getElementById("hola")

contenedor.innerHTML = "hola pelis"

let contenidoHtml = ``;

objPeliculas.peliculas.forEach((imagen)=>{
  imagen.img
  contenidoHtml += `<h1>${imagen.nombre}</h1>
  <img src="${image.img}" alt="">`
})

app.innerHTML = contenidoHtml