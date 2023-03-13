const NodeCounter = document.querySelector('.counter')
const correctBtn = document.querySelector('.correct-ans')
const wrongBtn = document.querySelector('.wrong-ans')
let ansg5 = localStorage.getItem('coun5')
NodeCounter.innerText = ansg5;

correctBtn.addEventListener('click', () =>{
    ansg5 ++;
    NodeCounter.innerText = ansg5;
    var count6 = ansg5;
    localStorage.setItem('coun6', count6);
})

wrongBtn.addEventListener('click', () =>{
    ansg5 --;
    NodeCounter.innerText = ansg5;
    var count6 = ansg5;
    localStorage.setItem('coun6', count6);
});