export class Job {
	public constructor(
		public name?				: string,
		public skillsForPromotion?	: any,
		public salary?				: number,
		public hours?				: any,
		public rank 				: number = 0
	) {}
}


const allJobs = {
	chef :[
		new Job('Kitchen Cleaner', 	{}, 			80, 1),
	   	new Job('Cook', 			{cooking : 1}, 150, 2),
	   	new Job('Su-Chef', 			{cooking : 3}, 240, 3),
	   	new Job('Chef', 			{cooking : 4}, 300, 4),
	   	new Job('Resturaunt owner', {cooking : 5}, 400, 5)
	],

	military : [
		new Job('Trainee', 			{}, 			 70, 1),
	   	new Job('Sargeant', 		{fitness : 1},	120, 2),
	   	new Job('Special Forces', 	{fitness : 3}, 	150, 3),
	   	new Job('Officer', 			{charisma : 2}, 240, 4),
	   	new Job('General', 			{charisma : 3}, 350, 5)
	],
	
	artist : [
		new Job('Painting Student', {},				 50, 1),
	   	new Job('Painter', 			{arts : 2},		120, 2),
	   	new Job('Painting Teacher', {arts : 3}, 	150, 3),
	   	new Job('Arts Inspirator', 	{arts : 2}, 	240, 4),
	   	new Job('Master of arts', 	{arts : 5}, 	400, 5)
	],

	teacher: [
		new Job('Teaching Student', {},				 50, 1),
	   	new Job('Teacher', 			{arts : 2},		120, 2),
	   	new Job('High School teacher', {arts : 3}, 	150, 3),
	   	new Job('Professor',	 	{arts : 2}, 	240, 4),
	   	new Job('University Dean', 	{arts : 5}, 	380, 5)
	]
	
}