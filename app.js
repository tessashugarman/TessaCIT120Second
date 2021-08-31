var inputBill = Number(prompt("How much is your bill?"));
var taxAmount=inputBill*.07;
var taxTotalBill=inputBill+taxAmount;
var tipAmount=taxTotalBill*.05;
var yourTotal=tipAmount+taxTotalBill;
var element = document.body.querySelector(".box");

element.innerHTML=yourTotal;