document.getElementById("generate-QR").addEventListener("click", function () {
    let url = document.getElementById("URLinput").value.trim(); // Get user input

    if (!url) {
        alert("Please enter a URL!");
        return;
    }

    // Generate QR Code using API
    let qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(url)}`;

    // Display QR Code
    let qrImage = document.getElementById("qrcode");
    qrImage.src = qrCodeUrl;
    document.getElementById("qrcontainer").style.display = "block"; // Show the QR code container
});

