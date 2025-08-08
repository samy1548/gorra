// Objeto con rutas y nombres por gorra y color
const imagenesPorModelo = {
    gorra1: {
        negra: { src: "imagen/10.jpeg", alt: 'Gorra Negra', nombre: 'Gorra Negra' },
        GrisClaro: { src: "imagen/9.jpeg", alt: 'Gorra Gris Claro', nombre: 'Gorra Gris Claro' },
        Naranja: { src: "imagen/8.jpeg", alt: 'Gorra Naranja', nombre: 'Gorra Naranja' },
        Roja: { src: "imagen/7.jpeg", alt: 'Gorra Roja', nombre: 'Gorra Roja' },
        Azul: { src: "imagen/6.jpeg", alt: 'Gorra Azul', nombre: 'Gorra Azul' },
        Verde: { src: "imagen/5.jpeg", alt: 'Gorra Verde', nombre: 'Gorra Verde' },
        Blanca: { src: "imagen/4.jpeg", alt: 'Gorra Blanca', nombre: 'Gorra Blanca' },
        AzulMarino: { src: "imagen/3.jpeg", alt: 'Gorra Azul Marino', nombre: 'Gorra Azul Marino' },
        Gris: { src: "imagen/2.jpeg", alt: 'Gorra Gris', nombre: 'Gorra Gris' },
        Marron: { src: "imagen/1.jpeg", alt: 'Gorra Marron', nombre: 'Gorra Marron' }

    },
    gorra2: {
        roja: { src: 'img/gorra2-roja.jpg', alt: 'Gorra Roja', nombre: 'Gorra Roja' },
        verde: { src: 'img/gorra2-verde.jpg', alt: 'Gorra Verde', nombre: 'Gorra Verde' },
        azul: { src: 'img/gorra2-azul.jpg', alt: 'Gorra Azul', nombre: 'Gorra Azul' }
    },
    gorra3: {
        roja: { src: 'img/gorra2-roja.jpg', alt: 'Gorra Roja', nombre: 'Gorra Roja' },
        verde: { src: 'img/gorra2-verde.jpg', alt: 'Gorra Verde', nombre: 'Gorra Verde' },
        azul: { src: 'img/gorra2-azul.jpg', alt: 'Gorra Azul', nombre: 'Gorra Azul' }
    }
};

// Cambiar color individualmente por tarjeta
document.querySelectorAll('.colorSelector').forEach(select => {
    select.addEventListener('change', function () {
        const card = this.closest('.card');
        const modelo = card.dataset.modelo;
        const color = this.value;

        const img = card.querySelector('.gorraImg');
        const nombre = card.querySelector('.gorraNombre');

        if (imagenesPorModelo[modelo] && imagenesPorModelo[modelo][color]) {
            const datos = imagenesPorModelo[modelo][color];
            img.src = datos.src;
            img.alt = datos.alt;
            nombre.textContent = datos.nombre;
        }
    });
});

// Función para comprar desde cada tarjeta
document.querySelectorAll('.comprarBtn').forEach(boton => {
    boton.addEventListener('click', function () {
        const card = this.closest('.card');
        const color = card.querySelector('.colorSelector').value;
        const nombre = card.querySelector('.gorraNombre').textContent;
        const precio = card.querySelector('p').textContent;

        const mensaje = `Hola, quiero comprar la ${nombre} por ${precio}.`;
        const url = `https://wa.me/18091234567?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    });
});

// Abrir modal con imagen grande
document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        const imgGrande = document.getElementById('imgGrande');

        imgGrande.src = img.src;
        imgGrande.alt = img.alt;

        modal.style.display = 'block';
    });
});

// Cerrar modal
document.querySelector('.cerrar').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

// También cerrar haciendo clic fuera de la imagen
document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
        e.currentTarget.style.display = 'none';
    }
});
