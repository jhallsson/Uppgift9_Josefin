let button = document.getElementById("addItem");
let input = document.getElementById("listItem");


button.addEventListener("click", function(){

    //alert(input.value);
    addToList(input);
});

function addToList(item){
  //shoppingList.innerHTML+="<div>"+input.value+"</div>";
  let shoppingList = document.getElementById("shoppingList");

  let newPost = document.createElement("a");
  newPost.setAttribute("class", "list-group-item list-group-item-action");
  let itemText = document.createTextNode(item.value);
  newPost.appendChild(itemText);
  shoppingList.appendChild(newPost);


  //.setAttribute("class", "democlass");
  // newPost.appendchild(document.createTextNode(item.value));
  // shoppingList.appendChild(newPost);

//  var para = document.createElement("p");
  //var node = document.createTextNode("This is new.");
  //para.appendChild(node);
  //var element = document.getElementById("div1");
  //element.appendChild(para);

}
