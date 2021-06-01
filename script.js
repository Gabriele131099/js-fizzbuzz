var array= [];
var stampa= document.getElementById("stampa")
var fizz = "Fizz"
var buzz = "Buzz"
var fizzbuzz = "FizzBuzz"

for (var i = 0; i <= 100; i++) {  //se metto 1 a i non funziona  !important
    array.push(i)
        if (array[i]%3 === 0 && array[i]%5 === 0 ) {
            array[i]= fizzbuzz
        }
        if (array[i]%3 === 0) {
            array[i]= fizz
        } else { 
                if (array[i]%5 === 0) {
                    array[i]= buzz

                } 
        }
}
stampa.innerHTML=  array

