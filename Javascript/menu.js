const hamburguer = document.querySelector('.hamburguer'),
menu = document.querySelector('.menu-navegacion');


hamburguer.addEventListener('click', () =>{
   menu.classList.toggle('spread');
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer){
        menu.classList.toggle('spread');
    }
})
const formularioRegistro = document.getElementById('formulario-registro');

    formularioRegistro.

addEventListener('submit', function (e) {
        e.preventDefault();

        // Captura los datos del formulario en variables
        const rol = document.getElementById('rol').value;
        
       
const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const cedula = document.getElementById('numero de cedula').value;
        const email = document.getElementById('email').value;
        const facultad = document.getElementById('facultad').value;
        const semestre = document.getElementById('semestre').value;
        const discapacidad = document.getElementById('tipo de discapacidad').value;

        // Realiza validación de datos aquí (por ejemplo, verifica que los campos obligatorios estén completos)

        

// Crea un objeto para almacenar los datos
        const datosUsuario = {
            
           
Rol: rol,
            Nombres: nombre,
            Apellidos: apellido,
            "Número de Cédula": cedula,
            Correo: email,
            "Facultad/Carrera": facultad,
            Semestre: semestre,
            "Tipo de Discapacidad": discapacidad,
            Contraseña: contrasena
        };

        // Muestra los datos en la consola (para propósitos de visualización)
        console.log(datosUsuario);

        // Aquí puedes realizar otras acciones, como enviar los datos al servidor o mostrar mensajes de retroalimentación al usuario.
    });
