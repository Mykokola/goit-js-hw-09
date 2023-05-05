const delayEl = document.querySelector('[name=delay]'),
  stepEl = document.querySelector('[name=step]'),
  amountEl = document.querySelector('[name=amount]'),
  btnSubmitEl = document.querySelector('[type=submit]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const shouldResolve = Math.random() > 0.3; 
        if (shouldResolve) { 
          resolve({position,delay})
        } else { 
          reject({position,delay})
        } 
    },delay);
})
}
function numbFix(numb){
  if(+numb){
    return +numb
  }else{
    return 0
  }
}


btnSubmitEl.addEventListener('click',(e) => {
  let delayElValue = delayEl.value,
      stepElValue = stepEl.value,
      amountElValue = amountEl.value
  e.preventDefault()
  if(numbFix(delayElValue)>1){
    setTimeout(() => {
      let startDelay = numbFix(delayElValue),
          startStep = numbFix(stepElValue)
      for(let i = 1; i <= numbFix(amountElValue);i++){
        createPromise(i,startDelay)
        .then(({position, delay}) => console.log(`Resolved with ${position} and ${delay}`))
        .catch(({position, delay}) => console.log(`Catched with ${position} and ${delay}`));
        
        startDelay += startStep
      }
    },numbFix(delayElValue) )

    
  }
 

})
