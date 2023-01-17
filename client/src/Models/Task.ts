export class Task {
	public constructor(
		public name: String = "",
		public icon: String = "",
		public fn?: any,
		public key: string = (+new Date() * Math.random())
			.toString(36)
			.substring(0, 6)
	) {}
}
