import { addToTaskQueue, increasePersonSkill, setPersonStat, shiftQueue } from "../Redux/personsReducer";
import { Skills } from "./Skills";
import { Stats } from "./Stats";
import { Task } from "./Task";

export class Person {
	public constructor(
		public name  		: string  		= 'Adar',
		public stats 		: Stats   		= new Stats(),
		public isActive 	: boolean  		= true,
		public skills		: Skills		= new Skills(),
		public tasksQueue	: Array<Task>	= [],
	) {
		this.sleep 	= this.sleep.bind(this);
		this.cook 	= this.cook.bind(this);
		this.eat 	= this.eat.bind(this);
		this.queue 	= this.queue.bind(this);
	}

	public personQueue = Promise.resolve();

	public queue(fn : any) {
	    this.personQueue = this.personQueue.then(fn);
	    return this.personQueue;
	}

	public async addToQueue(name: string, icon: string){
		this.tasksQueue.push(new Task(name, icon));
	}

	public async sleep(dispatch: any){
		for (let i = 0; i < 60; i++) {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			dispatch(setPersonStat(["energy", this.stats.energy + 1]));
		}

		dispatch(shiftQueue());
	}
	
	public async cook(dispatch: any){
		for (let i = 0; i < 13; i++) {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			dispatch(increasePersonSkill(["cooking", 8]));
		}
		dispatch(shiftQueue());
	}

	public async eatMeal(dispatch: any) {
		dispatch(addToTaskQueue(new Task('Eat Meal', "🍔")));

		for (let i = 0; i < 10; i++) { 
			await new Promise((resolve) => setTimeout(resolve, 1000));
			dispatch(setPersonStat(["hunger", this.stats.hunger + 4]));
		}

		dispatch(shiftQueue());
	}

	public async eat(dispatch: any) {
		for (let i = 0; i < 7; i++) { 
			await new Promise((resolve) => setTimeout(resolve, 1000));
			dispatch(setPersonStat(["hunger", this.stats.hunger + 2]));
		}

		dispatch(shiftQueue());
	}
}
