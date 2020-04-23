let shoppingList = document.getElementById("shoppingList");
let addButton = document.getElementById("addItem");
let trimButton = document.getElementById("trimList");
let clearButton = document.getElementById("clearList");
let nameButton = document.getElementById("nameList");

addButton.addEventListener("click", addToList);
trimButton.addEventListener("click", clearRemoved);
clearButton.addEventListener("click", clearList);
nameButton.addEventListener("click", nameList);

function addToList() {
  let input = document.getElementById("listItem");
  let index = findDuplicate(input);
  if (index != -1) {
    //lägg inte till ny
    let divTag = shoppingList.children[index].firstElementChild; //Måste få ett index för den som matchade
    divTag.classList.remove("d-none");
    let badgeNumb = +divTag.textContent;
    if (badgeNumb >= 2) {
      //lägg på om fler än 2
      divTag.textContent = badgeNumb + 1;
    }
  } else {
    //lägg till i listan
    let newPost = createAnchorTag(input);
    shoppingList.appendChild(newPost);
  }
  resetFocus(input);
}

function findDuplicate(input) {
  let item;
  let boolValue = true;
  let i = 0;
  while (boolValue) {
    if (i < shoppingList.childElementCount) {
      item = shoppingList.children[i];
      if (item.firstChild.textContent === input.value) {
        boolValue = false;
      } else {
        i++;
      }
    } else {
      i = -1;
      boolValue = false;
    }
  }
  return i;
}

function removeFromList(item) {
  let itemText = item.previousSibling.data;
  let deleteItem = confirm("Är du säker på att du vill ta bort " + itemText + "?");
  if (deleteItem) {
    let listItem = item.parentNode;
    listItem.classList.add("bg-info");
  }
}

function clearRemoved() {
  let removedItems = document.getElementsByClassName("bg-info");
  while (removedItems.length > 0) {
    shoppingList.removeChild(removedItems[0]);
  }
}

function clearList() {
  while (shoppingList.childElementCount > 0) {
    shoppingList.removeChild(shoppingList.firstElementChild);
  }
}

function nameList() {
  let inputName = document.getElementById("listNameInput");
  let listName = document.getElementById("listName");
  listName.innerHTML = inputName.value;
  resetFocus(inputName);
}

function resetFocus(input) {
  input.value = "";
  document.getElementById("listItem").focus();
}

//function savelist
//if list!=0 -> localstorage.setitem ,json.stringify

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
  newAnchor.appendChild(createBadgeDiv());
  newAnchor.appendChild(createButtonTag());
  return newAnchor;
}

function createBadgeDiv() {
  let newDiv = document.createElement("div");
  //ge attribut
  newDiv.setAttribute("class", "badge badge-primary d-none ml-3");
  //lägg till siffra i badge
  newDiv.appendChild(document.createTextNode("2"));
  return newDiv;
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

function setButtonAttributes(newButton) {
  newButton.setAttribute("type", "close");
  newButton.setAttribute("onclick", "removeFromList(this)");
  newButton.setAttribute("class", "close");
}
