let guess = document.querySelector(".guess");
let check = document.querySelector(".check");
let message = document.querySelector(".message");
let number = document.querySelector(".number");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let colors = document.querySelector("#colors");

///Reload Page//
function reloadThePage(){
    location.reload();
}


let randm = (( Math.random() * 20 ) + 1);
let runds = Math.round(randm);
console.log(runds);


function plusMinas(){
    let decrement = score.innerHTML;
    let removes = decrement - 1;
    score.innerHTML = removes;
}

function totalwins(){
    let totalwins = highscore.innerHTML;
    let plusPlus = Math.round(totalwins) + 1;
    highscore.innerHTML = plusPlus;
}
function body(){
    body.style.backgroundColor = "red";
}


check.addEventListener("click", function(){
   let inputs = guess.value;
   if(inputs >= 1 && inputs <= 20){
   // message.innerHTML = "I am Right";
    if(runds > inputs){
        message.innerHTML = "To High !";
        plusMinas();
    }else if(runds < inputs){
       message.innerHTML = "To Low !";
       plusMinas();
    }else{
        message.innerHTML = "Correct Number";
        number.innerHTML = runds;
        totalwins();
        colors.style.backgroundColor = "green";
    }
   }else{
    message.innerHTML = "InValied Number";
   }
   console.log(inputs);
});

