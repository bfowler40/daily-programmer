/**
 * Challenge #347 - How long has the light been on
 * https://www.reddit.com/r/dailyprogrammer/comments/7qn07r/20180115_challenge_347_easy_how_long_has_the/
 */

{
	class Room {
		protected scenario: number[][];

		constructor(scenario) {
			this.scenario = scenario;
		}

		get hours() {
			const keys: number = Math.max(...[].concat(...this.scenario));

			return this.scenario
				.reduce((room, people) => room.fill(true, ...people), new Array(keys + 1).fill(false, 0, keys + 1))
				.reduce((count, room) => (room ? (count += 1) : count));
		}
	}

	const scenario1 = new Room([[1, 3], [2, 3], [4, 5]]);
	console.log(scenario1.hours);
}
