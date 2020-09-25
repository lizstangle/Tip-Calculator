const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const peopleInput = document.querySelector('#people')
const displayTip = document.querySelector('#Tip')
const displayTotal = document.querySelector('#Total')




function calculateTip() {
  const billValue = billInput.value
  const percent = tipInput.value

  const tipAmount = billValue * tipValue / 100
  
  const totalValue= billValue * tipAmount+ billValue
  
  Total tip p/person = tipAmount / number of peopleInput

  Total p/person = totalValue / number of peopleInput

  display.innerHTML = tipAmount
}
calculateTip()

  billInput.addEventListener('input', calculateTip)
  tipInput.addEventListener('input', calculateTip)
  peopleInput.addEventListener('input',calculateTotal)
  displayTip.innerHTML = tip





}

// billInput.addEventListener("input", calculateTip);
// tipInput.addEventListener("input", calculateTip);
// peopleInput.addEventListener("input", calculateTip);




// const billInput = document.querySelector('#input-bill')
// const tipInput = document.querySelector('#input-tip')
// const peopleInput = document.querySelector('#input-people')
// const displayTip = document.querySelector('#displayTip')
// const displayTotal = document.querySelector('displayTotal')

// const tipInput = document.querySelector('#tip')

console.log(display.innerHTML) // prints the text inside the tags
console.log(billInput.value) // prints the value entered into the input

billInput.value = 999.88 // Set the value to 999.88

  
