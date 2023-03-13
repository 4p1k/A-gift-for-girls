const NodeCounter = document.querySelector('.counter')
const correctBtn = document.querySelector('.correct-ans')
const wrongBtn = document.querySelector('.wrong-ans')
let ansg7 = localStorage.getItem("coun7");
NodeCounter.innerText = ansg7;

correctBtn.addEventListener('click', () =>{
    ansg7 ++;
    NodeCounter.innerText = ansg7;
    var count8 = ansg7;
    localStorage.setItem('coun8', count8);
});

wrongBtn.addEventListener('click',() =>{
    ansg7 --;
    NodeCounter.innerText = ansg7;
    var count8 = ansg7;
    localStorage.setItem('coun8', count8);
});