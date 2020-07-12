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
    	return (hour + ":" + min);
    }

    start(){
    	let checkClock = ring => {
          if(this.getCurrentFormattedTime() == alarmClock.time){
          	alarmClock.callback();
          }
        }
        if(this.alarmClock.timerId == undefined){
           this.timerId = setInterval(() => this.alarmCollection(alarm => checkClock(alarm)), 1000);

             }

          	}


    stop(){
    	if(this.timerId){
    		clearInterval();
    		delete this.timerId;
    	}
    }

    printAlarms(){
    	this.id.forEach(element => console.log(element));
    	this.time.forEach(element2 => console.log(element2));
    }

    clearAlamrs(){
    	stop();
        delete this.alarmCollection;
    }

          }
          	
          		
          		
	
