var array= [];
var stampa= document.getElementById("stampa")
var fizz = "Fizz"
var buzz = "Buzz"
var fizzbuzz = "FizzBuzz"

for (var i = 0; i <= 100; i++) {
        array.push(i)
}
stampa.innerHTML=  array;