
const setBgColor = (color) => {
    document.querySelector('.js-main').style.background = color;
}

document.querySelector('.js-red')
    .addEventListener('click', (event) => {
        event.target.classList.add('active');
        setBgColor('red'); 
        document.querySelector('.js-white').classList.remove('active');
    })

document.querySelector('.js-white')
    .addEventListener('click', (event) => {
        event.target.classList.add('active')
        setBgColor('white')
        document.querySelector('.js-red').classList.remove('active')
    });
/*
document.querySelector('.js-red').addEventListener('click', (event) => { 
    document.querySelector(".js-red").classList.add("active");
    document.querySelector(".js-white").classList.remove("active");
})
document.querySelector('.js-white').addEventListener('click', (event) => {     
        document.querySelector(".js-red").classList.remove("active");
        document.querySelector(".js-white").classList.add("active");

})

*/