// Esperar a que el contenido esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('nombreInput');
    const boton = document.getElementById('saludarBtn');
    const contenedor = document.getElementById('saludo');

    boton.addEventListener('click', () => {
        const nombre = input.value.trim(); // Quita espacios en blanco

        if (nombre) {
            contenedor.textContent = `¡Hola, ${nombre}!`;
        } else {
            contenedor.textContent = 'Por favor, ingresa un nombre.';
        }
    });
});
