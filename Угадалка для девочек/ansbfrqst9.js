const NodeCounter = document.querySelector('.counter')
const correctBtn = document.querySelector('.correct-ans')
const wrongBtn = document.querySelector('.wrong-ans')
let ansg9 = localStorage.getItem("coun9");
NodeCounter.innerText = ansg9;

correctBtn.addEventListener('click', () =>{
    ansg9++;
    NodeCounter.innerText = ansg9;
    var count10 = ansg9;
    localStorage.setItem('count10', count10);
});

wrongBtn.addEventListener('click', () =>{
    ansg9--;
    NodeCounter.innerText = ansg9;
    var count10 = ansg9;
    localStorage.setItem('count10', count10);
});