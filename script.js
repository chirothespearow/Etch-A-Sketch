
var size = 16;
var percent = (1/size)*100 + '%';
var rainbow = false;
change_size();

function getSize(){
    reset();
    size = prompt('Enter the new size:');
    percent = (1/size)*100 + '%';
    console.log(size);
    change_size();
}

function reset(){
    const chequers = document.querySelectorAll('.chequer');
    console.log(chequers);
    chequers.forEach(chequer => chequer.remove());

}

function change_size(){
    for (let i = 0; i< (size*size) ; i++){
        const chequer = document.createElement('div');
        chequer.classList.add('chequer');
        chequer.style.height = percent ;
        chequer.style.width = percent ;
        document.querySelector('.container').appendChild(chequer); 
    }
    const chequers = document.querySelectorAll('.chequer');
    chooseMode(chequers);

}

function chooseMode(chequers){
    if(rainbow){
        chequers.forEach(square => square.addEventListener('mouseover',hoverRainbow));
    }
    else{
        chequers.forEach(square => square.addEventListener('mouseover',hover));
    }
}

function hover(event){
    this.classList.add('hover');
}


function toggleRainbow(){
    rainbow = !rainbow;
    reset();
    change_size();
}

function hoverRainbow(e){
    let color = Math.floor(Math.random()*16777215).toString(16);
    console.log(color);
    this.style.backgroundColor = '#' + color;
}

const size_button = document.querySelector('.size');
size_button.addEventListener('click', getSize);

const rainbowButton = document.querySelector('.rainbow');
rainbowButton.addEventListener('click',toggleRainbow);