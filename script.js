function calcular() {
    const voltaje = parseFloat(document.getElementById("voltaje").value);
    const amperaje = parseFloat(document.getElementById("amperaje").value);
    const consumo = parseFloat(document.getElementById("consumo").value);
    const eficiencia = parseFloat(document.getElementById("perdida").value);

    const resultadoDiv = document.getElementById("resultado");

    if (!voltaje || !amperaje || !consumo) {
        resultadoDiv.innerHTML = "⚠️ Completa todos los campos";
        return;
    }

    // Calcular Wh
    const wh = voltaje * amperaje;

    // Aplicar pérdidas
    const whUtiles = wh * eficiencia;

    // Tiempo en horas
    const tiempoHoras = whUtiles / consumo;

    // Convertir a horas y minutos
    const horas = Math.floor(tiempoHoras);
    const minutos = Math.round((tiempoHoras - horas) * 60);

    resultadoDiv.innerHTML = `
        ⏱️ Autonomía estimada:<br>
        ${horas} h ${minutos} min
    `;
}