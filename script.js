class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class = "header ">
               
                <div class="logo-div">
                <a href="index.html"> <img src="./images/logo copy.png" id="logo-small"></a>
            </div>
            <div class="header-bar">
                <div class="headre-left">
                    <a href="./about.html">About C.B.T</a>
                    <a href="./tests.html">Test</a>
                    <a href="./games.html">Games</a>
                </div>
                <div class="header-right">
                    <a href="./aboutme.html">About Me</a>
                </div>
            </div>
            </header>
       
        `
        }
    }


customElements.define(`my-header`, MyHeader);


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="features-container">
                    <div class="features">
                        <p>Features</p>
                        <a href="./about.html">About C.B.T</a>
                        <a href="./tests.html">Tests</a>
                        <a href="./games.html">Games</a>
                        <a href="./aboutme.html">About Me</a>
                    </div>
                    <div class="tests">
                        <p>Tests</p>
                        <a href="#">Your Mental <br>Health test</a>
                        <a href="#">Emotional <br> StabilityTest </a>
                    </div>
                    <div class="games-footer">
                        <p>Games</p>
                        <a href="#">River of <br>Thoughts</a>
                        <a href="#">What's that<br> Emotion</a>
                        <a href="#">Wheel of <br>Solutions</a>
                    </div>
                </div>
                <div class="social-container">
                        <div class="facebook">
                            <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
                            <dotlottie-player src="https://lottie.host/777896c4-c562-4671-b26a-35719d31d7fb/HER4F9EBZm.json" background="transparent" speed="1" 
                            style="width: 70px; height: 70px;" playMode="normal" loop hover></dotlottie-player>
                        </div>
                        <div class="instegram">
                            <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
                            <dotlottie-player src="https://lottie.host/45b8c53b-854a-42f5-a08a-81f12d80c4ad/Cd556PSPHE.json" background="transparent" 
                            speed="1" style="width: 70px; height: 70px;"  playMode="normal" loop hover></dotlottie-player>
                        </div>
                            <div class="tiktok">
                                <a href="#"><script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

                                <dotlottie-player src="https://lottie.host/11136408-053f-4622-93d8-bb068f47502e/mKiGqXHh2Y.json" background="transparent" speed="1" 
                                style="width: 70px; height: 70px;"playMode="normal" loop hover></dotlottie-player></a>
                        </div>
                    </div>
            </footer>
            `
            }
        }


customElements.define(`my-footer`, MyFooter);


addEventListener("scroll", (event) => {
    var target = document.getElementById("big-logo").getBoundingClientRect();
    var addClass = document.getElementsByClassName("header-bar")[0];
    var addLogo = document.getElementById("logo-small");
    
    if (target.top < 54) {
        addClass.classList.add("box-header");
        addLogo.style.opacity = "1";
    
    } else if (target.top > 54) {
        addClass.classList.remove("box-header")
        addLogo.style.opacity = "0";
    }
});

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

