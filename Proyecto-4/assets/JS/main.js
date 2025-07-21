

window.addEventListener('load', () => {

    let title = document.querySelector('.main__title'); 
    let text = "!Bienvenido al curso¡";

    let start = 0; // Inicio de la cadena de texto
    let end = 1; // Fin de la cadena de texto

    let write = () =>{
        setInterval(() => {
            title.innerText = text.slice(start, end); // Actualiza el texto del título
            end++; // Incrementa el fin de la cadena de texto

            if (end > text.length) // Si el fin supera la longitud del texto 
            {
                end = 2;
            }
        }, 300); // Intervalo de tiempo para actualizar el texto
    };
    write();
});
