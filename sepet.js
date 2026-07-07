let cartItems = [];
let totalPrice = 0;

function addToCart(productName, price) {
  cartItems.push({ productName, price });
  totalPrice += price;

  updateCart();
}

function removeProduct(productName) {
  // Sepet ürününü bul
  const product = cartItems.find((item) => item.productName === productName);

  // Sepet ürününü kaldır
  cartItems.splice(cartItems.indexOf(product), 1);

  // Toplam fiyatı güncelle
  totalPrice -= product.price;

  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  const totalElement = document.getElementById("total-price");
  const cartCount = document.getElementById("cart-count");

  // Temizle
  cartList.innerHTML = "";

  // Sepet ürününü kaldırma
  cartItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.productName} - ₺${item.price} `;
    cartList.appendChild(listItem);

    // Sepet ürününü kaldırma düğmesi
    const removeButton = document.createElement("button");
    removeButton.textContent = "Kaldır";
    removeButton.style.borderRadius = "10px";
    removeButton.style.borderColor = "black";
    removeButton.style.margin = "5px";
    removeButton.style.backgroundColor = "antiquewhite";
    removeButton.style.width = "auto";
    removeButton.style.height = "auto";
    removeButton.addEventListener("click", () =>
      removeProduct(item.productName)
    );
    listItem.appendChild(removeButton);
  });

  // Toplam fiyatı güncelleme
  totalElement.textContent = totalPrice;
}

function toggleCart() {
  const cart = document.getElementById("cart");
  cart.style.display = cart.style.display === "block" ? "none" : "block";
}

// Form kontrolü
function confirmOrder() {
  var name = document.getElementById('name').value;
  var address = document.getElementById('address').value;

  if (name && address) {
    // Formu gizle
    document.getElementById('cart-confirmation').style.display = 'none';

    // Onay bildirimini göster  
    document.getElementById('order-confirmation').style.display = 'block';

    // Formu sıfırla
    document.getElementById('order-form').reset();
  } else {
    alert('Lütfen bilgilerinizi eksiksiz girin.');
  }

  // "Sipariş Onaylandı" mesajını göster
  showOrderConfirmationMessage();
}
function showOrderConfirmationMessage() {
  var orderConfirmationDiv = document.getElementById('order-confirmation-message');
  if (orderConfirmationDiv) {
    orderConfirmationDiv.innerHTML = '';
  } else {

    orderConfirmationDiv = document.createElement('div');
    orderConfirmationDiv.id = 'order-confirmation-message';
    orderConfirmationDiv.className = 'alert alert-success';
    document.getElementById('order-confirmation').appendChild(orderConfirmationDiv);
  }
  orderConfirmationDiv.innerHTML = '<h2 class="alert-heading">Sipariş Onaylandı</h2><p>Teşekkür ederiz! Siparişiniz onaylandı.</p>';
}

