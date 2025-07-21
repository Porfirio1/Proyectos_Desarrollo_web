
window.addEventListener('load', () => {

    // Seleccionamos los elementos del DOM
    let number = document.querySelector(".load__number");
    let btn = document.querySelector(".load__btn");
    let complete = document.querySelector(".load__completado");
    let fondo = document.querySelector(".main__fondo");

    //Variables contadoras
    let porcentaje = 1;
    let blur = 30;

    btn.addEventListener("click", (event) => {

        btn.style.display = "none"; // Ocultamos el botón al hacer clic

        let inter = setInterval(() => {
            porcentaje++;
            blur-= 30/100; // Reducimos el blur en cada iteración

            if(porcentaje > 100)
            {
                clearInterval(inter); // Detenemos el intervalo
                complete.style.display = "block"; // Mostramos el mensaje de carga completada
            }
            else
            {
                number.innerHTML = porcentaje + "%"; // Actualizamos el porcentaje
                fondo.style.filter = `blur(${blur}px)`; // Aplicamos el efecto de desenfoque
            }

        }, 20);
    });
;
});