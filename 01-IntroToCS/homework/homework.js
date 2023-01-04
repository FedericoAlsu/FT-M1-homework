'use strict';

function BinarioADecimal(num) {
   let decimal = 0;
   let l = num.length;
   for (let i = l - 1; i >= 0; i--) {
      if ( num[i] == '1' )
      decimal += Math.pow( 2, l - 1 - i );
   }
   return decimal;
}

function DecimalABinario(num) {
   let binary = "";
   while (num > 0) {
      if (num & 1) {
         binary = "1" + binary;
      } else {
         binary = "0" + binary;
      }
      num = num >> 1;
   }
   return binary;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};