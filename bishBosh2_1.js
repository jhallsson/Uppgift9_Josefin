//let loop, bish, bosh;
//let arr = [];
let results = document.getElementById("result");
let form = document.getElementById('inputs');

form.addEventListener('submit', function(event) {
  if (form.checkValidity() === false) {
    event.stopPropagation();
  } else {
    bishBosh();
  //  calculate();
    //writeOutResult();
  }
  form.classList.add('was-validated');
  event.preventDefault();
});
function bishBosh() {
  let loop, bish, bosh;
  results.innerHTML = "";
  bish = +document.getElementById("bishInput").value;
  bosh = +document.getElementById("boshInput").value;
  loop = +document.getElementById("loopInput").value;

  let resArr= calculate(bish,bosh,loop);
  writeOutResult(resArr);
}


function calculate(bish,bosh,loop) {
  let arr=[];
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
  return arr;
}


function writeOutResult(arr) {
  let resultString = "";
  arr.forEach((item, arr) => {
    resultString += (item + "<br>"); //ändra från vertikalt?
  });
  results.innerHTML = resultString;
}
