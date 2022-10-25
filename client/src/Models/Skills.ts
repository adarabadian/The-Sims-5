export class Skills {
	public constructor(
		public charisma	: Skill = {level: 1, xp : 0},
		public cooking 	: Skill = {level: 1, xp : 0},
		public logic 	: Skill = {level: 1, xp : 0},	
		public arts 	: Skill = {level: 1, xp : 0},
		public fitness	: Skill = {level: 1, xp : 0}
	){}
}

export class Skill {
	public constructor(
		public level : number = 0, 
		public xp 	 : number = 0
	){}
}