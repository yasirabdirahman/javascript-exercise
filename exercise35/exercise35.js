function changeImage() {
  const img = document.querySelector("#myImage");

  const newUrl = prompt("geli url sawirka:");
  const borderColor = prompt("geli midabka border ka:",);
  const width = prompt("geli Width sawirka:");
  const height = prompt("geli height sawirka:");
  const borderRadius = prompt("Border radius in pixels:",);

  
  if (newUrl) img.src = newUrl;

  img.style.borderColor = borderColor;
  img.style.borderStyle = "solid";

  img.style.width = width + "px";
  img.style.height = height + "px";
  img.style.borderRadius = borderRadius + "px";
}
