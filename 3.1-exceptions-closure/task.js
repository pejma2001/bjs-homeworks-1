//Задание №1

function parseCount(x) {
	const parsed = Number.parseInt(x);
 	   if(Number.isNaN(parsed)) {
         throw new Error ("Невалидное значение");
	   }
	     return parsed;
	   
}

function validateCount(y) {
  try {
    return parseCount(y);
  }      
  catch(e) {
    return('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
  }
}



//Задание №2

class Triangle {
	constructor(left, right, bottom) {
   	this.left;
   	this.right;
   	this.bottom;

	if(((left + right) < bottom) || ((right + bottom) < left) || ((left + bottom) < right)) {
		throw new Error ("Треугольник с такими сторонами не существует");
	}
	
	}
    function getTriangle(left, right, bottom) {
		try {
          let figure = new Triangle(left, right, bottom);
          return figure;
	    }
   

        catch {
	      
	      let errObj = new Triangle(left, right, bottom);
	      return("Ошибка! Треугольник не существует");
	      getArea();
	      getPerimeter();
        }
        
    }`

	getPerimeter() {
		return this.left + this.right + this.bottom;
	}

	getArea() {
		let halfP = getPerimeter() / 2;
		let geron = Math.sqrt(halfP * (halfP - this.left) * (halfP - this.right) * (halfP - this.bottom));
		let str = geron.toFixed(3);
		return parseInt(str, 10);
	}


}  

