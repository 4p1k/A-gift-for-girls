const NodeCounter = document.querySelector('.counter')
const correctBtn = document.querySelector('.correct-ans')
const wrongBtn = document.querySelector('.wrong-ans')
let ansg4 = localStorage.getItem("coun4")
NodeCounter.innerText = ansg4;

correctBtn.addEventListener('click', () =>{
    ansg4 ++;
    NodeCounter.innerText = ansg4;
    var count5 = ansg4;
    localStorage.setItem('coun5', count5);
});

wrongBtn.addEventListener('click', () =>{
    ansg4 --;
    NodeCounter.innerText = ansg4;
    var count5 = ansg4;
    localStorage.setItem('coun5', count5);
});

