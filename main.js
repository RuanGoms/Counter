const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
let number = document.getElementById('number');

decrease.addEventListener("click", function(){
    number.textContent -= 1;
    checkNumber();
  })
reset.addEventListener("click", function(){
    number.textContent = 0;
    checkNumber();
  })
increase.addEventListener("click", function(){
    number.textContent++;
    checkNumber();
  })
function checkNumber() {
  const numberInt = parseInt(number.textContent);
  const sign = Math.sign(numberInt);
  if ((sign == -1 && ! numberInt == 0) || (sign == -0 && ! numberInt == 0)){
    number.style.color = "#bd2020";
  } else if ((sign == +1 && ! numberInt == 0) || (sign == +0 && ! numberInt == 0)) {
    number.style.color = "#228237";
  } else {
    number.style.color = "#222";
  }
  }
