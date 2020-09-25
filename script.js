const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const peopleInput = document.querySelector('#people')
const displayTipAmount = document.querySelector('#tipamount')
const displayTotalAmount = document.querySelector('#total')

console.log("billInput=" + billInput.value) 
console.log("tiptInput=" + tipInput.value) 
console.log("peopleInput=" + peopleInput.value) 
// console.log(displayTip.value) 
// console.log(displayTotal.value) 


  
function calculateTip() {

  const tip = parseInt(billInput.value) * parseInt(tipInput.value) / 100;
  
  const totalValue = parseInt(billInput.value) + parseInt(tip.value)

  const perperson = totalValue.value / parseInt(peopleInput.value);

  console.log("perperson" + perperson) 

  // display.innerHTML = tip
}


calculateTip()

  billInput.addEventListener('input', calculateTip)
  tipInput.addEventListener('input', calculateTip)
  peopleInput.addEventListener('input',calculateTip)
  // displayTip.innerHTML = tip





// }

// billInput.addEventListener("input", calculateTip);
// tipInput.addEventListener("input", calculateTip);
// peopleInput.addEventListener("input", calculateTip);




// const billInput = document.querySelector('#input-bill')
// const tipInput = document.querySelector('#input-tip')
// const peopleInput = document.querySelector('#input-people')
// const displayTip = document.querySelector('#displayTip')
// const displayTotal = document.querySelector('displayTotal')

// const tipInput = document.querySelector('#tip')

// console.log(display.innerHTML) // prints the text inside the tags
// console.log(billInput.value) // prints the value entered into the input

// billInput.value = 999.88 // Set the value to 999.88

  
