//#1
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount){
		this.name = name;
  		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix(){
		return this.state * 1.5;
	}
	set state(number) {
		
    if (number < 0){
    	this.sState = 0;
    }else if(number > 100){
    	this.sState = 100;
    }else{
    	this.sState = number;
    }
	}
	get state(){
		return this.sState;
	}
};
class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
    	super(name, releaseDate, pagesCount)
    	this.type = "magazine";
    }
}
class Book extends PrintEditionItem{
	constructor(name, releaseDate, pagesCount, author){
    	super(name, releaseDate, pagesCount)
    	this.type = "book";
    	this.author = author;
    }

}
class NovelBook extends Book{
	constructor(name, releaseDate, pagesCount, author){
    	super(name, releaseDate, pagesCount, author)
    	this.type = "novel";
    	
    }
}

class FantasticBook extends Book{
	constructor(name, releaseDate, pagesCount, author){
    	super(name, releaseDate, pagesCount, author)
    	this.type = "fantastic";
    	
    }
}
class DetectiveBook extends Book{
	constructor(name, releaseDate, pagesCount, author){
    	super(name, releaseDate, pagesCount, author)
    	this.type = "detective";
    	
    }
}

//#2----------------------------------------------------------------------------------------------

class Library {
	constructor(name, books){
		this.name = "name";
  		this.books = [];
}
  		addBook(book){
  			const test = new PrintEditionItem(book);
  			if (book.state > 30){
  				return this.books.push(book);
  			}
  		}
  		 findBookBy(type, value){
  		
                let lib = this.books.find((item) => item.type == 'value');
  				if(lib){
                 return value;
  			}else{
  				return null;
  			}
  			}
  			
            
  		giveBookByName(bookName){
             for(bookName of this.books){
             	if(bookName){
             		return bookName;
             		this.books.splice(bookName,1);
             	}else {
             		return null;
             	}
             }
             	
             }
  		
		}
	

	//#3 -----------------------------------------------------------------------------------------------
	class StudentLog{
		constructor(name){
		}
		getName(name){
          return name;
		}
		addGrade(grade, subject){
            if((grade <= 5) & (grade >= 1)){
            	return grade.length;
            }else{
            	console.log("Неверная оценка");
            }
		}
		getAverageBySubject(subject){
			let marks = 0;
			for(let i = 1; i < grade.length; ++i){
				marks += i;
				this.subject = mark/addGrade();
			}
             
		}
		getTotalAverage(){
			
			return getAverageBySubject;
		}


	}
