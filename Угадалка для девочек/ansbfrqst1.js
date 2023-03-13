const NodeCounter = document.querySelector('.counter')
const correctBtn = document.querySelector('.correct-ans')
const wrongBtn = document.querySelector('.wrong-ans')
let anspg1 = localStorage.getItem("count");
NodeCounter.innerText = anspg1;

correctBtn.addEventListener('click',() => {
    anspg1 ++;
    NodeCounter.innerText = anspg1;
    var count2 = anspg1;
    localStorage.setItem('count2', count2);
})


wrongBtn.addEventListener('click',() => {
    anspg1 --;
    NodeCounter.innerText = anspg1;
    var count2 =anspg1;
    localStorage.setItem('count2', count2);
})