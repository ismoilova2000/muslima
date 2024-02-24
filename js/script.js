// let surname = 'Valiev'
// const name = 'Abbos'

// surname = 'Bakirov'

// console.log(surname);

// for(let i = 0; i < 10; i++){
//     console.log('hello');
// }

// let a = 10
// let b = 20



// if (a < b) {
//     alert('Hello!')
// } else {
//     alert('Bye bye!')
// }


let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')

burger.addEventListener('click', () => {
    menu.classList.toggle('open')  
}
)

let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let clear = document.querySelector('.clear')
let box = document.querySelector('.box') 

btn1.addEventListener('click', () => {
    box.classList.toggle('foto1')  
}
)

btn2.addEventListener('click', () => {
    box.classList.toggle('foto2')  
}
)

btn3.addEventListener('click', () => {
    box.classList.toggle('foto3')  
}
)

btn4.addEventListener('click', () => {
    box.classList.toggle('foto4')  
}
)

clear.addEventListener('click', () => {
    box.classList.remove('foto1', 'foto2', 'foto3', 'foto4')  
   
}
)