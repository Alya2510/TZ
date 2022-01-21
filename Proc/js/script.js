//...12

// let A = +prompt('Введите А')
// let B = +prompt('Введите В')
// let C = +prompt('Введите С')

// // let A2 = prompt('Введите А2')
// // let B2 = prompt('Введите В2')
// // let C2 = prompt('Введите С2')

// let a1 = Number(A1)
// let b1 = Number(B1)
// let c1 = Number(C1)

// // let a2 = Number(A2)
// // let b2 = Number(B2)
// // let c2 = Number(C2)

// function Sotrt() {
//     if ((A>B) && (B<C)){
//         console.log(C)
//     }
//     if((A>C) && (A<B)) {
//         console.log(B)
//     }
//     if ((A>B) && (B>C)){
//         console.log(B)
//     }
    // console.log(A,B,C)
    // if ((a1<=b1) && (b1<=c1) || (c1<=b1) && (b1 <= a1)){
    //     console.log(sort=a1, a1=b1, b1=sort)   
    // }
    // // if((b1<=c1) && (c1<=a1) || (a1<=c1) && (c1<=b1)) {
    // //     console.log(c1)
    // // }
    // // if ((c1<=a1) && (a1<=b1) || (b1<=a1) && (a1<=c1)){
    // //     console.log(a1)
    // // }
    // // console.log(a1,b1,c1)
// }
// Sotrt()
// Sotrt()


//...24


// function Even(k) {
//     if (k%2 == 0) {
//         return true
//     }
//     else{
//         return false
//     }

// }


// let K = prompt('Vvedite k')
// let k = Number(K)

// if (Even(k)) {
//     console.log (true)
// }
// else{
//     console.log(false)
// }

// let  arr = [1,2,3,4,5,6,7,8,9,10]
// for( i=1; i<arr.length; i++){
//     if(Even(arr[i])) {
//          i++
//     }
       
// }
// console.log(i);


//..25

// function IsSquare(k) {
//     if (k == Math.pow(Math.sqrt(k),2))  {
//         return true
//     }
//     else{
//         return false
//     }
    

// }

// let K = prompt('Vvedite k')
// let k = Number(K)

// if (IsSquare(k)) {
//     console.log (true)
// }
// else{
//     console.log(false)
// }

// for (i=k; i*i<=k; i++) {
//     if (i*i==k){
//        console.log(i)
//     }
// }
// IsSquare(4)


//..26

// function IsPower5(k) {
//     if (k%5==0)  {
//         return true
//     }
//     else if(k<5){
//         return false
//     }
//     else {
//         return false
//     }
// }

// let K = prompt('Vvedite k')
// let k = Number(K)

//     if (IsPower5(k)) {
//         console.log (true)
//     }
//     else if((IsPower5(k))){
//         console.log(false)
//     }
//     else{
//         console.log(false)
//     }

// function Main() {
//     let arr = []
//     let sh =0
//     for (i=0; i < arr.length; i++){
//         if(IsPower5(arr[i])) {
//             sh++
//         }
//     }
// }
// Main()

//...27
//  function IsPowerN5() {
//     while (k>=n) {
//         if ((k%N)!==0 && k!==1) {
//             k=0
//             return false 
//         }
//         else if (k==1){
//             return true
//         }
//         else{
//             return false
//         }
//     }
    
//  }
//     let K = prompt('Vvedite k')
//     let k = Number(K)
//     let N = prompt('Vvedite n')
//     let n = Number(N)
    
//     if (IsPowerN5()) {
//         console.log (true)
//     }
//     else if((IsPowerN5())){
//         console.log(false)
//     }
//     else{
//         console.log(false)
//     }


//..28
// let i=1
// function IsPrime() {
//     while (n%++i!==0){
//         return i==n
//     }

// }

// let N = prompt('Vvedite n')
// let n = Number(N)
// let res=0

// for (i=1; i<=10; i++){
//     res+=IsPrime()
// }
// console.log(res)

//...29
// function DigitCount() {
//     for(i=1; k>=10; i++) {
//         k /=10
//         return i
//     }
// }
// let K = prompt('Vvedite k')
// let k = Number(K)
// console.log(DigitCount()) 


//...30
// let K = prompt('Vvedite k')
// let k = Number(K)
// let N = prompt('Vvedite n')
// let n = Number(N)
// function DigItN() {
//     for(i=1; i<=n-1; i++) {
//         k /=10
//         if (k!==0){
//             return k%10
//         }
//         else{
//             return -1
//         }
//     }
// }
// console.log(DigItN()) 

//...31
// let K = prompt('Vvedite k')
// let k = Number(K)
// let N = prompt('Vvedite n')
// let n = Number(N)
// let l = prompt('Vvedite len')
// let len = Number(l)

// function DigitCount() {
//     for(i=1; k>=10; i++) {
//         k /=10
//         return i
//     }
// }

// function DigItN() {
//     for(i=1; i<=n-1; i++) {
//         k /=10
//         if (k!==0){
//             return k%10
//         }
//         else{
//             return -1
//         }
//     }
// }

// function IspaLindrom () {
//     let len = DigitCount()
//     for (i=1; i<=len; i++) {
//         if(DigItN(k,i)!==DigItN(k,len -i+1)) {
//             return 0
//         }
//         return 1
//     }

// }
// console.log(IspaLindrom ())








//..32
// let D = prompt('Vvedite d')
//         let d = Number(D)
// function DegToRad() {
//     for (i=1; i<=5; i++){
        
//         return d*3.14/180
//     }
// }
// console.log(DegToRad()) 



//..33
// let R = prompt('Vvedite r')
//         let r = Number(R)
// function RadToDeg() {
//     for (i=1; i<=5; i++){
        
//         return 180*r/3.14
//     }
// }
// console.log(RadToDeg()) 



//..34
// let n = prompt('Vvedite f')
// let N = Number(n)
// function Fact() {
//     let sh=1
//     for (i=1; i<=N; i++){
//         sh *=i
//         return sh
//     }

//     for (i=1; i<=5; i++){
//         console.log(Fact())
//     }
// }
// Fact()



    