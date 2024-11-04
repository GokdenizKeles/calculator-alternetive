function calculateMortgage(mortgageAmount, interestRate, mortgageTerm) {
  let P = mortgageAmount; 
  let r = (interestRate / 100) / 12; 
  let n = mortgageTerm * 12; 
  let monthlyPayment = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  return monthlyPayment.toFixed(2); 
}


const calculateBtn = document.querySelector('.calculate-btn')
const hiddenFooter = document.querySelector('.footer-inner')
const redBoard = document.querySelector('.euro-input')
const reversesInput = document.querySelectorAll('.euro-input-reverse')

calculateBtn.addEventListener('click', function() {
  hiddenBar.style.display = 'none'
  hiddenFooter.style.display = 'block'
  let mortgageAmount = loanAmount.value; 
  let interestRate = rateİnput.value; 
  let mortgageTerm = termİnput.value; 
  let result = calculateMortgage(mortgageAmount, interestRate, mortgageTerm);
  monthly.innerHTML = '€' + Number(result).toLocaleString()
  let n = mortgageTerm * 12;
  let total = result * n
  totalPayment.innerHTML = '€' + Math.floor(total).toLocaleString()
  if(mortgageAmount === '') {
    redBoard.style.borderColor = 'red'
     hiddenFooter.style.display = 'none'
     hiddenBar.style.display = 'block'
  } 
  for (const reverse of reversesInput ) {
    if (interestRate === '') {
      reverse.style.borderColor = 'red'
       hiddenFooter.style.display = 'none'
       hiddenBar.style.display = 'block'
    }
    
  }
})
clearBtn.addEventListener('click', function() {
   hiddenBar.style.display = 'block'
   totalPayment.innerHTML = ''
   monthly.innerHTML = ''
   loanAmount.value = ''
   rateİnput.value = ''
   termİnput.value = ''
   hiddenFooter.style.display = 'none'
})


