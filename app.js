let count = 0;
let val = document.querySelector('#value');

document.addEventListener('click',function (event){
    if(event.target.classList.contains('increase')){
        count += 1;
    }

    if(event.target.classList.contains('decrease')){
        count -= 1;
    }

    if(event.target.classList.contains('reset')){
        count = 0;
    }

    if(count > 0 ){
        val.style.color = 'green';
    }
    if(count < 0){
        val.style.color = 'red';
    }
    if(count === 0){
        val.style.color = "#222";
    }

    val.textContent = count;

})