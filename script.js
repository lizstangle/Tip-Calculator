const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const peopleInput = document.querySelector('#people')
const displayTipAmount = document.querySelector('#tipAmount')
const displayTotalAmount = document.querySelector('#total')
const displayTipPerPerson = document.querySelector('#totalPerPerson')

console.log("billInput=" + billInput.value) 
console.log("tipInput=" + tipInput.value) 
console.log("peopleInput=" + peopleInput.value) 



  
function calculateTip() {

  const tip = parseInt(billInput.value) * parseInt(tipInput.value) / 100;
  
  const totalValue = parseFloat(billInput.value) + parseFloat(tip);

  const perperson = totalValue / parseInt(peopleInput.value);

  console.log("perperson" + perperson) 

  displayTipAmount.innerHTML = tip
  displayTotalAmount.innerHTML = totalValue
  displayTipPerPerson.innerHTML = perperson
}


calculateTip()

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
peopleInput.addEventListener('input',calculateTip)