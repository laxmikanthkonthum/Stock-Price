var initialPrice = document.getElementById("initialPrice");
var quantity = document.getElementById("quantity");
var currentPrice = document.getElementById("currentPrice");
var output = document.getElementById("output");
var submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener('click',logic);
function logic(){
    ip= Number(initialPrice.value);
    quan = Number(quantity.value);
    curr = Number(currentPrice.value);
    if (ip < 1 || quan < 1 || curr < 1){
        output.innerText = "Please enter all the values greater than 0";
    }
    else{
    calculateEarnings(ip,quan,curr);
    }
}
function calculateEarnings(ip,quan,curr){
    var initialInv = ip * quan;
    var currentInv = curr * quan;
    if(initialInv > currentInv){
        var loss = initialInv - currentInv;
        var lossPer = ((loss/initialInv) * 100).toFixed(2);
        output.style.color = 'red';
        output.innerText = "Oh No! You made a loss of " + loss + ' rupees and the loss percent is ' + lossPer + '%  😩';
    }
    else if(initialInv < currentInv){
        var profit = currentInv - initialInv;
        var profitPer = ((profit/initialInv) * 100).toFixed(2);
        output.style.color = 'green';
        output.innerText = "Yayy! You made a profit of " + profit + ' rupees and the profit percent is ' + profitPer + '%  🤑' ;
    }
    else{
        output.innerText = "No change in investment  🙂";
    }
}
