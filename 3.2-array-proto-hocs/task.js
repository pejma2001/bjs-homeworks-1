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
function compareArrays( arr1, arr2 ) {
	if(arr1.length == arr2.length) {
		return false;
	}else {
        arr1.every(
        	function compare(arr1[],index) {
               if(arr1[] == arr2[] || arr1.index == arr2.index) {
               	  return true;
               }else {
               	  return false;

               }
        	})
}



	
}
function memorize(fn, limit){
	const innerFunc = () => "Hello";
	return innerFunc();
	

}
const result = memorize();
result(1,2,3,4);
/*	
	const mSum = memorize(sum, 5); 
sum(3, 4); 

mSum(3, 4); 
const memory = [mSum];
}*/