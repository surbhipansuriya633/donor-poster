let fileInput = document.getElementById("file");
let imagecrop = document.getElementById("image");
const previewButton = document.getElementById("preview");
const doneimageButton = document.getElementById("doneimage");
const previewImage = document.getElementById("preview-image");
const options = document.querySelector(".options");
const widthInput = document.getElementById("width-input");
const heightInput = document.getElementById("height-input");

let cropper = "";
let fileName = "";
let finalPreviewImage = null;

fileInput.onchange = () => {
  previewImage.src = "";
  heightInput.value = 550;
  widthInput.value = 885;

  let reader = new FileReader();
  reader.readAsDataURL(fileInput.files[0]);

  reader.onload = () => {
    imagecrop.setAttribute("src", reader.result);

    if (cropper) {
      cropper.destroy();
    }

    document.getElementById('staticBackdrop').addEventListener('shown.bs.modal', function () {
      if (cropper) {
        cropper.replace(imagecrop.getAttribute('src'));
      } else {
        cropper = new Cropper(imagecrop, {
          aspectRatio: 885 / 550, // ✅ Set correct ratio
          autoCropArea: 1,
          viewMode: 2,
        });
      }
    });

    options.classList.remove("hide");
    previewButton.classList.remove("hide");

    const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    modal.show();
  };

  fileName = fileInput.files[0].name.split(".")[0];
};

heightInput.addEventListener("input", () => {
  const newHeight = parseInt(heightInput.value);
  cropper.setCropBoxData({ height: newHeight });
});

widthInput.addEventListener("input", () => {
  const newWidth = parseInt(widthInput.value);
  cropper.setCropBoxData({ width: newWidth });
});

previewButton.addEventListener("click", (e) => {
  e.preventDefault();

  let imgSrc = cropper.getCroppedCanvas().toDataURL();
  let resizedCanvas = document.createElement("canvas");
  resizedCanvas.width = 885;
  resizedCanvas.height = 550;

  resizedCanvas.getContext("2d").drawImage(
    cropper.getCroppedCanvas(),
    0, 0,
    885, 550
  );

  previewImage.src = resizedCanvas.toDataURL();
  doneimageButton.style.display = "block";
});

window.onload = () => {
  options.classList.add("hide");
  previewButton.classList.add("hide");
};

function loadImage(imageSrc) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const staticImage = document.getElementById("static-image");

  const img = new Image();
  img.onload = function () {
    ctx.drawImage(staticImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 95, 425, 885, 550); // ✅ Position image in black box

    finalPreviewImage = img;
    staticImage.style.display = "none";
    staticImage.style.objectFit = "cover";
  };

  img.src = imageSrc;
  canvas.style.display = "inline-block";
  document.getElementById("text-input").style.display = "inline-block";
}

document.querySelector('.btn-danger').addEventListener('click', function () {
  const previewSrc = document.getElementById('preview-image').src;
  loadImage(previewSrc);
});

// function renderText() {
//   const canvas = document.getElementById("canvas");
//   const ctx = canvas.getContext("2d");
//   const textInput = document.getElementById("text-input").value.toLowerCase();

//   const capitalize = (text) => {
//     let splitStr = text.split(" ");
//     for (let i = 0; i < splitStr.length; i++) {
//       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//     }
//     return splitStr.join(' ');
//   };

//   const staticImage = document.getElementById("static-image");

//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   ctx.drawImage(staticImage, 0, 0, canvas.width, canvas.height);

//   if (finalPreviewImage) {
//     ctx.drawImage(finalPreviewImage, 95, 425, 885, 550); // ✅ Keep image correctly placed
//   }

//   ctx.font = "bold 50px Arial";
//   ctx.fillStyle = "#640609";
//   ctx.shadowColor = "#fff";
//   ctx.shadowOffsetX = 3;
//   ctx.shadowOffsetY = 3;
//   ctx.shadowBlur = 4;

//   const textX = 100;
//   const textY = 950;
//   ctx.fillText(capitalize(textInput), textX, textY);

//   const nameError = document.getElementById("name-error");
//   nameError.style.display = textInput.length >= 18 ? "block" : "none";
// }

function renderText() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const nameText = document.getElementById("text-input").value.toLowerCase();
  const locationText = document.getElementById("location-input").value;
  const dateText = document.getElementById("date-input").value;

  const capitalize = (text) => {
    let splitStr = text.split(" ");
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
  };

  const staticImage = document.getElementById("static-image");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(staticImage, 0, 0, canvas.width, canvas.height);

  if (finalPreviewImage) {
    ctx.drawImage(finalPreviewImage, 95, 425, 885, 550); // ✅ Main image position
  }

  ctx.font = "bold 50px Arial";
  ctx.fillStyle = "#640609";
  ctx.shadowColor = "#fff";
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowBlur = 4;

  // Draw name
  ctx.fillText(capitalize(nameText), 100, 950);

  // Draw location (📍) — adjust x/y as per icon
  ctx.font = "bold 35px Arial";
  ctx.fillText(capitalize(locationText), 200, 1070); // near 📍 icon

  // Draw date (📅) — adjust x/y as per icon
  ctx.fillText(dateText, 200, 1190); // near 📅 icon

  // Validation for name
  const nameError = document.getElementById("name-error");
  nameError.style.display = nameText.length >= 18 ? "block" : "none";
}


function downloadImage() {
  const canvas = document.getElementById("canvas");
  const dataURL = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = dataURL;
  a.download = "viranjaliblood-donation.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
