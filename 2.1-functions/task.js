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
   console.log("Вычисляем корни квадратного уравнения " + a * Math.pow(x,2) + b * x + c);
   console.log("Значение дискриминанта: " + result.obj.D);
   if(result.obj.roots == []){
   	console.log("Уравнение не имеет вещественных корней");
   }else if(result.obj.roots == [x1]){
   	console.log(`Уравнение имеет один корень ${result.obj.roots} = значение_корня`);
   }else{
   	console.log("Уравнение имеет два корня. " + result.obj.roots[0] + " = значение_корня_1, " + result.obj.roots[1] + " = значение_корня_2");
   }
  

}
//#2

function getAverageScore(data){
let data = {
	name: subjectName;
	marks: [];
	
}
let totMarks = 0;
let avSubjMarks;
for(let mark of data.marks){
 totMarks += mark;
}
data.avSubjMarks = totMarks/data.marks.length;

}

function getAverageMark(marks){
   object.Values(data);
   
}

//#3
function getPersonData(secretData){
 let data = {
 	aaa: 1, 
 	bbb: 0
 }
}
function getDecodedValue(secret){
let result = getPersonData(secretData);
if (result.data.aaa == 1) {
	return ("Родриго");
}else {
	return ("Эмильо");
}