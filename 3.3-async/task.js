class alarmClock {

	constructor(){
		this.alarmCollection = [];
		this.timerId;
	}
	addClock(time, callback, id){
		if(id == undefined){
			throw new Error ("Внимание! Ошибка!");
		}else if(this.alarmCollection.find(alarmCollection => id == alarmCollection.id)){
			console.error("Ошибка! Такой id уже существует");
		}else{
			this.alarmCollection.push({id, time, callback});
		}
    
    }
    removeClock(id){
    	let current = this.alarmCollection.filter(alarmCollection => id == alarmCollection.id);
    	this.alarmCollection.splice(current,1);
    }

    getCurrentFormattedTime(){
    	let now = new Date();
    	let hour = now.getHours();
    	let min = now.getMinutes();
    	if(hour < 10){
           hour = 0 + hour;
    	}
    	
    	if(min < 10){
           min = 0 + min;
    	}
    	return (hour + " : " + min);
    }

    start(){
    	checkClock((ring) => {
          if(getCurrentFormattedTime() == alarmClock.time){
          	return alarmClock.callback;
          }
        }
        if(alarmClock.timerId == undefined){
          alarmClock.timerId = function setInterval(
          
          	let callback() {
          		for(alarm of alarmClock.alarmCollection){
          			checkClock(alarm);
          		},
          		1000
             )  

          	}
          }
          	
          		
          		
	
