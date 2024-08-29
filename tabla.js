// Variable para almacenar la categoría actualmente resaltada
let currentHighlightClass = null;

// Función para resaltar o desmarcar los elementos de la categoría seleccionada
function highlightElements(category) {
    // Si la categoría actual es la misma que la seleccionada, desmarcar
    if (currentHighlightClass === category) {
        // Desmarcar los elementos
        var highlightedElements = document.querySelectorAll('.' + category);
        highlightedElements.forEach(function(el) {
            el.classList.remove('highlight');
        });
        // Resetear la categoría resaltada
        currentHighlightClass = null;
    } else {
        // Quitar resaltado de todos los elementos
        var elements = document.querySelectorAll('.element');
        elements.forEach(function(el) {
            el.classList.remove('highlight');
        });

        // Resaltar los elementos de la nueva categoría seleccionada
        var highlightedElements = document.querySelectorAll('.' + category);
        highlightedElements.forEach(function(el) {
            el.classList.add('highlight');
        });

        // Actualizar la categoría resaltada
        currentHighlightClass = category;
    }
}
// Función para mostrar u ocultar el menú desplegable
function toggleMenu() {
    var menu = document.getElementById('classification-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}


    const elementsData = {
        'H': { number: 1, weight: '1.008', config: '1s<sup>1</sup>' },
        'He': { number: 2, weight: '4.0026', config: '1s<sup>2</sup>' },
        'Li': { number: 3, weight: '6.94', config: '1s<sup>2</sup> 2s<sup>1</sup>' },
        'Be': { number: 4, weight: '9.0122', config: '1s<sup>2</sup> 2s<sup>2</sup>' },
        'B': { number: 5, weight: '10.81', config: '2s<sup>2</sup> 2p<sup>1</sup>' },
        // Añade aquí el resto de los elementos
    };

    function showModal(element) {
        const symbol = element.querySelector('.symbol').textContent;
        const data = elementsData[symbol];
        
        if (data) {
            document.getElementById('element-name').textContent = element.querySelector('.name').textContent;
            document.getElementById('atomic-number').textContent = data.number;
            document.getElementById('atomic-weight').textContent = data.weight;
            document.getElementById('symbol').textContent = symbol;
            document.getElementById('electron-config').innerHTML = data.config;
            document.getElementById('element-modal').style.display = 'block';
        }
    }

    function closeModal() {
        document.getElementById('element-modal').style.display = 'none';
    }

    document.querySelectorAll('td').forEach(td => {
        td.addEventListener('click', () => showModal(td));
    });
