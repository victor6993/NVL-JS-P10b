
var pares = [];
var impares = [];
var j = 0;
var k = 0;

for(let i = 0; i < 50; i++) {
    var random = Math.floor((Math.random()*100)+1);
    if(random%2 == 0) {
        pares[j++] = random;
    } else {
        impares[k++] = random;
    }
}

console.log(pares);
console.log(impares);