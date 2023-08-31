const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset=document.querySelector("#reset");
let interval;

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

let changecolor=function (){

    if(!interval){
   interval=setInterval(function(){
        const randomCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        document.body.style.backgroundColor = randomCol;
},500)}

}


start.addEventListener("click", changecolor);

stop.addEventListener("click", ()=>{
    clearInterval(interval);
    interval=null;
});
reset.addEventListener('click',()=>{
    clearInterval(interval);
    document.body.style.backgroundColor="#ffffff"
})