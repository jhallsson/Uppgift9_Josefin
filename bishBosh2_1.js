let loop, bish, bosh;
let arr = [];
let results = document.getElementById("result");
let form = document.getElementById('inputs');

form.addEventListener('submit', function(event) {
  if (form.checkValidity() === false) {
    event.stopPropagation();
  } else {
    getInputs();
    calculate();
    writeOutResult();
  }
  form.classList.add('was-validated');
  event.preventDefault();
});


function calculate() {

  for (let i = 1; i <= loop; i++) {
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
}

function getInputs() {
  results.innerHTML = "";
  arr = [];
  bish = +document.getElementById("bishInput").value;
  bosh = +document.getElementById("boshInput").value;
  loop = +document.getElementById("loopInput").value;
}

function writeOutResult() {
  let resultString = "";
  arr.forEach((item, arr) => {
    resultString += (item + "<br>"); //ändra från vertikalt?
  });
  results.innerHTML = resultString;
}
