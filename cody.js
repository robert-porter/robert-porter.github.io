

function roll(N) { 
    var K = (N*N + N)/2;
    var x = Math.floor(Math.random() * K) + 1;
    var p = 1 + N - Math.ceil((Math.sqrt(1 + 8 * x) - 1)/2.0);
    return p;
}

console.log(roll(10));
