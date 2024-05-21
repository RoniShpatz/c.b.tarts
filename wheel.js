const problem = document.getElementById("problem");
const solution = document.getElementById("solution");
const submitProblem = document.getElementById("submit-sproblem");
const addSolution = document.getElementById("add-solution");
const wheelParent = document.getElementById("wheel");
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