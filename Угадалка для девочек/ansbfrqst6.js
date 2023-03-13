const NodeCounter = document.querySelector('.counter')
const correctBtn = document.querySelector('.correct-ans')
const wrongBtn = document.querySelector('.wrong-ans')
let ansg6 = localStorage.getItem('coun6');
NodeCounter.innerText = ansg6;

correctBtn.addEventListener('click', () =>{
    ansg6 ++;
    NodeCounter.innerText = ansg6;
    var count7 = ansg6;
    localStorage.setItem('coun7',count7 )
});

wrongBtn.addEventListener('click', () =>{
    ansg6 --;
    NodeCounter.innerText = ansg6;
    var count7 = ansg6;
    localStorage.setItem('coun7',count7 )
});