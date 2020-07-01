//Задание №1
function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}
function sum(...args) {
  
  sleep(100); 
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}
function compareArrays( arr1, arr2 ){
	if(arr1.every[] == arr2.every[]){
     return true;
	}else{
		return false;
	}
}
function memorize(fn, limit){
	const mSum = memorize(sum, 5); 
sum(3, 4); 

mSum(3, 4); 
const memory = [mSum];
}