let form = document.getElementById('inputs');

form.addEventListener('submit', function(event) {
  if (form.checkValidity() === false) {
    event.stopPropagation();
  } else {
    bishBosh();
  }
  form.classList.add('was-validated');
  event.preventDefault();
});

function bishBosh() {
  let bish = +document.getElementById("bishInput").value;
  let bosh = +document.getElementById("boshInput").value;
  let loop = +document.getElementById("loopInput").value;

  let resultArr = calculate(bish, bosh, loop);
  writeOutResult(resultArr);
}

function calculate(bish, bosh, loop) {
  let arr = [];
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
  let results = document.getElementById("result");
  //results.innerHTML = "";
  let resultString = "";
  arr.forEach((item, arr) => {
    resultString += (item + "<br>");
  });
  results.innerHTML = resultString;
}
