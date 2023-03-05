console.log("Hello world");
import {pageload} from "/functions/pageload.js";
import {about} from "/functions/about.js";
import {contact} from "/functions/contact.js";

let page = document.getElementById("content");

let option = document.createElement("div");
option.setAttribute("id", "options");
let button1 = document.createElement("button");
button1.innerText = "HOME";
let button2 = document.createElement("button");
button2.innerText = "MENU";
let button3 = document.createElement("button");
button3.innerText = "CONTACT US";
option.append(button1);
option.append(button2);
option.append(button3);
page.append(option);

pageload();

button1.addEventListener("click",()=>{
    page.innerHTML = "";
    page.append(option);
    pageload();
});
button2.addEventListener("click",()=>{
    page.innerHTML = "";
    page.append(option);
    about();
});
button3.addEventListener("click",()=>{
    page.innerHTML = "";
    page.append(option);
    contact();
});