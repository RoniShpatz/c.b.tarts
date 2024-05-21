const problem = document.getElementById("problem");
const solution = document.getElementById("solution");
const submitProblem = document.getElementById("submit-sproblem");
const addSolution = document.getElementById("add-solution");
const wheelParent = document.getElementById("wheel");
const btnSpin = document.getElementById("spin-btn");
const finalValeu = document.getElementById("final-valeu");
const rotationValues = [
    {minDegree: 0, maxDegree: 30, value: 2},
    {minDegree: 31, maxDegree: 90, value: 1},
    {minDegree: 91, maxDegree: 150, value: 2},
    {minDegree: 151, maxDegree: 210, value: 2},
    {minDegree: 211, maxDegree: 270, value: 2},
    {minDegree: 271, maxDegree: 30, value: 2},
    {minDegree: 0, maxDegree: 30, value: 2},
];
let arryOfSolutions = [];



function addSolutionToWheel() {
    const text = solution.value
    if(text) {
        const solutionChild = document.createElement("div");
        const newSolutionText = document.createTextNode(text);
        solutionChild.appendChild(newSolutionText);
        wheelParent.appendChild(solutionChild);
        solution.value = "";
        arryOfSolutions = document.querySelectorAll(`#wheel div`)
        console.log(arryOfSolutions)
    }
}




addSolution.addEventListener("click", addSolutionToWheel)