const objetousuarios = {
    perfiles: [
        {
            perfil: 1,
            nombre: "Agus"
        },
        {
            perfil: 2,
            nombre: "Valen"
        },
        {
            perfil: 3,
            nombre: "Roberto"

        },
        {
            perfil: 4,
            nombre: "Maluma"
        },
        {
            perfil: 5,
            nombre: "Francis"
        }
    ]
}

const objPeliculas = {
    peliculas: [
        {
            nombre: "Harry potter ",
            descripcion: "Harry potter blablalbal",
            genero: "Fantasia, Magia"
        },

        {
            nombre: "Da vinci ",
            descripcion: "Mi amigo david blablalbal",
            genero: "Suspenso, Historia"
        },

        {
            nombre: "Harry potter ",
            descripcion: "Harry potter blablalbal",
            genero: "Fantasia, Magia"
        },

        {
            nombre: "Harry potter ",
            descripcion: "Harry potter blablalbal",
            genero: "Fantasia, Magia"
        },

        {
            nombre: "Harry potter ",
            descripcion: "Harry potter blablalbal",
            genero: "Fantasia, Magia"
        }

    ]

}
const app = document.getElementById("users-user-main")

let render = `<a>${objetousuarios.perfiles.nombre}</a>`

