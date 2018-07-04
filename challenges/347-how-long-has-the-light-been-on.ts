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
			const keys: number = Math.max(
				...[].concat(...this.scenario)
			);
			const lights: any = new Array(keys + 1).fill(false, 0, keys + 1);

			this.scenario.forEach(person => {
				const [enter, leave] = person;

				lights.fill(true, enter, leave);
			});

			const x = lights.reduce((a, b) => {
				if (b) {
					a += 1;
				}

				return a;
			}, 0);

			console.log(x);
			return 1;
		}
	}

	const scenario1 = new Room([[1, 3], [2, 3], [4, 5]]);
	console.log(scenario1.hours);
}
