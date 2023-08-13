function makeRed(){
    document.body.style.backgroundColor = 'red';
}

//4
const makeButttonBlue = document.getElementById("make-blue");
makeButttonBlue.onclick =makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = "blue";
}

// 4 another:
const makeButttonPurple = document.getElementById("make-purple");
makeButttonPurple.onclick = function makePurple(){
    document.body.style.backgroundColor = "purple";
}

//5 no::addeventlistener:::
const makeButttonPink = document.getElementById("make-pink");
makeButttonPink.addEventListener('click',makePink)
function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// 5 another:::
const makeGreen = document.getElementById("make-green");
makeGreen.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = "green";
})
