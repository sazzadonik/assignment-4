// Declare button for First Class
let firstClassAdd = document.getElementById("firstClassAdd");
let firstClassRemove = document.getElementById("firstClassRemove");

// Declare button for Economy class Class
let economyAdd = document.getElementById("economyAdd");
let economyRemove = document.getElementById("economyRemove");

// declare Rent for first and economy Class
const priceFirstClass = +document.getElementById("rentFirstClass").innerText;
const priceEconomyClass = +document.getElementById("rentEconomyClass").innerText;

// declare submit button
 let submitButton = document.getElementById("submitButton");

// Event Listener for First Class (+)
firstClassAdd.addEventListener("click", function(){
    quantityChangeFunction("firstClassQuantity", true);
    costCalculation("firstClassTotal",priceFirstClass, true);
    subTotalFunction();
    vatCalculate();
    calculateTotal();
});


// Event Listener for First Class (-)
firstClassRemove.addEventListener("click", function(){
    quantityChangeFunction("firstClassQuantity", false);
    costCalculation("firstClassTotal",priceFirstClass, false);
    subTotalFunction();
    vatCalculate();
    calculateTotal();
});


//Event listener for Economy Class (+)
economyAdd.addEventListener("click", function(){
    quantityChangeFunction("economyClassQuantity", true);
    costCalculation("economyClassTotal",priceEconomyClass, true);
    subTotalFunction();
    vatCalculate();
    calculateTotal();
});


//Event listener for Economy Class (-)
economyRemove.addEventListener("click", function(){
    quantityChangeFunction("economyClassQuantity", false);
    costCalculation("economyClassTotal",priceEconomyClass, false);
    subTotalFunction()
    vatCalculate();
    calculateTotal();
});


// Quantity increment and decrement using + & -
function quantityChangeFunction(id, isIncrement){
    let quantity = document.getElementById(id).value;
    let quantityChange = parseInt(quantity);
    if(isIncrement == true){
        quantityChange = quantityChange + 1;
    }else if(isIncrement == false && quantityChange > 0){
        quantityChange = quantityChange - 1;
    }
    document.getElementById(id).value = quantityChange;
}


// To cath the current value of subtotal
function subTotalCurrent(){
    let subTotalText = document.getElementById("subTotal").innerText;
    let subTotal = parseInt(subTotalText);
    return subTotal;
}


// Calculate Subtotal
function subTotalFunction(){ 
    let firstClassPrice = +document.getElementById("firstClassTotal").innerText;
    let economyPrice = +document.getElementById("economyClassTotal").innerText;
    let subTotal = firstClassPrice + economyPrice;
    document.getElementById("subTotal").innerText = subTotal;
}


// function for separate increase and decrease with cost
function costCalculation(id,price, isIncrement){
    let priceIndividualClass = +document.getElementById(id).innerText;
    if(isIncrement === true){
        priceIndividualClass = priceIndividualClass + price;
    }else if(isIncrement === false && priceIndividualClass > 0){
        priceIndividualClass = priceIndividualClass - price;
    } 
    document.getElementById(id).innerText = priceIndividualClass;
}


// calculate vat 10% for subTotal
function vatCalculate(){
    let subTotal = subTotalCurrent();
    let vat = subTotal * 0.1;
    document.getElementById("vatText").innerText = vat;
}


// Set the total cost for ticket
function calculateTotal(){
    let subTotal = subTotalCurrent();
    let vat = +document.getElementById("vatText").innerText;
    let total = subTotal + vat;
    document.getElementById("totalCost").innerText = total;
}


// Confirmation of purchased ticket
submitButton.addEventListener("click",function(){
    document.getElementById("mainSection").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
});


