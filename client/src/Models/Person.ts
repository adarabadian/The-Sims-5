import { Skills } from "./Skills";
import { Stats } from "./Stats";

export class Person {
	public constructor(
		public name  	: string  	= 'Adar',
		public stats 	: Stats   	= new Stats(),
		public isActive : boolean  	= true,
		public skills	: Skills	= new Skills()
	) {}
}
