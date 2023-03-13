const NodeCounter = document.querySelector('.counter')
const correctBtn = document.querySelector('.correct-ans')
const wrongBtn = document.querySelector('.wrong-ans')
let ansg10 = localStorage.getItem("count10");
NodeCounter.innerText = ansg10;

correctBtn.addEventListener('click', () =>{
    ansg10++;
    NodeCounter.innerText = ansg10;
    var count11 = ansg10;
    localStorage.setItem('count11', count11);
});

wrongBtn.addEventListener('click', () =>{
    ansg10--;
    NodeCounter.innerText = ansg10;
    var count11 = ansg10;
    localStorage.setItem('count11', count11);
});

