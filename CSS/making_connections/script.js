
var requestSpan = document.querySelector("#request");
var connnectionSpan = document.querySelector("#connections");
var username = document.querySelector("#username");


function accept(id){
    var element =document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
    connnectionSpan.innerText++;
} 

function ignore(id){
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
} 

function edit() {
    username.innerText = "John Doe";
}