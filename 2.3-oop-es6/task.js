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
	set state(number){
    if (number < 0){
    	this.state = 0;
    }else if(number > 100){
    	this.state = 100;
    }else{
    	this.state = number;
    }
	}
	get state(){
		return this.state;
	}
}
class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
    	super(type)
    	this.type = magazine;
    }
}
class Book extends PrintEditionItem{
	constructor(name, releaseDate, pagesCount){
    	super(type, author)
    	this.type = book;
    	this.author = author;
    }

}
class NovelBook extends Book{
	constructor(name, releaseDate, pagesCount, author){
    	super(type)
    	this.type = novel;
    	
    }
}

class FantasticBook extends Book{
	constructor(name, releaseDate, pagesCount, author){
    	super(type)
    	this.type = fantastic;
    	
    }
}
class DetectiveBook extends Book{
	constructor(name, releaseDate, pagesCount, author){
    	super(type)
    	this.type = detective;
    	
    }
}

//#2----------------------------------------------------------------------------------------------

class Library {
	constructor(name, books){
		this.name = "name";
  		this.books = [];
}
  		addBook(book){
  			if (PrintEditionItem.state > 30){
  				this.books = this.books.push(books);
  			}
  		}
  		findBookBy(type, value){
  			if((type in this) & (this.type[value])){
                 return this.type[value];
  			}else{
  				return null;
  			}
            }
  		giveBookByName(bookName){
             for(bookName of this.books){
             	if(bookName){
             		return bookName;
             		delete.this.books[bookName];
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
            if((grade =< 5) & (grade >= 1)){
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
