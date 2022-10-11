import { useAppDispatch } from "../Redux/hooks";
import { setPersonStat } from "../Redux/personReducer";
import { Stats } from "./Stats";

export class Person {
	public constructor(
		// public id?: number,
		public name  : string  	= 'Adar',
		public stats : Stats   	= new Stats()
		// public age	 : number  = 25
	) {}
}
