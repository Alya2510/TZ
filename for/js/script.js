//...12

// let n = prompt('N')

// let N = Number(n)
 
// let res=1
// for (i=1; i <= N; i++) {
//     res = res*(1.0+0.1*i)
//     console.log(res)
// }


//..13

// let n = prompt('N')

// let N = Number(n)
 
// let res=0
// for (i=1; i <= N; i++) {
//    console.log(res += Math.pow(-1,i+1)*(1.0+0.1*i)) 
//     // console.log(res)
// }


//...14
// let n = prompt('N')

// let N = Number(n)
 
// let res=0
// for (i=1; i <= (2*N-1); i+=2) {
//    console.log(res += i) 
// }


//...15
// let a = prompt('Vvedite A')
// let n = prompt('N')

// let A = Number(a)
// let N = Number(n)

 
// let res=1
// for (i=1; i <N; i++) {
//    console.log(Math.pow(A,N)) 
    
// }


//...16

// let a = prompt('Vvedite A')
// let n = prompt('N')

// let A = Number(a)
// let N = Number(n)

 
// let res=1
// for (i=1; i <N; i++) {
//    console.log(Math.pow(A,N)) 
    
// }


//...17
// let a = prompt('Vvedite A')
// let n = prompt('N')

// let A = Number(a)
// let N = Number(n)

 
// let res=1
// let sum=1
// for (i=1; i <N; i++) {
//    console.log(res*=A)
//    console.log(sum+=res) 
    
// }


//...18
// let a = prompt('Vvedite A')
// let n = prompt('N')

// let A = Number(a)
// let N = Number(n)

 
// let res=1
// let sum=1
// for (i=1; i <N; i++) {
//    console.log(res *=(-1)*A)
//    console.log(sum+=res) 
    
// }


//...19
// let n = prompt('N')

// let N = Number(n)

// let res=1
// for (i=1; i <= N; i++) {
//    console.log(res = res*i)
    
// }


//...20
// let n = prompt('N')

// let N = Number(n)

// let res=1
// let sum = 0 //0!=1
// for (i=1; i <= N; i++) {
//    console.log(res = res*i)
//    console.log(sum = sum + res*i)
    
// }


//...21
// let n = prompt('N')

// let N = Number(n)

// let res=1
// let n1 = 1
// for (i=1; i <= N; i++) {
//    console.log(res = res*i)
//    console.log(n1 += 1/res)
  
// } 

//..22
let n = prompt('N')
let X = prompt('x')

let N = Number(n)
let x = Number(X)

let res=1 //  факториал
let n1 = 1 // summa factorial
let a = x
for (i=1; i <= N; i++) {
   console.log(res = res*i)
   console.log(n1 = n1 + (x/res))
   x= x**a
   console.log(x)
  
} 




