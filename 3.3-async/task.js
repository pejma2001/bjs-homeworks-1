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
          if(this.getCurrentFormattedTime() == ring.time){
          	ring.callback();
          }
        }
        if(this.timerId == undefined){
           this.timerId = setInterval(() => this.alarmCollection.forEach(alarm => checkClock(alarm)), 1000);

             }

          	}


    stop(){
    	if(this.timerId){
    		clearInterval(this.timerId);
    		this.timerId = undefined;
    	}
    }

    printAlarms(){
    	
    	this.alarmCollection.forEach(element2 => console.log(element2));
    }

    clearAlamrs(){
    	stop();
        this.alarmCollection = [];
    }

          }
          	
     function testCase(){
       let alarm = new alarmClock();
       alarm.addClock("09:00", () => console.log("Пора вставать"),1);
       alarm.addClock("09:01", () => { console.log("Пора вставать уже!"); alarm.removeClock(2)},2);
       alarm.addClock("09:01", () => console.log("Иди умывайся"));
       alarm.addClock("09:02", () => {
       	console.log("Вставай, а то проспишь!");
       	alarm.clearAlamrs();
       	alarm.printAlarms();
       },3);
       alarm.addClock("09:05", () => console.log("Вставай, а то проспишь!"),1);
       alarm.printAlarms;
       alarm.start();

     }		
          		
	
