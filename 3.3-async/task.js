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
    	let time = now.getHours() + now.getMinutes();
    	return time;
    }

    start(){
    	function checkClock(ring){
          if(this.timerId == undefined){
          	function setInterval(){
          		for(unit of this.alarmCollection){
          			let nowTime = new Date();
          			let timeT = nowTime.getHours() + nowTime.getMinutes();
          			if(timeT = getCurrentFormattedTime){
          				return addClock(callback);
          			}
          		}

          	}
          }
    	}
    }
	}
	
