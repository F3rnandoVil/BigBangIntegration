/**
 * E-Shop Main JavaScript
 */
document.addEventListener('DOMContentLoaded', function() {
    
    /**
     * Product Data
     * Array of product objects with details needed for display
     */
    const products = [
        // BEBIDAS
        {
            "id": 1,
            "producto": "Cerveza Corona",
            "categoria": "bebidas",
            "cantidad": 500,
            "descripcion": "Cerveza clara tipo Pilsner, 4.5% alcohol, 355ml",
            "precio": 25,
            "imagen": "https://mundogourmet.com.mx/tienda/wp-content/uploads/2020/09/cerveza-corona-355ml.jpg"
        },
        {
            "id": 2,
            "producto": "Coca-Cola",
            "categoria": "bebidas",
            "cantidad": 750,
            "descripcion": "Refresco de cola, 2 litros retornable",
            "precio": 32,
            "imagen": "https://surtitienda.vteximg.com.br/arquivos/ids/165953-750-750/07501055302086.8.jpg?v=636862235015430000"
        },
        {
            "id": 3,
            "producto": "Agua Mineral",
            "categoria": "bebidas",
            "cantidad": 800,
            "descripcion": "Agua mineral con gas, 600ml",
            "precio": 18,
            "imagen": "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750107383002L.jpg"
        },
        {
            "id": 4,
            "producto": "Jugo de Naranja",
            "categoria": "bebidas",
            "cantidad": 300,
            "descripcion": "Jugo natural de naranja, 1 litro",
            "precio": 45,
            "imagen": "https://www.smartnfinal.com.mx/wp-content/uploads/2024/02/125416-JUGO-DE-NARANJA-ORIGINAL-SIMPLY-ORANGE-1.5-L.jpg"
        },
        // COMIDA
        {
            "id": 5,
            "producto": "Pizza Pepperoni",
            "categoria": "comida",
            "cantidad": 50,
            "descripcion": "Pizza mediana con pepperoni y queso extra",
            "precio": 150,
            "imagen": "https://www.simplyrecipes.com/thmb/pjYMLcsKHkr8D8tYixmaFNxppPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg"
        },
        {
            "id": 6,
            "producto": "Hamburguesa Clásica",
            "categoria": "comida",
            "cantidad": 75,
            "descripcion": "Carne de res, queso, lechuga, tomate y cebolla",
            "precio": 120,
            "imagen": "https://laopinion.com/wp-content/uploads/sites/3/2025/01/clasica-hamburguesa-burger-king-como-hacerla-en-casa_shutterstock_2476088505.jpg?resize=480,270&quality=80"
        },
        {
            "id": 7,
            "producto": "Tacos al Pastor",
            "categoria": "comida",
            "cantidad": 100,
            "descripcion": "Orden de 5 tacos con carne al pastor, cebolla y cilantro",
            "precio": 95,
            "imagen": "https://s3.amazonaws.com/static.realcaliforniamilk.com/media/recipes_2/tacos-al-pastor.jpg"
        },
        {
            "id": 8,
            "producto": "Ensalada César",
            "categoria": "comida",
            "cantidad": 60,
            "descripcion": "Lechuga, pollo, crutones, aderezo césar y queso parmesano",
            "precio": 85,
            "imagen": "https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-us-cuisinart-sfra-Library/default/dw92573286/images/recipe-Images/classic-caesar-salad-recipe.jpg?sw=1200&sh=1200&sm=fit"
        },
        // POSTRES
        {
            "id": 9,
            "producto": "Pastel de Chocolate",
            "categoria": "postres",
            "cantidad": 40,
            "descripcion": "Rebanada de pastel con ganache de chocolate amargo",
            "precio": 65,
            "imagen": "https://butternutbakeryblog.com/wp-content/uploads/2023/04/chocolate-cake.jpg"
        },
        {
            "id": 10,
            "producto": "Helado de Vainilla",
            "categoria": "postres",
            "cantidad": 90,
            "descripcion": "Copa de helado de vainilla con jarabe de chocolate",
            "precio": 50,
            "imagen": "https://www.cocinatis.com/archivos/202308/ctis1034-receta-helado-de-vainilla-1280x720x80xX.jpg"
        },
        {
            "id": 11,
            "producto": "Flan Napolitano",
            "categoria": "postres",
            "cantidad": 30,
            "descripcion": "Porción individual de flan casero con caramelo",
            "precio": 40,
            "imagen": "https://i.ytimg.com/vi/BSnyr2gUuvw/maxresdefault.jpg"
        },
        {
            "id": 12,
            "producto": "Churros con Chocolate",
            "categoria": "postres",
            "cantidad": 70,
            "descripcion": "4 churros recién hechos con salsa de chocolate",
            "precio": 55,
            "imagen": "https://7diasdesabor.com/wp-content/uploads/2022/05/churros-con-salsa-de-chocolate.jpg"
        }
    ];

    /**
     * Shopping Cart Manager
     * Handles cart counter and add-to-cart functionality
     */
    let cartCount = 0;
    const cartBadge = document.getElementById('cartBadge');

    function renderProducts(category = 'todos') {
        const productsGrid = document.querySelector('.products-grid');
        productsGrid.innerHTML = '';
        
        let filteredProducts = products;
        
        if (category !== 'todos') {
            filteredProducts = products.filter(product => product.categoria === category);
        }
        
        if (filteredProducts.length === 0) {
            productsGrid.innerHTML = '<div class="no-results">No se encontraron productos en esta categoría.</div>';
            return;
        }

        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.imagen}" alt="${product.producto}">
                    ${product.cantidad <= 50 ? '<div class="product-badge">ÚLTIMAS UNIDADES</div>' : ''}
                </div>
                <div class="product-info">
                    <div class="product-category">${product.cantidad} disponibles</div>
                    <h3 class="product-title">${product.producto}</h3>
                    <p class="product-description">${product.descripcion}</p>
                    <div class="product-footer">
                        <div class="product-price">$${product.precio.toFixed(2)}</div>
                        <div class="product-actions">
                            <button class="product-btn"><i class="far fa-heart"></i></button>
                            <button class="product-btn add-to-cart" data-id="${product.id}"><i class="fas fa-shopping-cart"></i></button>
                        </div>
                    </div>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });

        setupCartButtons();
    }

    function setupCartButtons() {
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                const product = products.find(p => p.id === parseInt(productId));
    
                if (product.cantidad > 0) {
                    // Reduce the quantity of the product
                    product.cantidad--;
    
                    // Update the cart count
                    cartCount++;
                    cartBadge.textContent = cartCount;
    
                    // Add product to cart in localStorage
                    addToCart(product);
    
                    // Re-render products to show updated stock
                    renderProducts();
    
                    // Optionally, you can show an alert or update the UI to notify the user
                    alert(`${product.producto} added to cart. ${product.cantidad} left.`);
                } else {
                    alert(`Sorry, no more stock of ${product.producto} available.`);
                }
            });
        });
    }
    
    function addToCart(product) {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingProduct = cartItems.find(item => item.id === product.id);
    
        if (existingProduct) {
            existingProduct.cantidad++;
        } else {
            cartItems.push({ ...product, cantidad: 1 });
        }
    
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('click', function() {
            categories.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const selectedCategory = this.textContent.toLowerCase();
            renderProducts(selectedCategory);
        });
    });

    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            renderProducts('todos');
            return;
        }

        const filteredProducts = products.filter(product => {
            const productName = product.producto.toLowerCase();
            const productDesc = product.descripcion.toLowerCase();
            const productCat = product.categoria.toLowerCase();
            return productName.includes(searchTerm) || productDesc.includes(searchTerm) || productCat.includes(searchTerm);
        });

        const productsGrid = document.querySelector('.products-grid');
        productsGrid.innerHTML = '';

        if (filteredProducts.length === 0) {
            productsGrid.innerHTML = '<div class="no-results">No se encontraron productos que coincidan con tu búsqueda.</div>';
            return;
        }

        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.imagen}" alt="${product.producto}">
                    ${product.cantidad <= 50 ? '<div class="product-badge">ÚLTIMAS UNIDADES</div>' : ''}
                </div>
                <div class="product-info">
                    <div class="product-category">${product.cantidad} disponibles</div>
                    <h3 class="product-title">${product.producto}</h3>
                    <p class="product-description">${product.descripcion}</p>
                    <div class="product-footer">
                        <div class="product-price">$${product.precio.toFixed(2)}</div>
                        <div class="product-actions">
                            <button class="product-btn"><i class="far fa-heart"></i></button>
                            <button class="product-btn add-to-cart"><i class="fas fa-shopping-cart"></i></button>
                        </div>
                    </div>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });

        setupCartButtons();
    }

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    renderProducts();
});