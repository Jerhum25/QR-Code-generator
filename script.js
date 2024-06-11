const baseQRCodeUrl =
  " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const input = document.querySelector("#adresse");
const QRCode = document.querySelector(".QRCode");
const generatorBtn = document.querySelector("button");
const img = document.querySelector("img");
const QRCodeText = document.querySelector("p");
console.log(generatorBtn);

// input.addEventListener("input", ()=> console.log(input.value))
generatorBtn.addEventListener("click", () => {
  if (input.value != "") {
    img.src = baseQRCodeUrl + input.value;
    QRCodeText.style.display = "none";
  } else {
    QRCodeText.style.display = "block";
    img.src = "";
  }
});

img.addEventListener("click", () => {
  copyToClipboard(img.src);
});

async function copyToClipboard(src) {
  const data = await fetch(src);
  const blob = await data.blob();

  try {
    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob,
      }),
    ]);
    console.log("success");
    alert("QR Code copié !");
  } catch (e) {
    console.log(e);
  }
}
