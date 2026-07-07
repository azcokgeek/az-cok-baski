 // Saat bilgisini güncelleyen fonksiyon
 function toggleCart() {
    const cart = document.getElementById('cart');
    cart.style.display = cart.style.display === 'block' ? 'none' : 'block';
}

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Saat bilgisini güncelle
    document.getElementById("clock").innerHTML = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);

    // 1 saniye sonra tekrar güncelle
    setTimeout(updateClock, 1000);
}

// Saat, dakika ve saniyeyi 2 haneli formata çeviren yardımcı fonksiyon
function formatTime(value) {
    return value < 10 ? "0" + value : value;
}

// Sayfa yüklendiğinde saat bilgisini güncelle
window.onload = function () {
    updateClock();
};