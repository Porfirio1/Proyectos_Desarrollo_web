// Proyecto 2 
// Archivo con funciones JavaScript para el proyecto

window.addEventListener('DOMContentLoaded', () => { // Espera a que el DOM esté completamente cargado

    // Selecciona los elementos del DOM
    let input = document.querySelector('.main__input'); // Selecciona el input de búsqueda
    let text = document.querySelector('.main__text'); // Selecciona el párrafo de texto

    input.addEventListener('keydown', (e) => {

        let search = input.value;

        if(search.trim() != ""  && e.code == "Enter"){ // Verifica si el input no está vacío y si se presionó la tecla Enter
            let regExp = new RegExp(search, "gi"); // Crea una expresión regular para buscar la palabra ingresada, ignorando mayúsculas y minúsculas

            text.innerHTML = text.textContent.replace(regExp, "<span class='text__search'>$&</span>"); // Reemplaza las coincidencias con un span que resalta la palabra buscada

        }
    })

});