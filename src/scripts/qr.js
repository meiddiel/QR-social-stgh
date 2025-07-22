// This file generates QR codes for LinkedIn and Facebook URLs and appends them to the HTML document.

document.addEventListener("DOMContentLoaded", function() {
    const facebookUrl = "https://shorturl.at/uvTfC";
    const linkedinUrl = "https://shorturl.at/rGgfv";

    const qrContainer = document.getElementById("qr-codes");

    const generateQRCode = (url, elementId) => {
        const qrCode = new QRCode(document.getElementById(elementId), {
            text: url,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H,
        });
    };

    generateQRCode(facebookUrl, "facebook-qr");
    generateQRCode(linkedinUrl, "linkedin-qr");
});