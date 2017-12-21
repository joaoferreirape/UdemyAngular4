// Declarações de variáveis padrão
let typeAny: any
let typeBoolean: boolean
let typeString: string
let typeNumber: number
let typeArray: Array<number>

// Declarações de variáveis do curso
let message: string = "Help-me, Obi-Wan Kenobi. You're my only hope!"
console.log(message)

let episode: number = 4
// episode = '4'
console.log("This is episode " + 4)
episode = episode + 1
console.log("Next episode is " + episode)

let favoriteDroid
favoriteDroid = 'BB-8'
favoriteDroid = 10
console.log("My favorite droid is " + favoriteDroid)

// Parte de funções
let isEnoughtoBeatMF = function (parsecs: number) : boolean {
  return parsecs < 12
}
let distance = 11
console.log(`Is ${distance} parsecs to beat Millenium Falcon? ${isEnoughtoBeatMF(distance) ? 'YES': 'NO'} `)

let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2')

function inc (speed: number, inc: number = 1) : number{
  return speed + inc
}
console.log(`inc (5, 1) = ${inc(5, 1)}`)
console.log(`inc (5) = ${inc(5)}`)
