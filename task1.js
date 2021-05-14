
function decToBin(num){
    let binary = 0;
    let remainder;
    let i = 1;
    while(num != 0){
        remainder = num % 2;
        num = parseInt(num / 2);
        binary = binary + remainder * i;
        i = i * 10;
    }
    
    document.getElementById("binary").innerHTML = "Binary: " + binary;
}

function convert(){
    let posInteger = document.getElementById("posInteger").value;
    document.getElementById("decimal").innerHTML = "Decimal: " + posInteger;
    decToBin(posInteger);
}