const textArea = document.querySelectorAll(".river-part-2 textarea")[0];
const submit = document.getElementsByClassName("submit")[0];
const divParent = document.getElementsByClassName("river-bkg")[0];
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



