let number =document.getElementById("number");

control=document.getElementById("button");

let guess=Math.round(Math.random()*100);
document.getElementById("demo").innerText=guess
control.addEventListener("click",()=>{
    if(number.value<guess){
        document.getElementById("demo1").innerHTML=(`${number.value} girdin.daha büyük`)
    }
    else if (number.value>guess){
        document.getElementById("demo1").innerHTML=(`${number.value} girdin.daha kucukk`)
    }
   
  else {document.getElementById("demo1").innerHTML=(`buldun`)}
})