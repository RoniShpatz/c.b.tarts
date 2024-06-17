const inputRate = document.querySelector(".add-rate");
const submitRate = document.getElementById("submit-add-rade");
const rateCanvas = document.querySelector(".all-rates");
const rullerDivs = document.querySelectorAll(".ruler div");

const whatToRate = document.querySelector(".rate-line-container h2");
const changeH2Div = document.querySelector(".h2-div");
const inputToggle = document.querySelector(".h2-div-input");
const iputH2 = document.querySelector("#input-whatToRate");
const inputH2Submit = document.querySelector("#submit-change-whatToRate");

let toRateAdded = [];
let counter = 1;

function addRate(value) {
    inputRate.value = "";
    const newDivRate = document.createElement("div");
    newDivRate.setAttribute('draggable', 'true');
    newDivRate.setAttribute("id", `div${counter + 1}` )
    const newRate = document.createElement("p");
    newRate.textContent = value;
    newDivRate.appendChild(newRate);
    rateCanvas.appendChild(newDivRate);
    toRateAdded.push(newDivRate);
    console.log(newDivRate);
    counter ++;
}

function addRateAttachListener() {
    const divRateArry = document.querySelectorAll(".all-rates div");
    divRateArry.forEach(div => {
        div.addEventListener("dblclick", () => {
            div.remove();
            toRateAdded = toRateAdded.filter(item => item !== div);
            
        })
        
    })
}

function dragDivRated() {
    const divRateArry = document.querySelectorAll(".all-rates div");
    // mouse event
    divRateArry.forEach(div => {
        div.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData('text/plain', div.id); 
        });
    });

    // toch event
    div.addEventListener("touchstart", (e) => {
        const touch = e.targetTouches[0];
        div.style.position = "absolute";
        div.style.left = `${touch.clientX - div.offsetWidth / 2}px`;
        div.style.top = `${touch.clientY - div.offsetHeight / 2}px`;
        div.classList.add('dragging');
    });

    div.addEventListener("touchmove", (e) => {
        e.preventDefault();
        const touch = e.targetTouches[0];
        div.style.left = `${touch.clientX - div.offsetWidth / 2}px`;
        div.style.top = `${touch.clientY - div.offsetHeight / 2}px`;
    });
    div.addEventListener("touchend", (e) => {
        div.classList.remove('dragging');
        div.style.position = "static";
        const touch = e.changedTouches[0];
        const dropZone = document.elementFromPoint(touch.clientX, touch.clientY);
        if (dropZone && dropZone.classList.contains("drop-zone")) {
            dropZone.appendChild(div);
        }
    });

    rullerDivs.forEach(dropDiv => {
        dropDiv.addEventListener('dragover', (e) => {
            e.preventDefault(); 
        });

        dropDiv.addEventListener('drop', (e) => {
            e.preventDefault();
            const data = e.dataTransfer.getData('text/plain');
            const draggedDiv = document.getElementById(data);
            dropDiv.appendChild(draggedDiv);
        });
    });
}


function changeH2(value) {
    whatToRate.textContent = value;
    whatToRate.style.display = "inline-block";
    isDisplay = false;
    iputH2.value = "";
}


submitRate.addEventListener("click", () => {

    if (inputRate.value) {
        addRate(inputRate.value);
        addRateAttachListener();
        dragDivRated();
    }
 
});

let isDisplay = false;
inputToggle.style.display = "none";

whatToRate.addEventListener("click", () => {
    whatToRate.style.display = "none";
    inputToggle.style.display = "inline-block";
    isDisplay = true;
});


inputH2Submit.addEventListener("click", () => {
    let value = iputH2.value;
    if (value) {
        changeH2(value);
        inputToggle.style.display = "none";  
    }
})


