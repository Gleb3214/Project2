/* document.getElementById("")
document.getElementsByClassName("")
var a = document.querySelector("")
document.querySelectorAll("")
document.getElementsByTagName("") */

document.getElementById("burger").onclick = function(){
    openCloseMenu()
};

function openCloseMenu(){
    document.getElementById("menu").classList.toggle("open");
}
