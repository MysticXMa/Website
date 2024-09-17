function HeartChange(id, heartFull, heartNormal) {
    const element = document.getElementById(id);
    const currentState = element.getAttribute('data-state');

    if (currentState === 'normal') {
        element.src = heartNormal;
        element.setAttribute('data-state', 'full');
    } else {
        element.src = heartFull;
        element.setAttribute('data-state', 'normal');
    }
}

// Hi :D