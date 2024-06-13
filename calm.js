const img = document.querySelector("#img");
const divTimer = document.querySelector(".calm-img-container");
const inputGender = document.querySelectorAll('input[name="gender"]');
const starBtn = document.querySelector('#start-span');
const stopBtn = document.querySelector('#stop-span');
const pickGender = document.querySelector("#choose")

const imagesMale = ["./images/boy-in.png", "./images/boy-out.png"];
const imagesFemale = ["./images/girl-in.png", "./images/girl-out.png"];
const santance = ["Breath in...", "Breath out..."]

const timer = document.createElement("div");
const para = document.createElement("p");

let currntIndex = 0;

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


function changeImage(array) {
    if (array !== undefined) {
        currntIndex = (currntIndex + 1) % array.length;
        img.src = array[currntIndex]
        para.textContent = santance[currntIndex];
        divTimer.appendChild(para)
    }
  
}

const intervalBoy = setInterval(changeImage, 5000);

let intervalId

starBtn.addEventListener("click", () => {
    let gender = getSelectorValue();
    clearInterval(intervalId);
    currntIndex = -1;
    if (gender) {
        pickGender.textContent = "Choose gender and press start.";
        if(gender === "male") {
            img.src = imagesMale[0];
            intervalId = setInterval(() => {changeImage(imagesMale)}, 5000);
            changeImage(imagesMale) 
        } else if (gender === "female"){
            img.src = imagesFemale[0];
            intervalId = setInterval(() => {changeImage(imagesFemale)}, 5000);
            changeImage(imagesFemale) 
        }
    } else {
        pickGender.textContent = "Pick gender and than press start."
    }
 
})

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    img.src = "./images/both.png" ;
    divTimer.removeChild(para);
    para.textContent = "";
})


console.log(pickGender)