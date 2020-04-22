let loop, bish, bosh;
let arr=[];
let results = document.getElementById("result");

//window.addEventListener('load', function() {

let form = document.getElementById('inputs');
//let button = document.getElementById("submitButton");

form.addEventListener('submit', function(event) {
  if (form.checkValidity() === false) {
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

    event.preventDefault();

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
  let resultString="";
  arr.forEach((item, arr) => {
     resultString += (item+"<br>"); //ändra från vertikalt?
  });
  results.innerHTML = resultString;
//alert("inside bishbosh!");
}
