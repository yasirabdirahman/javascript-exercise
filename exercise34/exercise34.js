function addItem() {
  const newlist = document.querySelector("#list");
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  newlist.appendChild(newItem);
}

function removeItem() {
  const newlist = document.querySelector("#list");
  if (newlist.lastChild) {
    newlist.removeChild(newlist.lastChild);
  }else{
    alert("way dhamaden")
  }
}
