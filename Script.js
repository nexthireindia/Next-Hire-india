const products = [
  { id: 1, name: "Wireless Earbuds", price: 1299, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300" },
  { id: 2, name: "Smart Fitness Band", price: 1999, image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=300" },
  { id: 3, name: "Leather Wallet", price: 499, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=300" },
  { id: 4, name: "Casual Sneakers", price: 1499, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300" }
];

let cart = [];

const productList = document.getElementById("product-list");
const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const cartSidebar = document.getElementById("cart-sidebar");
const cartOverlay = document.getElementById("cart-overlay");

// Render Products
function renderProducts() {
  productList.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <div class="product-price">₹${product.price}</div>
      <button class="btn-add" onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `).join("");
}

// Open/Close Cart
function toggleCart() {
  cartSidebar.classList.toggle("open");
  cartOverlay.classList.toggle("open");
}

// Add Item
function addToCart(productId) {
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const product = products.find(p => p.id === productId);
    cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
}

// Update Quantity
function changeQuantity(productId, delta) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  updateCartUI();
}

// Render Cart UI & Total
function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  cartCount.innerText = totalCount;
  cartTotal.innerText = totalPrice;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p style='text-align:center; margin-top:20px; color:#666;'>Your cart is empty.</p>";
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <span>₹${item.price}</span>
      </div>
      <div class="cart-controls">
        <button onclick="changeQuantity(${item.id}, -1)">-</button>
        <span style="margin: 0 8px;">${item.quantity}</span>
        <button onclick="changeQuantity(${item.id}, 1)">+</button>
      </div>
    </div>
  `).join("");
}

// Checkout Trigger
function checkout() {
  if (cart.length === 0) {
    alert("कार्ट खाली है!");
    return;
  }
  alert(`Order Placed! Total: ₹${cartTotal.innerText}`);
  cart = [];
  updateCartUI();
  toggleCart();
}

// Load on start
renderProducts();
    
