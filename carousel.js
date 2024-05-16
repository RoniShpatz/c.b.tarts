// carousel code 

const carousel = document.querySelector(".games-grid");
const firstImage = carousel.querySelectorAll("div")[0];
const arrowBtns = document.querySelectorAll(".btn-caruael-games button");

let isDragdStart = false, prevPageX, PrevScrollLeft;
let firstImageWidth = firstImage.clientWidth + 10 ;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const dragStart = (e) => {
      isDragdStart = true;
      prevPageX = e.pageX;
      PrevScrollLeft = carousel.scrollLeft
}

const dragging = (e) => {
    if (!isDragdStart) {
        return;
    }
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = PrevScrollLeft - positionDiff;
    carousel.classList.add("dragging");
    showHideBtn()
    
}


function showHideBtn() {
    if (carousel.scrollLeft == 0) {
        arrowBtns[0].style.visibility = "hidden";
    } else {
        arrowBtns[0].style.visibility = "visible";
    }
    if (carousel.scrollLeft == scrollWidth) {
        arrowBtns[1].style.visibility = "hidden";
    } else {
        arrowBtns[1].style.visibility = "visible";
    }
}

const dragStop = ()=> {
    isDragdStart = false
    carousel.classList.remove("dragging");
}
arrowBtns.forEach( btn => {
    btn.addEventListener("click", () => {
        if (btn.id === "left") {
            carousel.scrollLeft -= firstImageWidth;
            setTimeout( () =>showHideBtn(), 60 ) ;
        } else {
            carousel.scrollLeft += firstImageWidth
            setTimeout( () =>showHideBtn(), 60 ) ;
        }
    })
})



carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);

