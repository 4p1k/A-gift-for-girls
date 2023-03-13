const NodeCounter = document.querySelector('.counter')
const correctBtn = document.querySelector('.correct-ans')
const wrongBtn = document.querySelector('.wrong-ans')
let ansg11 = localStorage.getItem("count11");
NodeCounter.innerText = ansg11;

correctBtn.addEventListener('click', () =>{
    ansg11++;
    NodeCounter.innerText = ansg11;
    var count12 = ansg11;
    localStorage.setItem('count12', count12);
});

wrongBtn.addEventListener('click', () =>{
    ansg11--;
    NodeCounter.innerText = ansg11;
    var count12 = ansg11;
    localStorage.setItem('count12', count12);
});