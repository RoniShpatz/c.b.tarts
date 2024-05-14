class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class = "header ">
                <div class="headre-left">
                    <a href="./about.html">About C.B.T</a>
                    <a href="./tests.html">Test</a>
                    <a href="./games.html">Games</a>
                </div>
                <div class="logo-div">
                    <a href="index.html"> <img src="./images/logo copy.png"></a>
                </div>
                <div class="header-right">
                    <a href="./aboutme.html">About Me</a>
                </div>
            </header>
       
        `
        }
    }


customElements.define(`my-header`, MyHeader);

let isScroll = false;

addEventListener("scroll", (event) => {
    if (isScroll) {
       var element = document.getElementsByClassName("header");
       element.classList.add("box-header")
    }
    isScroll = true;
    console.log(isScroll)
})