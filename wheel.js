
const spinBtn =  document.querySelector('.spin-btn');
const wheel = document.querySelector('.wheel-container .wheel');
const addBtn = document.querySelector('#add-solution');
const resetSolution = document.querySelector('#reset-solution');
const submitProblem = document.querySelector('#submit-sproblem');
const resetProblem = document.querySelector('#reset-problem');
const textParens = document.querySelector('.wheel .text');
const solution = document.querySelector('#solution');
const problem = document.querySelector('#problem');
const textRotation = document.querySelectorAll("#text");
const theProblem = document.querySelector("#the-problem");
const timeOut = document.querySelector(".timeOut");
const solutionShow = document.querySelector("#final-value p")

let finalValue = document.querySelector("#final-value");

let slutionsBtns = [];
let arryOfSolutions = [];




function divideWheel() {
            let rotationDeg = Math.floor(360 / arryOfSolutions.length);
           
            textParens.innerHTML = "";
            
            arryOfSolutions.forEach((currentSolution,index) => {
                
                let newSpan = document.createElement("span");
                if ( arryOfSolutions.length === 1) {
                    newSpan.style.setProperty('visibility', 'hidden');
                } else {
                    newSpan.style.setProperty('transform', `rotate(${rotationDeg / 2}deg)`);
                }
                let textNewDiv = document.createElement("div");
                let textPara = document.createElement("p");
                let divText = document.createElement("div");
                
              
                textPara.innerHTML = currentSolution;
                textPara.classList.add("solutions");
                divText.appendChild(textPara)

                textNewDiv.style.setProperty("--i",index);
                textNewDiv.style.setProperty('transform', `rotate(calc(${rotationDeg}deg * var(--i)))`);
               
                textNewDiv.appendChild(divText);
                textNewDiv.appendChild(newSpan);
               
                textParens.appendChild(textNewDiv);

            
                
            }); 
            slutionsBtns = document.querySelectorAll(".solutions");
            let targetValeu = document.getElementById("img-solution");
            console.log(slutionsBtns)
            slutionsBtns.forEach((slutionsBtn,index) => {
                slutionsBtn.addEventListener("click", () => {
                    solutionShow.innerHTML = slutionsBtn.innerHTML;
                   targetValeu.scrollIntoView({ behavior: 'smooth' });
                })
            })
        }

  addBtn.addEventListener("click", () => {
        let newSolution = solution.value;
        if (newSolution) {
            arryOfSolutions.push(newSolution);
            solution.value = "";
            divideWheel();
            setTimeout(() => {
                timeOut.style.opacity = "1";
            }, 5000);
        }; 
   
    });



spinBtn.addEventListener("click", () => {
    let value = Math.ceil(Math.random() * 3600);
    wheel.style.transform = "rotate(" + value + "deg)";
   
});

resetSolution.addEventListener("click", () => {
    solution.value = "";
});

submitProblem.addEventListener("click", () => {
    theProblem.innerHTML = `The Solutorin to ${problem.value} is :`;
    problem.value = "";

})

resetProblem.addEventListener("click", () => {
    problem.value = "";
})



