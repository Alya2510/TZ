// ...18 
// let x = prompt('Введите число 1')
// let y = prompt('Введите число 2')
// let z = prompt('Введите число 3')

// let x1 = Number(x)
// let y1 = Number(y)
// let z1 = Number(z)

// if (y1==z1) (
//     console.log(1)
// )
// else if (x1==z1) {
//     console.log(2)
// }
// else {
//     console.log(3)
// }

//...19
// let a = prompt('Введите число 1')
// let b = prompt('Введите число 2')
// let c = prompt('Введите число 3')
// let d = prompt('Введите число 3')

// let a1 = Number(a)
// let b1 = Number(b)
// let c1 = Number(c)
// let d1 = Number(d)

// if (b1==c1 && c1==d1) (
//     console.log(1)
// )
// else if (a1==c1 && c1==d1) {
//     console.log(2)
// }
// else if (a1==b1 && b1==d1) {
//     console.log(3)
// }
// else {
//     console.log(4)
// }


//...20
// let A = prompt('Введите A')
// let B = prompt('Введите B')
// let C = prompt('Введите C')


// let A1 = Number(A)
// let B1 = Number(B)
// let C1 = Number(C)


// if (Math.abs(A1-B1)<Math.abs(A1-C1)) {
//     console.log(B1)
//     console.log(Math.abs(A1-B1))
// }
// else {
//     console.log(C1)
//     console.log(Math.abs(A1-C1))
// }

//...21
// let x = prompt('Введите координату х')
// let y = prompt('Введите координату у')

// let X = Number(x)
// let Y = Number(y)

// if (X==0 & Y==0) {
//     console.log (0)
// }
// else if (X==0 & Y!==0){
//     console.log(1)
// }
// else if (X!==0 & Y==0){
//     console.log(2)
// }
// else {
//     console.log(3)
// }


//...22
// let X = prompt('Введите координату х')
// let Y = prompt('Введите координату у')

// let x = Number(X)
// let y = Number(Y)

// if (x>0 & Y>0) {
//     alert('Точка лежит в І четверти')
// }
// else if (x<0 & y>0) {
//     alert('Точка лежит в ІI четверти')
// }
// else if (x<0 & y<0) {
//     alert('Точка лежит в ІII четверти')
// }
// else {
//     alert('Точка лежит в ІV четверти')
// }

// ...23
// let X1 = prompt('Введите координату х1')
// let Y1 = prompt('Введите координату у1')
// let X2 = prompt('Введите координату х2')
// let Y2 = prompt('Введите координату у2')
// let X3 = prompt('Введите координату х3')
// let Y3 = prompt('Введите координату у3')

// let x1 = Number(X1)
// let y1 = Number(Y1)
// let x2 = Number(X2)
// let y2 = Number(Y2)
// let x3 = Number(X3)
// let y3 = Number(Y3)

// if (x1==x2) {
//     console.log (x4=x3)
// }
// else if (x1==x3) {
//     console.log (x4=x2)
// }
// else {
//     console.log (x4=x1)
// }

// if (y1==y2) {
//     console.log (y4=y3)
// }
// else if (y1==y3) {
//     console.log (y4=y2)
// }
// else {
//     console.log (y4=y1)
// }

// console.log('Координата х4: '+ x4,'Координата у4: '+ y4)


//...24
// let X = prompt('Введите x')

// let x = Number(X)

// if (x>0) {
//     console.log(2*(Math.sin(x)*Math.PI)/180))
// }
// else {
//     console.log (6-x)
// }


//...25
// let X = prompt('Введите x')

// let x = Number(X)

// if (x <-2 || x>2) {
//     console.log(2*x)
// }
// else {
//     console.log (-3*x)
// }


//...26
// let X = prompt('Введите x')

// let x = Number(X)

// if (x <= 0) {
//     console.log(-x)
// }
// else if (0<x && x<2){
//     console.log (x*x)
// }
// else {
//     console.log(4)
// }


//...27
// let X = prompt('Введите x')

// let x = Number(X)

// if (x < 0) {
//     console.log(0)
// }
// else if ((x % 2) == 0){
//     console.log (1)
// }
// else {
//     console.log(-1)
// }

//...28
// let X = prompt('Введите год')

// let x = Number(X)

// if ((x % 4)==0 && ((x%100)!=0 || (X%400)==0)){
//     console.log('366 дней')
// }
// else {
//     console.log('365 дней')
// }