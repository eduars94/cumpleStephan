document.addEventListener('DOMContentLoaded', () => {
    const locationButton = document.querySelector('.location-button');
    
    locationButton.addEventListener('click', () => {
        let location = prompt("Por favor, ingresa la ubicación:");
        
        if (location) {
            let details = document.querySelector('.details');
            details.innerHTML += `<br>Ubicación: ${location}`;
            alert('Ubicación agregada: ' + location);
        }
    });

    // Efecto de confeti al cargar la página
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Reiniciar audio al recargar la página
    const audio = document.getElementById('background-audio');
    audio.currentTime = 0;
    audio.play();
});
