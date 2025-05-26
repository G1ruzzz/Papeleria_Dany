// Product data
const products = [
    {
        id: 1,
        name: 'Lápices',
        description: 'Encuentra los mejores lápices: desde 2B y HB hasta 6H para dibujo y escritura.',
        price: 89.99,
        image: 'https://i.pinimg.com/736x/ed/9c/b4/ed9cb42464e7d9d31ae426cb20d9be22.jpg',
    },
    {
        id: 2,
        name: 'Plumas',
        description: 'Plumas de tinta gel con trazos suaves y duraderos para escritura impecable.',
        price: 129.99,
        image: 'https://i.pinimg.com/236x/37/ba/68/37ba6813f396eda35f81b816cae691bb.jpg',
    },
    {
        id: 3,
        name: 'Libretas',
        description: 'Libretas de pasta dura con hojas gruesas y resistentes, ideales para cualquier uso.',
        price: 149.99,
        image: 'https://i.pinimg.com/736x/25/8e/74/258e74ae56305c4d45fab001aadcbfdd.jpg',
    },
    {
        id: 4,
        name: 'Hojas de Color',
        description: 'Pack de hojas de colores vivos y resistentes, perfectas para proyectos artísticos.',
        price: 79.99,
        image: 'https://i.pinimg.com/236x/13/42/89/134289eeb93168f20d4d788e6e8be1b8.jpg',
    },
    {
        id: 5,
        name: 'Post-its',
        description: 'Notas adhesivas en varios colores y tamaños para organizar tus ideas fácilmente.',
        price: 49.99,
        image: 'https://i.pinimg.com/236x/9d/b0/44/9db044684915e901586ce5f02b482816.jpg',
    },
    {
        id: 6,
        name: 'Folders',
        description: 'Carpetas de alta resistencia con divisiones para clasificar documentos de manera eficiente.',
        price: 119.99,
        image: 'https://i.pinimg.com/236x/87/1b/e2/871be2b6b5e3c7de6299ffc77ab9e5e6.jpg',
    },
    {
        id: 7,
        name: 'Servicio de Impresión',
        description: 'Impresiones de calidad en blanco y negro o a color en diferentes formatos.',
        price: 0.99,
        image: 'https://i.pinimg.com/236x/e7/6b/1d/e76b1d590b0c76893a49cca057be2997.jpg',
    },
    {
        id: 8,
        name: 'Colores',
        description: 'Set de colores vibrantes y de alta pigmentación, ideales para artistas y diseñadores.',
        price: 199.99,
        image: 'https://i.pinimg.com/236x/a3/72/1c/a3721cc3c9a962ee2b637c93bcecd52e.jpg',
    },
    {
        id: 9,
        name: 'Plumones',
        description: 'Plumones resistentes con tinta de secado rápido y colores intensos.',
        price: 159.99,
        image: 'https://i.pinimg.com/236x/10/d2/35/10d2351c9f972b7edb956bfc2e572e08.jpg',
    },
    {
        id: 10,
        name: 'Cartulinas',
        description: 'Cartulinas gruesas y de distintos colores para trabajos escolares y presentaciones.',
        price: 39.99,
        image: 'https://i.pinimg.com/236x/e2/b7/df/e2b7df5d06fca8324994dc26f4776365.jpg',
    },
    {
        id: 11,
        name: 'Papeles',
        description: 'Papeles decorativos y especiales para manualidades y proyectos creativos.',
        price: 89.99,
        image: 'https://i.pinimg.com/236x/70/01/40/70014033537b06a9db772fabf336bd0c.jpg',
    },
    {
        id: 12,
        name: 'Marcadores',
        description: 'Set de marcadores precisos con punta fina y colores intensos.',
        price: 179.99,
        image: 'https://i.pinimg.com/474x/1e/02/13/1e0213aaea73a6da52a33001ec3734b7.jpg',
    },
    {
        id: 13,
        name: 'Dulces Variados',
        description: 'Surtido de dulces y golosinas populares para disfrutar en cualquier momento.',
        price: 25.99,
        image: 'https://i.pinimg.com/474x/46/47/eb/4647eb773067072e1bc9c37b49883aa8.jpg',
    }
];

// Function to create product cards with optimized performance
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <p class="product-price">$${product.price.toFixed(2)}</p>
        </div>
    `;

    // Add click event listener to show modal
    card.addEventListener('click', () => {
        showProductModal(product);
    });

    return card;
}

// Function to create and show product modal with improved scroll handling
function showProductModal(product) {
    const modal = document.createElement('div');
    modal.className = 'product-modal-overlay';
    
    modal.innerHTML = `
        <div class="product-modal">
            <button class="modal-close">&times;</button>
            <div class="modal-image-container">
                <img src="${product.image}" alt="${product.name}" class="modal-image">
            </div>
            <div class="modal-content">
                <h2 class="modal-title">${product.name}</h2>
                <p class="modal-description">${product.description}</p>
                <p class="modal-price">$${product.price.toFixed(2)}</p>
            </div>
        </div>
    `;

    // Store the current scroll position
    const scrollPos = window.scrollY;

    // Prevent body scrolling when modal is open
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPos}px`;
    document.body.style.width = '100%';

    // Close modal function with proper scroll restoration
    const closeModal = () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollPos);
        modal.remove();
    };

    // Close modal when clicking outside or on close button
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.className === 'modal-close') {
            closeModal();
        }
    });

    // Close modal with Escape key
    const handleEscKey = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEscKey);
        }
    };
    document.addEventListener('keydown', handleEscKey);

    document.body.appendChild(modal);
}

// Optimized render function using DocumentFragment
function renderProducts() {
    const productsContainer = document.getElementById('products-grid');
    const fragment = document.createDocumentFragment();
    
    products.forEach(product => {
        const card = createProductCard(product);
        fragment.appendChild(card);
    });

    productsContainer.appendChild(fragment);
}

// Initialize the page with optimized event handling
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    // Add hover effect to product grid
    const productsGrid = document.getElementById('products-grid');
    
    productsGrid.addEventListener('mouseover', (e) => {
        const card = e.target.closest('.product-card');
        if (card) {
            const cards = productsGrid.querySelectorAll('.product-card');
            cards.forEach(c => {
                if (c !== card) {
                    c.style.opacity = '0.7';
                    c.style.transform = 'scale(0.98)';
                }
            });
        }
    });

    productsGrid.addEventListener('mouseout', (e) => {
        const card = e.target.closest('.product-card');
        if (card) {
            const cards = productsGrid.querySelectorAll('.product-card');
            cards.forEach(c => {
                c.style.opacity = '';
                c.style.transform = '';
            });
        }
    });
});