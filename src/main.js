import './style.css'

const navbar = document.querySelector("#navbar");

const menuBtn = document.querySelector("#menuBtn");

const mobileMenu = document.querySelector("#mobileMenu");



window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add(

            "bg-white",

            "shadow-xl",

            "backdrop-blur",

            "border-b",

            "border-slate-200",

            "scrolled",

        );

    } else {

        navbar.classList.remove(

            "bg-white",

            "shadow-xl",

            "backdrop-blur",

            "border-b",

            "border-slate-200",

            "scrolled",


        );

    }

});



menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

});



mobileMenu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");

    });

});


// reveal

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:.15
});

reveals.forEach(section=>{

revealObserver.observe(section);

});

// counter
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter = entry.target;

const target = +counter.dataset.target;

let current = 0;

const step = target / 80;

const update = ()=>{

current += step;

if(current < target){

counter.textContent = Math.floor(current);

requestAnimationFrame(update);

}else{

counter.textContent = target.toLocaleString()+"+";

}

};

update();

counterObserver.unobserve(counter);

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

// scroll







