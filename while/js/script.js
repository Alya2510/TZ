//..16

// let proc = prompt('Введите P')

// let P = Number(proc)

// let norma = 10
// let S = 10
// let k = 1
//  while (S <= 200) {
//     k+=1
//     norma += norma*P/100
//     S +=norma
//     console.log(S)
//     console.log(k)
  
//  }

 //...17
//  let n = prompt('Введите n')

//  let N = Number(n)
 
//   while (N>0) {
//      console.log(N%10) 
//      console.log(n /=10)
//   } 


//..18
// let n = prompt('Введите n')
// let N = Number(n)

// let sum=0
// let counter = 0

//  while (N>0) {
//    counter++
//    sum += N%10
//    N/=10

   
    
//  } 
//  console.log(counter)
//  console.log(sum)


//...19
// let n = prompt('Введите n')
// let N = Number(n)

// let sh=0

//  while (N>0) {
//     k = N%10
//     sh=sh*10 + k
//     N=N/10
//     console.log(sh)
//  } 
 

//..20
// let n = prompt('Введите n')
// let N = Number(n)

// while((N>0)&&((N%10)!==2)) {
//     N = N/10
// }
 
// if ((N>0) && (N%10)==2) {
//     console.log(true)

// }
// else{
//     console.log(false)
// }

//...21

// let n = prompt('Введите n')
// let N = Number(n)

// while((N >0) && ((N%10)%2==0)) {
//     N = N/10
// }
 
// if ((N%10)%2!==0) {
//     console.log(true)

// }
// else{
//     console.log(false)
// }

//..22
// let n = prompt('Введите n')
// let N = Number(n)

// let counter=2 

// while((counter<N-1) && (N%counter)!==0) {
//    counter++
// }
 
// if ((N%counter)!==0) {
//     console.log(true)

// }
// else{
//     console.log(false)
// }

//..23

// let A = prompt('Введите A')
// let B = prompt('Введите B')
// let a = Number(A)
// let b = Number(B)


// while((a!==0)&&(b!==0)) {
//     if (a>b) {
//         a=a%b
    
//     }
//     else{
//         b=b%a
//     }
// }
// console.log(a+b)

//..24
// let N = prompt('Введите N')
// let n = Number(N)

// let f1=1, f2=1, f=0


// while(f<n) {
//     f=f2+f1
//     f2=f1
//     f1=f
// }
// if (f==n) {
//     console.log(true)

// }
// else{
//     console.log(false)
// }


//..25
// let N = prompt('Введите N')
// let n = Number(N)

// let f1=1, f2=1, f=0


// while(f<n+1) {
//     f=f2+f1
//     f2=f1
//     f1=f
// }
// console.log(f)


//...26
let N = prompt('Введите N')
let n = Number(N)

let f1=1, f2=1, f=0


while(f<n) {
    f=f2+f1
    f2=f1
    f1=f
}
console.log(f2)
console.log(f1+f2)

 
