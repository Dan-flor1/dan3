let nwg =document.querySelector("#newGame");
let ent = document.querySelector("#enter");
let input = document.querySelector("#letter");
let alfa = document.querySelector("#alfa");

nwg.addEventListener("click" ,newgame);
ent.addEventListener("click", enter);
alfa.addEventListener("click",alfabet);

function newgame()
{
    alert("works!");
}
function enter()
{
    alert("works too!");
}
function alfabet()
{
    alert("letter");
}