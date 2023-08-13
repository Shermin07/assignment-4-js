//getElementByTag:::

const headings1 = document.getElementsByTagName("h1")[0];
headings1.innerHTML = "hi there";
headings1.style.color = "red";

const headings2 = document.getElementsByTagName("h2")[0];
headings2.innerHTML = "hi finland"

const headings3 = document.getElementsByTagName("h3")[0];
headings3.innerHTML = "hiiiiiii";

// getElementById:::

const fruit = document.getElementById("mango");
fruit.innerHTML = "watermelon";
fruit.style.color = "green"

 document.getElementById("visit").innerText = "places i want to visit";


//  getElementsByClass:::






// querySelector::

document.querySelector("a").innerText = "visit youtube";
document.querySelector("a").style.color= "red";
document.querySelector("li a").innerText = "tutorial-first";
document.querySelector("div a").innerText = "visit GOOGLE"
document.querySelector("div a").style.color = "green"

// querySelectorAll:::::


const sections = document.querySelectorAll("section");
for(const section of sections){
    section.style.border = "2px solid blue";
    section.style.padding = "5px"
}