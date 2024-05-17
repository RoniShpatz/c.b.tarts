const hill1 = document.getElementsByClassName("hill-1");
const kid = document.getElementsByClassName("kid-medi");
const hill2 = document.getElementsByClassName("hill-2");
const hill3 = document.getElementsByClassName("hill-3");
const hill4 = document.getElementsByClassName("hill-4");

const options = {
    root: null,
    rooMargin: `0px`,
    threshhold: 0.5
};

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            // console.log("its in")
            hill1[0].classList.add("hill-1-in");
            kid[0].classList.add("hill-1-in");
            hill2[0].classList.add("hill-1-in");
            hill3[0].classList.add("hill-2-in");
            hill4[0].classList.add("hill-2-in");
           
            observer.unobserve(entry.target)
           
        }
    });
}

const observer = new IntersectionObserver(callback, options);

const targetElement = document.getElementById("in-view-port");

observer.observe(targetElement);