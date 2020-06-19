String.prototype = isPalindrome() {
   
}


function getAverageMark(marks) {
	let mark; 
	let total = 0;
    let average;
	for(mark of marks){
    total += mark;
     average = total/marks.length;
	}
	roundedAverage = Math.round(average);
	return roundedAverage;
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
	let now = new Date().getTime();
	const date1 = new Date(birthday);
	let birthday = getTime(date1);
	let diff = now - birthday;
	let ageSec = getFullYear(birthday);
	let age = diff / getTime(ageSec)/31/12;
    // код для задачи №3 писать здесь
    // return verdict
}