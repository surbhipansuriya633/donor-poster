// let fileInput = document.getElementById("file");
// let imagecrop = document.getElementById("image");
// const previewButton = document.getElementById("preview");
// const doneimageButton = document.getElementById("doneimage");
// const previewImage = document.getElementById("preview-image");
// const options = document.querySelector(".options");
// const widthInput = document.getElementById("width-input");
// const heightInput = document.getElementById("height-input");

// let cropper = "";
// let fileName = "";
// let finalPreviewImage = null;

// fileInput.onchange = () => {
//   previewImage.src = "";
//   heightInput.value = 550;
//   widthInput.value = 885;

//   let reader = new FileReader();
//   reader.readAsDataURL(fileInput.files[0]);

//   reader.onload = () => {
//     imagecrop.setAttribute("src", reader.result);

//     if (cropper) {
//       cropper.destroy();
//     }

//     document.getElementById('staticBackdrop').addEventListener('shown.bs.modal', function () {
//       if (cropper) {
//         cropper.replace(imagecrop.getAttribute('src'));
//       } else {
//         cropper = new Cropper(imagecrop, {
//           aspectRatio: 885 / 550, // ✅ Set correct ratio
//           autoCropArea: 1,
//           viewMode: 2,
//         });
//       }
//     });

//     options.classList.remove("hide");
//     previewButton.classList.remove("hide");

//     const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
//     modal.show();
//   };

//   fileName = fileInput.files[0].name.split(".")[0];
// };

// heightInput.addEventListener("input", () => {
//   const newHeight = parseInt(heightInput.value);
//   cropper.setCropBoxData({ height: newHeight });
// });

// widthInput.addEventListener("input", () => {
//   const newWidth = parseInt(widthInput.value);
//   cropper.setCropBoxData({ width: newWidth });
// });

// previewButton.addEventListener("click", (e) => {
//   e.preventDefault();

//   let imgSrc = cropper.getCroppedCanvas().toDataURL();
//   let resizedCanvas = document.createElement("canvas");
//   resizedCanvas.width = 885;
//   resizedCanvas.height = 550;

//   resizedCanvas.getContext("2d").drawImage(
//     cropper.getCroppedCanvas(),
//     0, 0,
//     885, 550
//   );

//   previewImage.src = resizedCanvas.toDataURL();
//   doneimageButton.style.display = "block";
// });

// window.onload = () => {
//   options.classList.add("hide");
//   previewButton.classList.add("hide");
// };

// function loadImage(imageSrc) {
//   const canvas = document.getElementById("canvas");
//   const ctx = canvas.getContext("2d");
//   const staticImage = document.getElementById("static-image");

//   const img = new Image();
//   img.onload = function () {
//     ctx.drawImage(staticImage, 0, 0, canvas.width, canvas.height);
//     ctx.drawImage(img, 95, 425, 885, 550); // ✅ Position image in black box

//     finalPreviewImage = img;
//     staticImage.style.display = "none";
//     staticImage.style.objectFit = "cover";
//   };

//   img.src = imageSrc;
//   canvas.style.display = "inline-block";
//   document.getElementById("text-input").style.display = "inline-block";
// }

// document.querySelector('.btn-danger').addEventListener('click', function () {
//   const previewSrc = document.getElementById('preview-image').src;
//   loadImage(previewSrc);
// });

// // function renderText() {
// //   const canvas = document.getElementById("canvas");
// //   const ctx = canvas.getContext("2d");
// //   const textInput = document.getElementById("text-input").value.toLowerCase();

// //   const capitalize = (text) => {
// //     let splitStr = text.split(" ");
// //     for (let i = 0; i < splitStr.length; i++) {
// //       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
// //     }
// //     return splitStr.join(' ');
// //   };

// //   const staticImage = document.getElementById("static-image");

// //   ctx.clearRect(0, 0, canvas.width, canvas.height);

// //   ctx.drawImage(staticImage, 0, 0, canvas.width, canvas.height);

// //   if (finalPreviewImage) {
// //     ctx.drawImage(finalPreviewImage, 95, 425, 885, 550); // ✅ Keep image correctly placed
// //   }

// //   ctx.font = "bold 50px Arial";
// //   ctx.fillStyle = "#640609";
// //   ctx.shadowColor = "#fff";
// //   ctx.shadowOffsetX = 3;
// //   ctx.shadowOffsetY = 3;
// //   ctx.shadowBlur = 4;

// //   const textX = 100;
// //   const textY = 950;
// //   ctx.fillText(capitalize(textInput), textX, textY);

// //   const nameError = document.getElementById("name-error");
// //   nameError.style.display = textInput.length >= 18 ? "block" : "none";
// // }

// function renderText() {
//   const canvas = document.getElementById("canvas");
//   const ctx = canvas.getContext("2d");

//   const nameText = document.getElementById("text-input").value.toLowerCase();
//   const locationText = document.getElementById("location-input").value;
//   const dateText = document.getElementById("date-input").value;

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
//     ctx.drawImage(finalPreviewImage, 95, 425, 885, 550); // ✅ Main image position
//   }

//   ctx.font = "bold 50px Arial";
//   ctx.fillStyle = "#640609";
//   ctx.shadowColor = "#fff";
//   ctx.shadowOffsetX = 3;
//   ctx.shadowOffsetY = 3;
//   ctx.shadowBlur = 4;

//   // Draw name
//   ctx.fillText(capitalize(nameText), 100, 950);

//   // Draw location (📍) — adjust x/y as per icon
//   ctx.font = "bold 35px Arial";
//   ctx.fillText(capitalize(locationText), 200, 1070); // near 📍 icon

//   // Draw date (📅) — adjust x/y as per icon
//   ctx.fillText(dateText, 200, 1190); // near 📅 icon

//   // Validation for name
//   const nameError = document.getElementById("name-error");
//   nameError.style.display = nameText.length >= 18 ? "block" : "none";
// }


// function downloadImage() {
//   const canvas = document.getElementById("canvas");
//   const dataURL = canvas.toDataURL("image/png");
//   const a = document.createElement("a");
//   a.href = dataURL;
//   a.download = "viranjaliblood-donation.png";
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
// }


const POSTER_W = 1151;
const POSTER_H = 2048;

const BOX_X = 84;
const BOX_Y = 523;
const TARGET_W = 983;
const TARGET_H = 960;

const fileInput = document.getElementById("file");
const imagecrop = document.getElementById("image");
const previewButton = document.getElementById("preview");
const doneimageButton = document.getElementById("doneimage");
const previewImage = document.getElementById("preview-image");
const options = document.querySelector(".options");
const widthInput = document.getElementById("width-input");
const heightInput = document.getElementById("height-input");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const staticImage = document.getElementById("static-image");

// Text input fields
const nameInput = document.getElementById("text-input");
const locationInput = document.getElementById("location-input");
const dateInput = document.getElementById("date-input");
const nameError = document.getElementById("name-error");

// ============== State =================
let cropper = null;
let finalPreviewImage = null;
let fileName = "";

// ============== Helpers =================

// poster load → canvas pixels fix to poster natural size
function syncCanvasWithPoster() {
  canvas.width = POSTER_W;
  canvas.height = POSTER_H;
}

// draw poster background + (optional) final image
function drawBase() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // draw background poster
  ctx.drawImage(staticImage, 0, 0, canvas.width, canvas.height);

  // draw cropped photo into fixed box (no stretch beyond TARGET_W/H)
  if (finalPreviewImage) {
    ctx.drawImage(finalPreviewImage, BOX_X, BOX_Y, TARGET_W, TARGET_H);
  }
}

// Capitalize helper
function capitalize(text) {
  return text
    .split(" ")
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.substring(1))
    .join(" ");
}

function renderText() {
  // Ensure background + image drawn
  drawBase();

  const nameText = (nameInput?.value || "").toLowerCase();
  const locationText = locationInput?.value || "";
  const dateText = dateInput?.value || "";

  // Helper: draw text with background box
  function fillTextWithBackground(ctx, text, x, y, {
    font = "bold 35px Arial",
    textColor = "#fff",
    bgColor = "#b44c43",      // 🔹 BG color changed here
    paddingX = 12,
    paddingY = 8,
    radius = 8,
    shadowColor = "rgba(0,0,0,0.6)",
    shadowOffsetX = 3,
    shadowOffsetY = 3,
    shadowBlur = 4
  } = {}) {
    ctx.save();
    ctx.font = font;

    const m = ctx.measureText(text);
    const asc = m.actualBoundingBoxAscent || 0;
    const desc = m.actualBoundingBoxDescent || 0;
    const textH = asc + desc;
    const textW = m.width || 0;

    // Background rect
    const bx = x - paddingX;
    const by = y - asc - paddingY;
    const bw = textW + paddingX * 2;
    const bh = textH + paddingY * 2;

    // Rounded rect path
    const r = Math.min(radius, bw / 2, bh / 2);
    ctx.beginPath();
    ctx.moveTo(bx + r, by);
    ctx.arcTo(bx + bw, by, bx + bw, by + bh, r);
    ctx.arcTo(bx + bw, by + bh, bx, by + bh, r);
    ctx.arcTo(bx, by + bh, bx, by, r);
    ctx.arcTo(bx, by, bx + bw, by, r);
    ctx.closePath();

    ctx.fillStyle = bgColor;
    ctx.fill();

    ctx.fillStyle = textColor;
    ctx.shadowColor = shadowColor;
    ctx.shadowOffsetX = shadowOffsetX;
    ctx.shadowOffsetY = shadowOffsetY;
    ctx.shadowBlur = shadowBlur;

    ctx.fillText(text, x, y);
    ctx.restore();
  }

  // Name with background box
  fillTextWithBackground(ctx, capitalize(nameText), 110, 1450, {
    font: "bold 50px Arial",
    bgColor: "#b44c43",   // 🔹 Your required BG color
    textColor: "#fff",
    paddingX: 14,
    paddingY: 10,
    radius: 10
  });

  // Location and Date (normal text, no bg)
  ctx.font = "bold 55px Arial";
  ctx.fillStyle = "#fff";
  ctx.shadowColor = "#c20000";
  ctx.shadowOffsetX = 4;
  ctx.shadowOffsetY = 4;
  ctx.shadowBlur = 4;

  ctx.fillText(capitalize(locationText), 200, 1680);
  ctx.fillText(dateText, 200, 1820);

  // Validation
  if (nameError) {
    nameError.style.display = nameText.length >= 18 ? "block" : "none";
  }
}


// Download final PNG
function downloadImage() {
  // ensure at least one draw
  drawBase();
  renderText(); // make sure latest text is on canvas

  const a = document.createElement("a");
  a.href = canvas.toDataURL("image/png");
  a.download = "viranjaliblood-donation.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
window.downloadImage = downloadImage;

// ============== INIT =================
window.onload = () => {
  options?.classList.add("hide");
  previewButton?.classList.add("hide");

  if (staticImage.complete) {
    syncCanvasWithPoster();
  } else {
    staticImage.onload = () => syncCanvasWithPoster();
  }
};

// ============== File Upload → Cropper Modal =================
fileInput.onchange = () => {
  if (!fileInput.files || !fileInput.files[0]) return;

  previewImage.src = "";
  heightInput.value = TARGET_H;
  widthInput.value = TARGET_W;

  const reader = new FileReader();
  reader.readAsDataURL(fileInput.files[0]);

  reader.onload = () => {
    imagecrop.setAttribute("src", reader.result);

    // Bootstrap modal
    const modalEl = document.getElementById('staticBackdrop');

    // On modal shown → init/replace cropper
    const onShown = function () {
      modalEl.removeEventListener('shown.bs.modal', onShown);
      if (cropper) {
        // Replace the image source if cropper exists
        cropper.replace(imagecrop.getAttribute('src'));
      } else {
        // Init cropper with the fixed aspect ratio of poster box
        cropper = new Cropper(imagecrop, {
          aspectRatio: TARGET_W / TARGET_H,
          autoCropArea: 1,
          viewMode: 2,
        });
      }
    };
    modalEl.addEventListener('shown.bs.modal', onShown);

    options?.classList.remove("hide");
    previewButton?.classList.remove("hide");

    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  };

  // Keep original file name (optional)
  fileName = fileInput.files[0].name.split(".")[0];
};

// Optional manual crop box size (keep aspect consistent if you change both)
heightInput.addEventListener("input", () => {
  const newHeight = parseInt(heightInput.value) || TARGET_H;
  if (cropper) cropper.setCropBoxData({ height: newHeight });
});
widthInput.addEventListener("input", () => {
  const newWidth = parseInt(widthInput.value) || TARGET_W;
  if (cropper) cropper.setCropBoxData({ width: newWidth });
});

// Build cropped preview at exact TARGET size
previewButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (!cropper) return;

  // Get cropped area and scale to exact TARGET_W x TARGET_H
  const croppedCanvas = cropper.getCroppedCanvas({ width: TARGET_W, height: TARGET_H });

  // Extra resizing canvas (kept for smoothing safety)
  const resizedCanvas = document.createElement("canvas");
  resizedCanvas.width = TARGET_W;
  resizedCanvas.height = TARGET_H;
  const rctx = resizedCanvas.getContext("2d");
  rctx.imageSmoothingEnabled = true;
  rctx.drawImage(croppedCanvas, 0, 0, TARGET_W, TARGET_H);

  // Show preview inside modal
  previewImage.src = resizedCanvas.toDataURL();
  doneimageButton.style.display = "block";
});

// Use the cropped image into poster box
doneimageButton.addEventListener('click', () => {
  const previewSrc = previewImage.src;
  if (!previewSrc) return;

  const img = new Image();
  img.onload = function () {
    finalPreviewImage = img;

    // Switch to canvas view
    staticImage.style.display = "none"; // visual only; draw uses <img> already loaded
    canvas.style.display = "block";

    // First draw base + photo
    drawBase();

    // Show name/location/date inputs after image is set
    if (nameInput) nameInput.style.display = "inline-block";
    if (locationInput) locationInput.style.display = "inline-block";
    if (dateInput) dateInput.style.display = "inline-block";

    // Then render text on top
    renderText();
  };
  img.src = previewSrc;

  // close modal if open
  const modalEl = document.getElementById('staticBackdrop');
  const instance = bootstrap.Modal.getInstance(modalEl);
  if (instance) instance.hide();
});

// Re-render text on input
["text-input", "location-input", "date-input"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener("input", renderText);
});