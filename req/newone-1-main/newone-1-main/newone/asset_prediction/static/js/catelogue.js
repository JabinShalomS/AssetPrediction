let products = [
    { "partNumber": "PN001", "name": "Wireless Headphones", "category": "Audio", "subcategory": "Headphones", "price": 99.99, "country": "USA", "instock": 34 },
    { "partNumber": "PN002", "name": "Gaming Monitor", "category": "Displays", "subcategory": "Monitors", "price": 249.99, "country": "Germany", "instock": 82 },
    { "partNumber": "PN003", "name": "Mechanical Keyboard", "category": "Input", "subcategory": "Keyboards", "price": 59.99, "country": "China", "instock": 45 },
    { "partNumber": "PN004", "name": "Smartphone", "category": "Mobile", "subcategory": "Phones", "price": 799.99, "country": "Japan", "instock": 22 },
    { "partNumber": "PN005", "name": "Bluetooth Speaker", "category": "Audio", "subcategory": "Speakers", "price": 49.99, "country": "USA", "instock": 76 },
    { "partNumber": "PN006", "name": "Laptop X", "category": "Computers", "subcategory": "Laptops", "price": 1299.99, "country": "USA", "instock": 12 },
    { "partNumber": "PN007", "name": "4K TV", "category": "Home Entertainment", "subcategory": "Televisions", "price": 499.99, "country": "South Korea", "instock": 58 },
    { "partNumber": "PN008", "name": "Smartwatch Pro", "category": "Wearables", "subcategory": "Watches", "price": 199.99, "country": "USA", "instock": 27 },
    { "partNumber": "PN009", "name": "Gaming Laptop", "category": "Computers", "subcategory": "Laptops", "price": 1499.99, "country": "Germany", "instock": 19 },
    { "partNumber": "PN010", "name": "Action Camera", "category": "Cameras", "subcategory": "Action Cameras", "price": 299.99, "country": "China", "instock": 67 },
    { "partNumber": "PN011", "name": "Electric Scooter", "category": "Personal Transportation", "subcategory": "Scooters", "price": 399.99, "country": "USA", "instock": 39 },
    { "partNumber": "PN012", "name": "Drone X", "category": "Drones", "subcategory": "Quadcopters", "price": 499.99, "country": "Japan", "instock": 53 },
    { "partNumber": "PN013", "name": "Fitness Tracker", "category": "Wearables", "subcategory": "Watches", "price": 99.99, "country": "Germany", "instock": 31 },
    { "partNumber": "PN014", "name": "Smart Refrigerator", "category": "Home Appliances", "subcategory": "Refrigerators", "price": 1999.99, "country": "South Korea", "instock": 10 },
    { "partNumber": "PN015", "name": "Noise Cancelling Earbuds", "category": "Audio", "subcategory": "Earbuds", "price": 149.99, "country": "USA", "instock": 88 },
    { "partNumber": "PN016", "name": "Ultrawide Monitor", "category": "Displays", "subcategory": "Monitors", "price": 349.99, "country": "Japan", "instock": 41 },
    { "partNumber": "PN017", "name": "Gaming Mouse", "category": "Input", "subcategory": "Mice", "price": 39.99, "country": "China", "instock": 66 },
    { "partNumber": "PN018", "name": "Home Security Camera", "category": "Security", "subcategory": "Cameras", "price": 99.99, "country": "Germany", "instock": 75 },
    { "partNumber": "PN019", "name": "Smart Thermostat", "category": "Home Automation", "subcategory": "Thermostats", "price": 199.99, "country": "USA", "instock": 28 },
    { "partNumber": "PN020", "name": "VR Headset", "category": "Virtual Reality", "subcategory": "Headsets", "price": 399.99, "country": "USA", "instock": 49 },
    { "partNumber": "PN021", "name": "Portable Charger", "category": "Accessories", "subcategory": "Chargers", "price": 29.99, "country": "China", "instock": 90 },
    { "partNumber": "PN022", "name": "Robot Vacuum Cleaner", "category": "Home Appliances", "subcategory": "Vacuums", "price": 299.99, "country": "Japan", "instock": 24 },
    { "partNumber": "PN023", "name": "Soundbar", "category": "Home Entertainment", "subcategory": "Speakers", "price": 199.99, "country": "South Korea", "instock": 15 },
    { "partNumber": "PN024", "name": "Wireless Mouse", "category": "Input", "subcategory": "Mice", "price": 25.99, "country": "Germany", "instock": 73 },
    { "partNumber": "PN025", "name": "Smart Light Bulb", "category": "Home Automation", "subcategory": "Lights", "price": 19.99, "country": "USA", "instock": 44 },
    { "partNumber": "PN026", "name": "Digital Camera", "category": "Cameras", "subcategory": "Digital Cameras", "price": 599.99, "country": "Japan", "instock": 11 },
    { "partNumber": "PN027", "name": "Desktop PC", "category": "Computers", "subcategory": "Desktops", "price": 899.99, "country": "USA", "instock": 62 },
    { "partNumber": "PN028", "name": "Streaming Device", "category": "Home Entertainment", "subcategory": "Media Players", "price": 79.99, "country": "China", "instock": 84 },
    { "partNumber": "PN029", "name": "Electric Bike", "category": "Personal Transportation", "subcategory": "Bicycles", "price": 999.99, "country": "Germany", "instock": 33 },
    { "partNumber": "PN030", "name": "Gaming Chair", "category": "Furniture", "subcategory": "Chairs", "price": 149.99, "country": "USA", "instock": 47 }
]
;

        // Subcategory images mapping
        const subcategoryImages = {
            'Headphones': 'headphone.webp',
            'Monitors': 'monitor.jpg',
            'Keyboards': 'keyboard.jpg',
            'laptops': 'laptop.jpg',
        };

        // General image if no subcategory image is found
        const generalImage = 'hardware.jpg';

        let selectedFilters = {
            productTypes: [],
            countries: [],
            categories: [],
            subcategories: []
        };

        // Toggle dropdown visibility
        function toggleDropdown(dropdownId) {
            const dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach(dropdown => {
                if (dropdown.id !== dropdownId) {
                    dropdown.classList.remove('show');
                }
            });
            const dropdown = document.getElementById(dropdownId);
            dropdown.classList.toggle('show');
            populateDropdowns(); // Populate filters on dropdown click
        }

        // Close dropdown if clicked outside
        window.onclick = function(event) {
            const dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach(dropdown => {
                if (!event.target.matches('.filter-title') && !event.target.closest('.filter-group')) {
                    dropdown.classList.remove('show');
                }
            });

            // Close action menu if clicked outside
            const actionMenus = document.querySelectorAll('.dropdown-menu');
            actionMenus.forEach(menu => {
                if (!event.target.matches('.dots') && !event.target.closest('.dropdown-menu')) {
                    menu.style.display = 'none';
                }
            });
        }

        // Function to populate all dropdowns
        function populateDropdowns() {
            populateProductDropdown();
            populateCountryDropdown();
            populateCategoryDropdown();
            populateSubcategoryDropdown();
        }

        // Function to populate product dropdown
        function populateProductDropdown() {
            const productsDropdown = document.getElementById('productDropdown');
            const productTypes = [...new Set(products.map(product => product.subcategory))];
            productsDropdown.innerHTML = productTypes.map(productType => `
                <label><input type="checkbox" value="${productType}" onchange="toggleFilter('productTypes', '${productType}')"> ${productType}</label>
            `).join('');
        }

        // Function to populate country dropdown
        function populateCountryDropdown() {
            const countries = [...new Set(products.map(product => product.country))];
            const countryDropdown = document.getElementById('countryDropdown');
            countryDropdown.innerHTML = countries.map(country => `
                <label><input type="checkbox" value="${country}" onchange="toggleFilter('countries', '${country}')"> ${country}</label>
            `).join('');
        }

        // Function to populate category dropdown
        function populateCategoryDropdown() {
            const categories = [...new Set(products.map(product => product.category))];
            const categoryDropdown = document.getElementById('categoryDropdown');
            categoryDropdown.innerHTML = categories.map(category => `
                <label><input type="checkbox" value="${category}" onchange="toggleFilter('categories', '${category}')"> ${category}</label>
            `).join('');
        }

        // Function to populate subcategory dropdown
        function populateSubcategoryDropdown() {
            const subcategories = [...new Set(products.map(product => product.subcategory))];
            const subcategoryDropdown = document.getElementById('subcategoryDropdown');
            subcategoryDropdown.innerHTML = subcategories.map(subcategory => `
                <label><input type="checkbox" value="${subcategory}" onchange="toggleFilter('subcategories', '${subcategory}')"> ${subcategory}</label>
            `).join('');
        }

        // Function to toggle filter selections
        function toggleFilter(filterType, filterValue) {
            const index = selectedFilters[filterType].indexOf(filterValue);
            if (index === -1) {
                selectedFilters[filterType].push(filterValue);
            } else {
                selectedFilters[filterType].splice(index, 1);
            }
            applyFilter();
            renderSelectedFilters();
        }

        // Function to render selected filters as tags
        function renderSelectedFilters() {
            const selectedFiltersContainer = document.getElementById('selectedFilters');
            selectedFiltersContainer.innerHTML = ''; // Clear previous tags

            Object.keys(selectedFilters).forEach(filterType => {
                selectedFilters[filterType].forEach(filterValue => {
                    const tag = document.createElement('div');
                    tag.className = 'filter-tag';
                    tag.innerText = filterValue;
                    tag.onclick = () => {
                        // Remove the filter and refresh the display
                        toggleFilter(filterType, filterValue);
                    };
                    selectedFiltersContainer.appendChild(tag);
                });
            });
        }

        // Function to apply filters and sort products
        // Corrected function to toggle filters
function applyFilter() {
    const sortOrder = document.getElementById('sortBy').value;
    
    let filteredProducts = products;

    // Filter products based on selected filters
    if (selectedFilters.productTypes.length > 0) {
        filteredProducts = filteredProducts.filter(product => selectedFilters.productTypes.includes(product.subcategory));
    }
    
    if (selectedFilters.countries.length > 0) {
        filteredProducts = filteredProducts.filter(product => selectedFilters.countries.includes(product.country));
    }

    if (selectedFilters.categories.length > 0) {
        filteredProducts = filteredProducts.filter(product => selectedFilters.categories.includes(product.category));
    }

    if (selectedFilters.subcategories.length > 0) {
        filteredProducts = filteredProducts.filter(product => selectedFilters.subcategories.includes(product.subcategory));
    }

    // Sort products based on selected order
    if (sortOrder === 'asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    renderProducts(filteredProducts);
}

// Stop event propagation on the action menu dots click
function toggleActionMenu(event) {
    const actionMenu = event.currentTarget.nextElementSibling;
    actionMenu.style.display = actionMenu.style.display === 'block' ? 'none' : 'block';
    event.stopPropagation(); // Prevents the click from triggering the product tile click
}

        // Function to render products on the page
        // Function to render products in the product grid
        function renderProducts(products) {
            const productGrid = document.getElementById('productGrid');
            productGrid.innerHTML = products.map(product => {
                // Use subcategory-specific image or general image if not found
                const productImage = subcategoryImages[product.subcategory] || generalImage;
                return `
                    <div class="product" onclick="goToProductPage('${product.partNumber}')">
                         <img src="${productImagePath}" alt="${product.name}">
                         <div class="product-details">
                            <h3>${product.name}</h3>
                            <p>Part Number: ${product.partNumber}</p>
                            <p>Category: ${product.category}</p>
                            <p>Subcategory: ${product.subcategory}</p>
                            <p>Price: $${product.price.toFixed(2)}</p>
                            <p>Country: ${product.country}</p>
                        </div>
                        <div class="product-actions">
                            <span class="dots" onclick="toggleActionMenu(event)">•••</span>
                            <div class="dropdown-menu">
                                <button onclick="renameProduct('${product.partNumber}'); event.stopPropagation();">Rename</button>
                                <button onclick="changePrice('${product.partNumber}'); event.stopPropagation();">Change Price</button>
                                <button onclick="deleteProduct('${product.partNumber}'); event.stopPropagation();">Delete Item</button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
        

// Toggle action menu
function toggleActionMenu(event) {
    const actionMenu = event.currentTarget.nextElementSibling;
    actionMenu.style.display = actionMenu.style.display === 'block' ? 'none' : 'block';
    event.stopPropagation(); // Prevent click event from bubbling up to product tile
}

// Function to navigate to product page
function goToProductPage(partNumber) {
    const product = products.find(p => p.partNumber === partNumber);
    alert(`Navigate to details page for ${product.name}`);
}

// Function to open the rename popup and populate fields
function renameProduct(partNumber) {
    const product = products.find(p => p.partNumber === partNumber);
    if (product) {
        // Set existing part name, part number, and stock in the popup
        document.getElementById('existingPartName').innerText = product.partNumber;
        document.getElementById('existingProductName').innerText = product.name;
        document.getElementById('partStock').innerText = product.instock;

        // Clear the new part number and new product name input fields
        document.getElementById('newPartNumber').value = '';
        document.getElementById('newProductName').value = '';

        // Store the part number being renamed in a hidden variable or accessible way
        window.renamePartNumber = partNumber;

        // Show the popup
        document.getElementById('renamePopup').style.display = 'block';
    }
}


// Function to close the popup
// Function to close the popup
function closeRenamePopup() {
    document.getElementById('renamePopup').style.display = 'none';
}

// Function to save the new name and part number
function saveNewName() {
    const newPartNumber = document.getElementById('newPartNumber').value;
    const newProductName = document.getElementById('newProductName').value;
    const partNumber = window.renamePartNumber;

    if (newPartNumber && newProductName) {
        const product = products.find(p => p.partNumber === partNumber);
        if (product) {
            // Update the product name and part number
            product.partNumber = newPartNumber;
            product.name = newProductName;

            // Close the popup and refresh the product display
            closeRenamePopup();
            applyFilter(); // Refresh the product display
        }
    } else {
        alert('Please enter both a new part number and product name.');
    }
}
// Function to change the price of a product
function changePrice(partNumber) {
    const product = products.find(p => p.partNumber === partNumber);
    const newPrice = prompt('Enter new price for ' + product.name + ':');
    if (newPrice && !isNaN(newPrice)) {
        product.price = parseFloat(newPrice);
        applyFilter(); // Refresh the product display
    }
}

// Function to delete a product
function deleteProduct(partNumber) {
    if (confirm('Are you sure you want to delete this product?')) {
        products = products.filter(p => p.partNumber !== partNumber);
        applyFilter(); // Refresh the product display
    }
}

// Populate filters on load
window.onload = function() {
    populateDropdowns(); // Populate all dropdowns
    renderProducts(products); // Initial render
};

    