alert("it is loaded");
let btn = document.querySelector('#myButton');
let input = document.querySelector("#input1");
let chose =document.querySelector('#chose');

btn.addEventListener("click",button_clicked);

function button_clicked()
{
    alert(input.value);
    chose.textContent= input.value+""+ chose.textContent;
    input.value = "";
    
}