const textArea = document.querySelectorAll(".river-part-2 textarea")[0];
const submit = document.getElementsByClassName("submit")[0];
const divParent = document.getElementsByClassName("river-bkg")[0];
const startBtn = document.querySelector(".start");
const time = document.getElementById("time-river");
const timeContainer = document.getElementsByClassName("river-part-2");
let divChildren = [];

function addThought(value) {
    const divChild = document.createElement("div");
    const thought = document.createTextNode(value);
    divChild.appendChild(thought);
    divParent.appendChild(divChild);
    var newDiv = document.querySelectorAll(".river-bkg div");
    divChildren = newDiv;
    // console.log(divCildren)
}

function attachEventListner(){
    divChildren.forEach(div => {
        div.addEventListener("click", ()=> {
            div.remove();
            divChildren = Array.from(divChildren).filter(child => child !== div);
            console.log(divChildren);
        })
    })
}

submit.addEventListener("click", () => {
    let value = textArea.value
    if (value) {
        addThought(value)
        attachEventListner();
    }
    textArea.value = "";
})



function deleteOutDivs() {
    if (divChildren){
        divChildren.forEach( div => {
            const rect = div.getBoundingClientRect();
            if(
                rect.bottom < 0 || 
                rect.right < 0 || 
                rect.left > window.innerWidth || 
                rect.top > window.innerHeight
            ) {
                div.remove();
                divChildren =  Array.from(divChildren).filter(child => child !== div);
                console.log(divChildren);
            }
        })
    }

}

setInterval(deleteOutDivs, 1000);

let isStart = false;
let intevalTime;
let massageShown = false;

function startTimer(duration) {
    var timer = duration, minutes, seconds;
    intevalTime = setInterval(function() {
        minutes = parseInt(timer/60, 10);
        seconds = parseInt(timer%60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       time.innerHTML =  minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            if(!massageShown) {
                let timesUp = document.createElement("p");
                timesUp.innerHTML = "Look at them goooo"
                timeContainer[0].appendChild(timesUp);
                massageShown = true;
            }
            
        }
    }, 1000);
}



startBtn.addEventListener("click", () => {
    if (!isStart) {
      
        isStart = true;
        let time = 120 / 2;
        startTimer(time);
        
    } else {
        clearInterval(intevalTime);
        time.innerHTML = "00:00"
        isStart =false;
       
        
    }
});

