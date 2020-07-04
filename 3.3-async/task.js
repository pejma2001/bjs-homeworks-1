class alarmClock {

	constructor(alarmCollection, timerId){
		this.alarmCollection = [];
		this.timerId;
	}
	addClock(time, callback, id){
		if(id == undefine){
			throw new Error ("Внимание! Ошибка!");
		}else if(this.alarmCollection.find(id)){
			console.error("Ошибка! Такой id уже существует");
		}else{
			const collect = new alarmCol(id, time, callback);
			this.alarmCollection.push(collect);
		}
    
    }
    removeClock(id){
    	let current = this.alarmCollection.filter(id);
    	this.alarmCollection.splice(current,1);
    }

    getCurrentFormattedTime(){
    	let now = new Date();
    	let time = now.getHours() + now.getMinutes();
    	return time;
    }

    start(){
    	function checkClock(ring){
          if()
    	}
    }
	}
	
