// let myname = 'Muslima'

// const surname = 'Ismoilova'

// console.log(surname);


// let number = '2222' //string
// let number2 = 2222 //number 
// let isChecked = true 
// let item = null 
// let email = undefined

// console.log(typeof(email));

// let a = 10
// let b = 10

// let c = 5
// let d = 8 

// console.log(true || false);



// console.log(prompt('what is your name'))

// let vopros = prompt('what is your name')

// if (vopros == 'Muslima') {
//    alert ('имя введено верно') 
// } else {
//     alert('имя введено неверно')
// }

const question = prompt('how old are you')

if(question > 55) {
    console.log('you are actually a grandfather')
} else if(question > 18) {
    console.log('you are over 18')
} else if(question < 5) {
    console.log('you are a child')
} else if (question == '0') {
   console.log ('you have not been born yet')
}