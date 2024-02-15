// const startingMin = 10;
// let time = startingMin*60;

// const countdownEl = document.querySelector("timer");

// setInterval(updateCountdown,1000);

// function updateCountdown() {
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;

//     seconds = seconds < 10 ? '0' + seconds : seconds;

//     countdownEl.innerHTML = `$(minutes):$(seconds)`;
//     time--;
// }

var min = 9;
var sec = 60;

setInterval(function(){
    if(min == 0 && sec == 1){
        document.getElementById("timer").innerHTML = "00:00";
    } else {
        sec--;
        if(sec == 0){
            min--;
            sec = 60;
            if(min == 0){
                min = min;
            }
        }
        document.getElementById("timer").innerHTML = min + "  :  " + sec;
    }
}, 1000)

let prop = document.querySelector("cont");
console.log(prop)

// function slideIn() {
//     prop.classList.toggle("slide");
// }

// let timeOut = setTimeout(slideIn(), 15000);



