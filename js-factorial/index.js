let resultElem = document.querySelector(".result");

function factorial(num) {
  if (num == 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function result(param) {
  let res = "";
  for (let i = 1; i < 1000; i++) {
    if (param == factorial(i)) {
      console.log(factorial(i));
      res = `[${param}, ${i}]`;
    }
  }
  return res != "" ? res : "Not an exact bound!";
}

//resultElem.innerHTML = result(6);
//resultElem.innerHTML = result(24);
//resultElem.innerHTML = result(125);
//resultElem.innerHTML = result(720);
//resultElem.innerHTML = result(1024);
resultElem.innerHTML = result(40320);
