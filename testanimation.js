

const options = {
    root: null,
    rooMargin: `0px`,
    threshhold: 0.5
};

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            console.log("its in")
            entry.target.classList.add("in")
            observer.unobserve(entry.target)
        }
    });
}

const observer = new IntersectionObserver(callback, options);

const targetElement = document.getElementById("in-view-port");

observer.observe(targetElement);