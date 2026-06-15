function registrarPrestamo() {
    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const titulo = document.getElementById("titulo").value;
    const fechaPrestamo = document.getElementById("fecha_prestamo").value;
    const fechaDevolucion =
    document.getElementById("fecha_devolucion").value;
    const data = {
    nombre: nombre,
    titulo: titulo,
    fecha_prestamo: fechaPrestamo,
    fecha_devolucion: fechaDevolucion
    };
    fetch('http://127.0.0.1:3000/api/registrar_prestamo', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
    // Mostrar un mensaje de éxito o error al usuario
    const mensajeDiv = document.getElementById("mensaje");
    if (result.success) {
    mensajeDiv.innerHTML = "Préstamo registrado exitosamente.";
    } else {
    mensajeDiv.innerHTML = "Error al registrar el préstamo.";
    }
    })
    .catch(error => {
    console.error('Error:', error);
    });
}