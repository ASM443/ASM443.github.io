const observer = new IntersectionObserver((x) => {
    x.forEach((y) => {
        if (y.isIntersecting){
            y.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll('.project_border, .about' );
hiddenElements.forEach((xx) => observer.observe(xx));