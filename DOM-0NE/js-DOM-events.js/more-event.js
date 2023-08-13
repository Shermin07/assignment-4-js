document.getElementById("btn-more").addEventListener('mouseenter',function(){
    //console.log("event trigger")

})

// 2 no::: input box a likhle output dibe

document.getElementById("text-field").addEventListener('focus', function(){
   // console.log("trigger inside input field");
})

// 3 no::: input box a likhe button press korle output dibe

document.getElementById("text-field").addEventListener('blur', function(){
    //console.log("trigger blur")
})


// 4 no::::ja likhbo tai first press a dekhabe na,porer ta theke dekhabe, piramid er moto dekhabe
document.getElementById("text-field").addEventListener('keydown', function(event){
    //console.log(event)
   // console.log(event.target);
   console.log(event.target.value);
});


// 5 no:::: ja likhbo ekta kore kom asbe piramid er moto, 
document.getElementById("text-field").addEventListener('keypress', function(event){
   // console.log(event)
    //console.log(event.target);
   console.log(event.target.value);
});

// 6 no:::: ja likhbo tai asbe piramid er moto, 

document.getElementById("text-field").addEventListener('keyup', function(event){
    // console.log(event)
     //console.log(event.target);
    console.log(event.target.value);
 });
