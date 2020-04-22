let button = document.getElementById("addItem");

button.addEventListener("click", function() {
  let input = document.getElementById("listItem");
  addToList(input);
});

function addToList(item) {
  let shoppingList = document.getElementById("shoppingList");
  let newPost = createAnchorTag(item);
  //lägg till i listan
  shoppingList.appendChild(newPost);

}

function createAnchorTag(item) {
  //skapa anchor-tag
  let newAnchor = document.createElement("a");
  //ge klass
  newAnchor.setAttribute("class", "list-group-item list-group-item-action");

  //skapa text till inlägget
  let itemText = document.createTextNode(item.value);
  //lägg till text i anchor
  newAnchor.appendChild(itemText);
  //lägg till button i anchor
  newAnchor.appendChild(createButtonTag());

  return newAnchor;
}

function createButtonTag() {
  //skapa button
  let newButton = document.createElement("button");
  //ge attribut
  setButtonAttributes(newButton);
  //lägg till krysset i button
  newButton.appendChild(document.createTextNode("\u00D7"));
  return newButton;
}
function setButtonAttributes(newButton){
  newButton.setAttribute("type", "close");
  newButton.setAttribute("onclick", "alert('hej')");
  newButton.setAttribute("class", "close");
}
