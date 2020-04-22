let loop, bish, bosh;
let arr=[];
const button = document.getElementById("submitButton");
const results = document.getElementById("result");

button.addEventListener("click", function() {
  results.innerHTML="";
  arr=[];
  bish = +document.getElementById("bishInput").value;
  bosh = +document.getElementById("boshInput").value;
  loop = +document.getElementById("loopInput").value;

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var form = document.getElementById('needs-validation');
  // Loop over them and prevent submission

  form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
      }
      form.classList.add('was-validated');
      else{
        bishBosh();
      }

  })();

  bishBosh();
  });

  // if(isNaN(parseInt(bish))||isNaN(parseInt(bosh))||isNaN(parseInt(loop))){
  //   let feedback = document.getElementById("feedback");
  //   //enabla validate feedback
  //   //eller alert
  //   alert("All inputs must be numbers!");
  //
  // }
  //  console.log(bish + bosh + loop);


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

}
