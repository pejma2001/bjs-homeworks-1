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
    return(e);
  }
}



//Задание №2

class Triangle {
	constructor(left, right, bottom) {
   	this.left = left;
   	this.right = right;
   	this.bottom = bottom;

	if(((left + right) < bottom) || ((right + bottom) < left) || ((left + bottom) < right)) {
		throw new Error ("Треугольник с такими сторонами не существует");
	}
	
	}
  
	getPerimeter() {
		return this.left + this.right + this.bottom;
	}

	getArea() {
		let halfP = getPerimeter() / 2;
		let geron = Math.sqrt(halfP * (halfP - this.left) * (halfP - this.right) * (halfP - this.bottom));
		let str = geron.toFixed(3);
		return parseFloat(str);
	}


}  
    function getTriangle(left, right, bottom) {
		try {
          return new Triangle(left, right, bottom); 
	    }
   

        catch {
	      
	      return {
	        getArea: () => "Ошибка! Треугольник не существует",
	        getPerimeter: () => "Ошибка! Треугольник не существует"
          };
        }
        
    }

