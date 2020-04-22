let button = document.getElementById("addItem");
let input = document.getElementById("listItem");


button.addEventListener("click", function(){

    //alert(input.value);
    addToList(input);
});

function addToList(item){
  //shoppingList.innerHTML+="<div>"+input.value+"</div>";
  let shoppingList = document.getElementById("shoppingList");

  let newAnchor = document.createElement("a");                //skapa anchor-tag
  newAnchor.setAttribute("class", "list-group-item list-group-item-action"); //ge klass

  let newButton=document.createElement("button");             //skapa button
  newButton.setAttribute("type", "close");                    //ge attribut
  newButton.setAttribute("onclick", "alert('hej')");
  newButton.setAttribute("class", "close");
  newButton.appendChild(document.createTextNode("\u00D7"));    //lägg till krysset i button

  let itemText = document.createTextNode(item.value);       //skapa text till inlägget


  newAnchor.appendChild(itemText);                         //lägg till text i anchor
  newAnchor.appendChild(newButton);                         //lägg till button i anchor

                                                            //sätt ihop inlägget
  shoppingList.appendChild(newAnchor);                        //lägg till i listan

}
function createAnchorTag(){

}
function createButtonTag(){
  
}
