String.prototype.isPalindrome = function() {
   
   const str = this;
   let a = str.split("");
   let b = a.reverse();
   let c = b.join();
  if(str.toLowerCase() === c.toLowerCase()){

   console.log(str.isPalindrome());
}
}
let str = "А роза упала на лапу Азора";

function getAverageMark(marks) {
	let mark; 
	let total = 0;
    let average;
	for(mark of marks){
    total += mark;
}
     average = total/marks.length;
	}
	let roundedAverage = Math.round(average);
	return roundedAverage;
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
	let now = new Date().getTime();
	const birthdayTime = new Date(birthday).getTime();

	let diff = now - birthdayTime;
	const age = diff / (356.25 * 24 * 60 * 60 * 1000);
	return age >= 18;
	
    // код для задачи №3 писать здесь
    // return verdict
}