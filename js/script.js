 
const input = document.querySelector('#slider');
const log = document.getElementById('result');
const views = document.getElementById('views');
const monthly = document.getElementById('monthlyBox');

input.addEventListener('click', updateValue);
input.addEventListener('click', updateValue);

function updateValue(e) {
  const targetvar = e.target.value;
  if(targetvar > 1 && targetvar <8) {
    log.textContent = '8';
    views.textContent='10K';
  } 
  else if(targetvar > 9 && targetvar <15) {
    log.textContent = '12';
    views.textContent='50K';
  } 
  else if(targetvar > 16 && targetvar <20) {
    log.textContent = '16';
    views.textContent='100K';
  } 
  else if(targetvar > 21 && targetvar <25) {
    log.textContent = '24';
    views.textContent='500K';
  } 
  else if(targetvar > 26 && targetvar <30) {
    log.textContent = '36';
    views.textContent='1M';
  } 
 
}
