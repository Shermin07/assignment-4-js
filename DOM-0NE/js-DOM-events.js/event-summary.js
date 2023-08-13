function handleOnClick(){
    const learn = document.getElementById("learn");
    learn.innerText = "i am almost learn";
    document.body.style.backgroundColor = 'red';
}

// 2::addeventlistener::

document.getElementById("btn-two").addEventListener('click', function(){
    const headingTwo = document.getElementById('heading-two');
    headingTwo.innerText = "addEventListener";
    document.body.style.backgroundColor = "green";
})

// 3::: input box a likhe button click korle p er text change hobe::

document.getElementById('btn-update').addEventListener('click',function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
     const p = document.getElementById('text-display');
     p.innerText = inputText;
     inputField.value = ' ';
})