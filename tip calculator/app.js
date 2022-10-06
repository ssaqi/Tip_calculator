function caly() {
    
let billAmount = document.getElementById("billAnount").value;
let percentageAmount = document.getElementById("percentageTip").value;
let Percentge = (billAmount * percentageAmount)/100;
document.getElementById("tipAmount").value=Percentge;
let totalAmount =Number(billAmount)+Number(percentageAmount)+Number(Percentge);
document.getElementById("total").value=totalAmount;


}