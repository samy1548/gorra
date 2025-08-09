// Objeto con rutas y nombres por gorra y color
const imagenesPorModelo = {
    gorra1: {
        negra: { src: "imagen/10.jpeg", alt: 'Gorra Negra', nombre: 'Gorra Con Estampado de Oso' },
        GrisClaro: { src: "imagen/9.jpeg", alt: 'Gorra Gris Claro', nombre: 'Gorra Con Estampado de Oso' },
        Naranja: { src: "imagen/8.jpeg", alt: 'Gorra Naranja', nombre: 'Gorra Con Estampado de Oso' },
        Roja: { src: "imagen/7.jpeg", alt: 'Gorra Roja', nombre: 'Gorra Con Estampado de Oso' },
        Azul: { src: "imagen/6.jpeg", alt: 'Gorra Azul', nombre: 'Gorra Con Estampado de Oso' },
        Verde: { src: "imagen/5.jpeg", alt: 'Gorra Verde', nombre: 'Gorra Con Estampado de Oso' },
        Blanca: { src: "imagen/4.jpeg", alt: 'Gorra Blanca', nombre: 'Gorra Con Estampado de Oso' },
        AzulMarino: { src: "imagen/3.jpeg", alt: 'Gorra Azul Marino', nombre: 'Gorra Con Estampado de Oso' },
        Gris: { src: "imagen/2.jpeg", alt: 'Gorra Gris', nombre: 'Gorra Con Estampado de Oso' },
        Marron: { src: "imagen/1.jpeg", alt: 'Gorra Marron', nombre: 'Gorra Con Estampado de Oso' }

    },
    gorra2: {
        AzulConBlanco: { src: './imagen/1/6.jpeg', alt: 'Gorra Azul Con Blanco', nombre: 'Gorra Con Estampado de Oso' },
        Negra: { src: "./imagen/1/1.jpeg", alt: 'Gorra Negra', nombre: 'Gorra Con Estampado de Oso' },
        azul: { src: './imagen/1/2.jpeg', alt: 'Gorra Azul', nombre: 'Gorra Con Estampado de Oso' },
        Roja: { src: './imagen/1/3.jpeg', alt: 'Gorra Roja', nombre: 'Gorra Con Estampado de Oso' },
        AzulMenta: { src: './imagen/1/4.jpeg', alt: 'Gorra Azul Menta', nombre: 'Gorra Con Estampado de Oso' },
        Gris: { src: './imagen/1/5.jpeg', alt: 'Gorra Gris', nombre: 'Gorra Con Estampado de Oso' },
    },
    gorra3: {
        NegraConBlanco: { src: './imagen/2/2.jpeg', alt: 'Gorra Negra Con Blanco', nombre: 'Gorra Con Cara de Fantasma' },
        Negra: { src: './imagen/2/3.jpeg', alt: 'Gorra Negra', nombre: 'Gorra Con Cara de Fantasma' },
        BlancoConNegro: { src: './imagen/2/4.jpeg', alt: 'Gorra Blanco Con Negro', nombre: 'Gorra Con Cara de Fantasma' },
        Roja: { src: './imagen/2/1.jpeg', alt: 'Gorra Roja', nombre: 'Gorra Con Cara de Fantasma' },
    },
    gorra4: {
        Gris: { src: './imagen/3/1.jpeg', alt: 'Gorra Gris', nombre: 'Gorra de SD Bordada' },
        Marron: { src: './imagen/3/2.jpeg', alt: 'Gorra Marron', nombre: 'Gorra de SD Bordada' },
        NegroConMarron: { src: './imagen/3/3.jpeg', alt: 'Gorra  Negro', nombre: 'Gorra de SD Bordada' },
        Beige: { src: './imagen/3/4.jpeg', alt: 'Gorra Beige', nombre: 'Gorra de SD Bordada' },
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

        const mensaje = `Hola, quiero comprar la ${nombre} color ${color} por ${precio}.`;
        const url = `https://wa.me/18292308873?text=${encodeURIComponent(mensaje)}`;
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
