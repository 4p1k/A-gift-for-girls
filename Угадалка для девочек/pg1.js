const correctBtn = document.querySelector('.correct-ans')
const wrongBtn = document.querySelector('.wrong-ans')
const NodeCounter = document.querySelector('.counter')
let counter = 0;

NodeCounter.innerText = counter;

correctBtn.addEventListener('click', ()=>{
    counter ++;
    NodeCounter.innerText = counter;
    var count = counter;
    localStorage.setItem('count', count);

    })

wrongBtn.addEventListener('click', ()=>{
    counter --;
    NodeCounter.innerText = counter;
    var count = counter;
    localStorage.setItem('count', count);
    
});

