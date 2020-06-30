//Задание №1

	function parseCount(x){
	const parsed = Number.parseInt(x);
	if(parsed == NaN){
       throw new Error ("Невалидное значение");
	}else {
		return parsed;
	
}
}
try{
function validateCount(y){
    const parse = parseCount(y);
}
}
catch{
    if(parse == true){
    	return parse;
    }else{ 
    	throw new Error ("У вас ошибка");

    }
}



//Задание №2

class Triangle{
	constructor(left, right, bottom){
    this.left = 3;
    this.right = 3;
    this.bottom = 6;
	}
	if((this.left + this.right) < bottom){
		throw new Error ("Треугольник с такими сторонами не существует");
	}
	getPerimeter(){
		
			return this.left + this.right + this.bottom;
		}

	getArea(a, b, c){
		let halfP = (a + b +c) / 2;
		let geron = toFixed(Math.sqrt(halfP * (halfP - a) * (halfP - b) * (halfP - c)));

	}
	try{
		getTriangle(a, b, c){
        let figure = new Figure(5, 5, 15);
	}
}
catch{
	throw new Error ("Ошибка! Треугольник не существует");
	getArea();
	getPerimeter();
}




