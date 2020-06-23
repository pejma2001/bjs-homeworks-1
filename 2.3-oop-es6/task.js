//#1
class PrintEditionItem() {
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
	constructor(name, releaseDate, pagesCount, author){
    	super(type)
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

class Library() {
	constructor(name, books){
		this.name = name;
  		this.books = [];

  		addBook(book){
  			if (PrintEditionItem.state > 30){
  				this.books = "book";
  			}
  		}
  		findBookBy(type, value){

  		}
  		giveBookByName(bookName){

  		}
		}
	}

	//#3 -----------------------------------------------------------------------------------------------
	class StudentLog(){
		getName(name){
          return name;
		}
		addGrade(grade, subject){

		}
		getAverageBySubject(subject){

		}
		getTotalAverage(){
			
		}


	}
