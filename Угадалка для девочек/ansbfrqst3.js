const NodeCounter = document.querySelector('.counter')
const correctBtn = document.querySelector('.correct-ans')
const wrongBtn = document.querySelector('.wrong-ans')
let ansg3 = localStorage.getItem("coun3");
NodeCounter.innerText = ansg3;

correctBtn.addEventListener('click', () =>{
    ansg3++;
    NodeCounter.innerText = ansg3;
    var count4 = ansg3;
    localStorage.setItem('coun4', count4);
});

wrongBtn.addEventListener('click', () =>{
    ansg3--;
    NodeCounter.innerText = ansg3;
    var count4 = ansg3;
    localStorage.setItem('coun4', count4);
});