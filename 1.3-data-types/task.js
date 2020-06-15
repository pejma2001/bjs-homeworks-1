"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    // return totalAmount;

  let parsed = [percent, contribution, amount, date];
  for (let parse of parsed){
  	if (Number.isNaN(parse)) { 
    
  	return ("Параметр " + parse + "содержит неправильное значение" + typeof parse); 
  }
  }
  let returnAmount = amount - contribution;
  let currentDate = new Date().getFullYear();
  let creditDate = date.getFullYear();
  let totalYears = (creditDate - currentDate) * 12;
  let currentMonth = new Date().getMonth();
  let aimMonth = 12 - date.getMonth();
  let yearMonthes = currentMonth + aimMonth;
  let totalMonthes = totalYears - yearMonthes;



  let payment = returnAmount * ((percent/12 + percent/12) /(Math.pow((1+percent/12), totalMonthes))-1); 
  let totalAmountPayment = payment * totalMonthes;

  let total = totalAmountPayment.toFixed(2);
  console.log(total);
  return total;
}
function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
    let user = name;
    if (user == undefined || user == null) {
    	user = "Аноним";
    	console.log(`Привет, мир! Меня зовут ${user}`);
    }else {
    	console.log(`Привет, мир! Меня зовут ${user}`);
    }
}