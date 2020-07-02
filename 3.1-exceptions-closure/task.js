//Задание №1

function parseCount(x) {
	const parsed = Number.parseInt(x);
 	   if(Number.isNaN(parsed)) {
         throw new Error ("Невалидное значение");
	   }else {
	     return parsed;
	   }
}

function validateCount(y) {
  try {
    parseCount(y);
  }      
  catch(e) {
    console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
  }
}



//Задание №2

class Triangle {
	constructor(left, right, bottom) {
    this.left;
    this.right;
    this.bottom;
	

	if(((this.left + this.right) < bottom) || this.left < this.right || this.left > this.return) {
		throw new Error ("Треугольник с такими сторонами не существует");
	}
	
	function getTriangle(a, b, c) {
		try {
          let figure = new Figure(5, 5, 15);
	    }
   

        catch {
	      throw new Error ("Ошибка! Треугольник не существует");
	      getArea();
	      getPerimeter();
        }
    }

    }

	getPerimeter() {
		return this.left + this.right + this.bottom;
	}

	getArea() {
		let halfP = getPerimeter() / 2;
		let geron = Math.sqrt(halfP * (halfP - left) * (halfP - right) * (halfP - bottom));
		return geron.toFixed(3);
	}


}  

