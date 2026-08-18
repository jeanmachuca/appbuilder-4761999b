document.addEventListener('DOMContentLoaded', function() {
    const priceBtn = document.getElementById('priceBtn');
    const funFactBtn = document.getElementById('funFactBtn');

    priceBtn.addEventListener('click', showPrice);
    funFactBtn.addEventListener('click', showFunFact);
});

function showPrice() {
    alert('El precio de esta deliciosa hamburguesa es $15.99');
}

function showFunFact() {
    const funFacts = [
        'La primera hamburguesa se sirvió en 1885 en el restaurante "Hamburger Hotel" en Estados Unidos.',
        'El término "hamburguesa" proviene de la ciudad de Hamburgo, Alemania.',
        'La hamburguesa es considerada el plato más popular en el mundo.',
        'En promedio, una persona come 3 hamburguesas al mes.',
        'La hamburguesa más grande del mundo pesa más de 1000 kg.'
    ];
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    alert(randomFact);
}