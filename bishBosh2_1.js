let loop, bish, bosh;
let arr=[];
let results = document.getElementById("result");

//window.addEventListener('load', function() {

let form = document.getElementById('inputs');
//let button = document.getElementById("submitButton");

form.addEventListener('submit', function(event) {
  if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      //alert("failed!");
  }
    else{

        results.innerHTML="";
        arr=[];
        bish = +document.getElementById("bishInput").value;
        bosh = +document.getElementById("boshInput").value;
        loop = +document.getElementById("loopInput").value;

        bishBosh();
        //alert("success");
    }
    form.classList.add('was-validated');


});

//}); //eventlistener window



function bishBosh() {

  for (let i = 1; i <=loop; i++) {
    if (i % bish == 0 && i % bosh == 0) {
      arr.push("Bish-Bosh");
    } else if (i % bish == 0) {
      arr.push("Bish");
    } else if (i % bosh == 0) {
      arr.push("Bosh");
    } else {
      arr.push(i);
    }
  }
  arr.forEach((item, arr) => {
    results.innerHTML += (item+"<br>"); //ändra från vertikalt?
  });
//alert("inside bishbosh!");
}
