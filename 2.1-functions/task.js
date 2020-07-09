//#1
function getSolutions(a,b,c){
	let obj;
	let x1;
	let x2;
	let D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0){
    	let obj = {
        	D: D,
        	roots: []
        }
    	return obj;
    }else if (D == 0){
        x1 = -b / 2 * a;
        obj = {
        	D: D,
        	roots: [x1]
        }
        return obj;
    }else {
    	x1 = (-b + Math.sqrt(D)) / (2 * a);
    	x2 = (-b - Math.sqrt(D)) / (2 * a);
    }
        obj = {
    	D: D, 
    	roots: [x1, x2] 
    }
    return obj;
}
function showSolutionsMessage(a, b, c){
   let result = getSolutions(a, b, c);
   console.log("Вычисляем корни квадратного уравнения " + a + " x² " + b + " x " + c);
   console.log("Значение дискриминанта: " + result.D);

  if (result.D < 0){
    	
        console.log("Уравнение не имеет вещественных корней");
    	
    }else if (result.D == 0){
       	console.log(`Уравнение имеет один корень ${result.roots} = значение_корня`);
       
    }else {
    	
        console.log("Уравнение имеет два корня. " + result.roots[0] + " = значение_корня_1, " + result.roots[1] + " = значение_корня_2");

}
//#2

function getAverageScore(data){

let totMarks = 0;
let avSubjMarks;
for(let mark in data){
 totMarks += mark;
 
 data[mark] = getAverageMark(data[mark]);
}
 data.average = getAverageMark(Object.values(data));
 return data;
}

function getAverageMark(marks){
	let allMarks = 0;
	for(let mark of marks){
    allMarks += mark;
    
	}
   return allMarks/marks.length;
   
}

//#3
function getPersonData(secretData){
 return {
 	firstName: getDecodedValue(secretData.aaa),
 	lastName: getDecodedValue(secretData.bbb)
 };

}
function getDecodedValue(secret){

if(secret == 1) {
	return ("Родриго");
}else {
	return ("Эмильо");
}
}