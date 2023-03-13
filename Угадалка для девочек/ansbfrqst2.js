const NodeCounter = document.querySelector('.counter')
const correctBtn = document.querySelector('.correct-ans')
const wrongBtn = document.querySelector('.wrong-ans')
let ansg2 = localStorage.getItem("count2");
NodeCounter.innerText = ansg2;

correctBtn.addEventListener('click', () =>{
    ansg2++;
    NodeCounter.innerText = ansg2;
    var count3 = ansg2;
    localStorage.setItem('coun3', count3);
});

wrongBtn.addEventListener('click', () =>{
    ansg2--;
    NodeCounter.innerText = ansg2;
    var count3 = ansg2;
    localStorage.setItem('coun3', count3);
});