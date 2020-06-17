"use strict";
function getResult(a,b,c){
	
	let arrayRoot;
	let arrayRoot2;
	let discriminant = Math.pow(b, 2) - 4 * a * c;
    // код для задачи №1 писать здесь
    if (discriminant < 0){
       
       return []; 
    }else if(discriminant == 0){
       arrayRoot = -b / (2 * a);
       
       return [arrayRoot];
    }else{
       arrayRoot = (-b + Math.sqrt(discriminant)) / (2 * a);
       arrayRoot2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      
       return [arrayRoot, arrayRoot2];
    }
    
}

function getAverageMark(marks){
	let cutMarks = [];
	let sumMarks = 0;
	let arrLength = marks.length;
	
    let cutMark;
	
	if (arrLength == 0){
		return 0;
	}else if(arrLength > 5){
		console.log(`Всего оценок: ${arrLength}`);
		marks = marks.slice(0,5);
	}
	    
	for (cutMark of marks){
		sumMarks += cutMark;
	}
	
	
	return sumMarks / marks.length;
		 
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    
    if (age > 18){
    	return `Не желаете ли олд-фэшн, ${'name'}?`;
    }else{
    	return `Сожалею, ${'name'}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
}