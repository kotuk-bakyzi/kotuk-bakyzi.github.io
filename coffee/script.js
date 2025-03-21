let btnDetails = document.querySelectorAll('.btn-details');
let divAboutCoffee = document.querySelectorAll('.about-coffee');


for (let i = 0; i < btnDetails.length; i++) {
    btnDetails[i].onclick = function () {
        divAboutCoffee[i].style.transform = 'translateY(-100%)'
    }
}
for (let i = 0; i < divAboutCoffee.length; i++) {
    divAboutCoffee[i].onclick = function () {
        divAboutCoffee[i].style.transform = 'translateY(0%)'
    }
}



ScrollReveal().reveal('h1', {
    origin: 'left',
    distance: '1000px',
    duration: 2000,
    reset: true,
})

ScrollReveal().reveal('.p-h1', {
    origin: 'left',
    distance: '500px',
    duration: 2000,
    reset: true,
    interval: 500,

})

ScrollReveal().reveal('.i-1', {
    origin: 'top',
    distance: '500px',
    duration: 2000,
    reset: true,
    interval: 500,

})


ScrollReveal().reveal('.nav-item', {
    origin: 'top',
    distance: '500px',
    duration: 2000,
    reset: true,
    interval: 500,

})

ScrollReveal().reveal('.sp', {
    origin: 'top',
    distance: '500px',
    duration: 2000,
    reset: true,
    interval: 500,

})

ScrollReveal().reveal('.history-text', {
    origin: 'right',
    distance: '500px',
    duration: 2000,
    reset: true,
    interval: 800,

})

ScrollReveal().reveal('.cup-left', {
    origin: 'left',
    distance: '500px',
    duration: 2000,
    reset: true,
    interval: 800,

})


ScrollReveal().reveal('.cup-right', {
    origin: 'right',
    distance: '500px',
    duration: 2000,
    reset: true,
    interval: 800,

})



ScrollReveal().reveal('.btn-details', {
    origin: 'bottom',
    distance: '500px',
 
    reset: true,
    interval: 800,

})
ScrollReveal().reveal('.h2-g', {
    origin: 'left',
    distance: '500px',
    duration: 2000,
    reset: true,
    interval: 800,

})


let h3more = document.querySelector('.read-more-h3')
let h3min = document.querySelector('.read-min-h3')
let divtext = document.querySelector('.read-more-div')

divtext.style.display='none';
h3more.onclick = function (){
    divtext.style.display = 'block'
}
h3min.onclick = function (){
 divtext.style.display = 'none'
}