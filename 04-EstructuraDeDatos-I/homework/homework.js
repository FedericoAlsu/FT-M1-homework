'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if(n == 0 || n === 1) return 1
   else if( n < 0) return 0
   else return n * nFactorial(n - 1)
 }




// EJERCICIO 2
function nFibonacci(n) {
      if (n < 2) return n;
      else{
         return nFibonacci(n-1) + nFibonacci(n-2);
      }
}



// EJERCICIO 3
function Queue() {
   class Queue {
     
      constructor(){
         this.obj = {};
      }
      enqueue(nuevo){
         this.obj[nuevo] = nuevo;
         return this.obj[nuevo];
      }
      dequeue(quitar = null){
         if(quitar == null){
            let first = Object.keys(this.obj)[0];
            delete this.obj[first];

            if(parseInt(first)){
               return parseInt(first)
            }else{
               return first;
            }
            

         }
         else if(this.obj.hasOwnProperty(quitar)){
            delete this.obj[quitar];
            return quitar;
         }
         else{
            return undefined;
         }
      }
      size(){

         return Object.keys(this.obj).length;
      }
   }
   return new Queue;
}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
