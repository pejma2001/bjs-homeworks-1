function getResult(a,b,c){
	"use strict";
	let arrayRoot;
	let arrayRoot2;
	let discriminant = Math.pow(b, 2) - 4 * a * c;
    // код для задачи №1 писать здесь
    if (discriminant < 0){
       arrayRoot = [];
       return arrayRoot;
    }else if(discriminant = 0){
       arrayRoot = (-b + Math.sqrt(discriminant)) / (2 * a);
       return arrayRoot;
    }else{
       arrayRoot = (-b + Math.sqrt(discriminant)) / (2 * a);
       arrayRoot2 = (-b - Math.sqrt(discriminant)) / (2 * a);
       let arr = [arrayRoot, arrayRoot2];
       return arr;
    }
    
}

function getAverageMark(marks){
	let arrLength = marks.length;
	if (arrLength = " "){
		return 0;
	}else if(arrLength > 5){
		console.log(`Всего оценок: ${arrLength}`);
		let cutMarks = marks.slice(0,5);
	}else {
		cutMarks = arrLength;
	}
	for (let i = 0; i < cutMarks.length; i++){
		let sumMarks =+ i;
		let averageMark = avsumMarks / cutMarks;
		return averageMark;
	}
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
    let today = new Date();
    let age = today.getFullYear() - dateOfBirthday;
    if (age > 18){
    	return `Не желаете ли олд-фэшн, ${name}?`;
    }else{
    	return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!”`
    }
}