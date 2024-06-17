const img = document.querySelector("#img");
const divTimer = document.querySelector(".calm-img-container");
const inputGender = document.querySelectorAll('input[name="gender"]');
const starBtn = document.querySelector('#start-span');
const stopBtn = document.querySelector('#stop-span');
const pickGender = document.querySelector("#choose");
const time = document.querySelector("#time");

const startBtnSmall = document.querySelector("#start-span-small")
const stopBtnSmall = document.querySelector("#stop-span-small")

const imagesMale = ["./images/boy-in.png", "./images/boy-out.png"];
const imagesFemale = ["./images/girl-in.png", "./images/girl-out.png"];
const santance = ["Breath in...", "Breath out..."]

const timer = document.createElement("div");
const para = document.createElement("p");


let currntIndex = -1;

timer.appendChild(para);
timer.classList.add("timer");
console.log(inputGender)

function getSelectorValue() {
    let value = "";
    inputGender.forEach(input => {
        if(input.checked) {
            value = input.value;
        }

    }); return value;
}

let intervalId
let intervalTime

function changeImage(array) {
    clearInterval(intervalTime);
    if (array !== undefined) {
        currntIndex = (currntIndex + 1) % array.length;
        img.src = array[currntIndex]
       
        para.textContent = santance[currntIndex];
        divTimer.appendChild(para);
        startTimer(10);
       
    }
  
}


function startTimer(duration) {
    clearInterval(intervalTime);
    var timer = duration, seconds;
    intervalTime = setInterval(function() {
        seconds = parseInt(timer%60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;

        time.textContent =  seconds;
        if (--timer < 0) {
            timer = 0;
            clearInterval(intervalTime );
            time.textContent = "00";
           
        }
    }, 1000);
}

starBtn.addEventListener("click", () => {
    let gender = getSelectorValue();
    clearInterval(intervalId);
    clearInterval(intervalTime);
    currntIndex = -1;
    if (gender) {
        time.style.display = "inline";
        pickGender.textContent = "Choose gender and press start.";
        if(gender === "male") {
            img.src = imagesMale[0];
            intervalId = setInterval(() => {changeImage(imagesMale)}, 10000);
            changeImage(imagesMale);
        } else if (gender === "female"){
            img.src = imagesFemale[0];
            intervalId = setInterval(() => {changeImage(imagesFemale) }, 10000);
            changeImage(imagesFemale);
        }
    } else {
        pickGender.textContent = "Pick gender and than press start."
    }
 
})

stopBtn.addEventListener("click", () => {
    clearInterval(intervalTime);
    clearInterval(intervalId);
    time.textContent = "";
    img.src = "./images/both.png" ;
    para.textContent = "";
    time.style.display = "none";
   
    
})

startBtnSmall.addEventListener("click", () => {
    let gender = getSelectorValue();
    clearInterval(intervalId);
    clearInterval(intervalTime);
    currntIndex = -1;
    if (gender) {
        time.style.display = "inline";
        pickGender.textContent = "Choose gender and press start.";
        if(gender === "male") {
            img.src = imagesMale[0];
            intervalId = setInterval(() => {changeImage(imagesMale)}, 10000);
            changeImage(imagesMale);
        } else if (gender === "female"){
            img.src = imagesFemale[0];
            intervalId = setInterval(() => {changeImage(imagesFemale) }, 10000);
            changeImage(imagesFemale);
        }
    } else {
        pickGender.textContent = "Pick gender and than press start."
    }
 
});

stopBtnSmall.addEventListener("click", () => {
    clearInterval(intervalTime);
    clearInterval(intervalId);
    time.textContent = "";
    img.src = "./images/both.png" ;
    para.textContent = "";
    time.style.display = "none";
   
})
