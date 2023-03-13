const NodeCounter = document.querySelector('.counter')
const correctBtn = document.querySelector('.correct-ans')
const wrongBtn = document.querySelector('.wrong-ans')
let ansg8 = localStorage.getItem("coun8");
NodeCounter.innerText = ansg8;

correctBtn.addEventListener('click', () =>{
    ansg8 ++;
    NodeCounter.innerText = ansg8;
    var count9 = ansg8;
    localStorage.setItem('coun9', count9);
});

wrongBtn.addEventListener('click', () =>{
    ansg8 --;
    NodeCounter.innerText = ansg8;
    var count9 = ansg8;
    localStorage.setItem('coun9', count9);
});