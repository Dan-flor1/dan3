let sum = 0;

for(let i=1; i<=100;i++)
{
    sum=sum+i;
}
//alert("Answer = " + sum);
//console.log("Answer = " + sum);
let answer = document.querySelector('p'); //Answer will refer to the p tag in hte HTML document
answer.innerHTML = "Answer = " + sum;//change the innerHTML of the <p>
