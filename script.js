// Functionality yet to be added : add a button to return back to default black color

var size = 16;
var percent = (1/size)*100 + '%';
var rainbow = false;
var gradual = false;
change_size();

function getSize(){
    reset();
    size = prompt('Enter the new size:');
    if(size === null){size = 16;}
    percent = (1/size)*100 + '%';
    change_size();
}

function reset(){
    const chequers = document.querySelectorAll('.chequer');
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
    else if(gradual){
        chequers.forEach(square => square.addEventListener('mouseover',gradualHover));
    }
    else{
        chequers.forEach(square => square.addEventListener('mouseover',hover));
    }
}

function hover(event){
    this.classList.add('hover');
}

function gradualHover(event){
    this.classList.add('hover');
    let opacityValue = this.style.opacity;
    if(opacityValue < 1){
        opacityValue=Number(opacityValue)+0.1;
        this.style.opacity = opacityValue;
    }
}

function toggleRainbow(){
    rainbow = !rainbow;
    if(gradual){gradual=false;}
    reset();
    change_size();
}

function toggleGradual(){
    gradual = !gradual;
    if(rainbow){rainbow = false;}
    reset();
    change_size();
}

function hoverRainbow(e){
    let color = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = '#' + color;
}

const size_button = document.querySelector('.size');
size_button.addEventListener('click', getSize);

const rainbowButton = document.querySelector('.rainbow');
rainbowButton.addEventListener('click',toggleRainbow);

const shading = document.querySelector(".gradual");
shading.addEventListener('click',toggleGradual);