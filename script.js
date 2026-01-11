let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 5;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container .box')];
    for(var i = currentItem; i< currentItem + 5; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 5;
    if(currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none'
    }

}



const carrito = document.getElementById('carrito');
const elementos1 = document.querySelector('.box-container');
const lista = document.querySelector('#lista-carrito tbody');
const  vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}

function comprarElemento(e) {
    e.preventDefault();

    const boton = e.target.closest('.agregar-carrito');
    if (!boton) return;

    const elemento = boton.closest('.box');
    leerDatosElemento(elemento, boton);
}


function leerDatosElemento(elemento, boton) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.price').textContent,
        id: boton.getAttribute('data-id')
    };

    insertarCarrito(infoElemento);
}


function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
    
    <td>
       <img src="${elemento.imagen}" width=100 />
    </td>

    <td>
        ${elemento.titulo}

    </td>
       
    <td>

       ${elemento.precio}
    </td>


    <td>

       <a href="#" class="borrar" data-id="${elemento.id}" >X</a>
    </td>
    `;

    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
        if(e.target.classList.contains('borrar')) {
            e.target.parentElement.parentElement.remove();
            elemento = e.target.parentElement.parentElement;
            elementoId = elemento.querySelector('a').getAttribute('data-id');
        }
}

function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Si quieres solo abrir uno a la vez:
        faqItems.forEach(i => { if(i !== item) i.classList.remove('active'); });

        // Alternar el actual
        item.classList.toggle('active');
    });
});

// ===== MENU MOVIL =====
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('activo');
});




