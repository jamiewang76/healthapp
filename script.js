var i = 0;
var txt = 'We are here to help:)';
var speed = 50;

let mylogo = document.getElementById('intro');
let element = document.getElementById('sampleimg');
let words = document.getElementById('brief');
function textin(x){
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(textin, speed);
  }
  mylogo.classList.toggle('fade');
}
function reveal(x){
  console.log("reveal");
  element.classList.toggle('fade');
  brief.classList.toggle('fade');
}
function hide(x){
  console.log("hide");
  element.classList.toggle('fade');
  brief.classList.toggle('fade');
}
function sign(){
  document.location.href = "index2.html";
}
