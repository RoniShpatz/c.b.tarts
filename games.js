const ball = document.getElementsByClassName("games-ball");
const shadow = document.getElementsByClassName("shadow");
// console.log(ball)


const options = {
    root: null,
    rooMargin: `0px`,
    threshhold: 0.5
};

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            // console.log("its in")
            ball[0].classList.add("games-ball-animation");
            shadow[0].classList.add("ball-shadow");
           
            observer.unobserve(entry.target)
           
        }
    });
}

const observer = new IntersectionObserver(callback, options);

const targetElement = document.getElementById("in-view-port");

observer.observe(targetElement);


const buttons = document.querySelectorAll(".games-choose-container div");




buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
        buttons.forEach(btn => {
            btn.style.filter = "saturate(0%)";
        });
        button.style.filter = "saturate(100%)";
    });

    button.addEventListener("mouseout", () => {
       
        buttons.forEach(btn => {
            btn.style.filter = "saturate(100%)";
        });
    });
});

   

