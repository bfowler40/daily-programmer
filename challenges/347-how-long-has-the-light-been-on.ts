/**
 * Challenge #347 - How long has the light been on
 * https://www.reddit.com/r/dailyprogrammer/comments/7qn07r/20180115_challenge_347_easy_how_long_has_the/
 */

{
	class Room {
		protected scenario: number[][];

		/**
		 * Create the 'room'
		 * @param {number[][]} scenario
		 */
		constructor(scenario: number[][]) {
			this.scenario = scenario;
		}

		/**
		 * Hours
		 * Calculate how many hours the light has been on
		 *
		 * @return {number}
		 */
		public hours(): number {
			/** Calculate how long our array needs to be based on the largest int in the input */
			const keys: number = Math.max(...[].concat(...this.scenario));

			return (
				this.scenario
					/** Reduce to an array filled with true/false values based on when people enter and exit */
					.reduce(
						(room: boolean[], people: number[]): boolean[] =>
							room.fill(true, ...people),
						new Array(keys + 1).fill(false, 0, keys + 1)
					)
					/** Reduce the new array based on true values */
					.reduce(
						(count: number, room: boolean[]): number =>
							room ? (count += 1) : count
					)
			);
		}
	}

	const scenario1 = new Room([[1, 3], [2, 3], [4, 5]]);
	const scenario2 = new Room([[2, 4], [3, 6], [1, 3], [6, 8]]);
	const scenario3 = new Room([[6, 8], [5, 8], [8, 9], [5, 7], [4, 7]]);

	console.log(scenario1.hours());
	console.log(scenario2.hours());
	console.log(scenario3.hours());
}
