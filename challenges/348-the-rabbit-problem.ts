/**
 * Challenge #348 - The Rabbit Problem
 * https://www.reddit.com/r/dailyprogrammer/comments/7s888w/20180122_challenge_348_easy_the_rabbit_problem/
 */

{
	interface IOffspring {
		newbornMales: number;
		newbornFemales: number;
	}

	/** Rabbit Class */
	class Rabbits {
		protected _ageMonthsDie: number = 96;
		protected _count: number[] = new Array(this._ageMonthsDie).fill(
			0,
			0,
			this._ageMonthsDie
		);
		protected _deceased: number = 0;
		protected _initialRabbitAgeMonths: number = 2;
		protected _populationGoal: number;
		protected _populationCurrent: number = 0;

		/**
		 * Rabbits constructor
		 *
		 * @param {number} initRabbits
		 * @param {number} populationGoal
		 */
		constructor(initRabbits: number, populationGoal: number) {
			/** initial rabbits are 2 months old */
			this._count[this._initialRabbitAgeMonths - 1] = initRabbits;
			this._populationGoal = populationGoal;
		}

		/**
		 * Rabbit count
		 *
		 * @return {number}
		 */
		get count(): number {
			return this._count.reduce(
				(accumulator: number, rabbit: number) => accumulator + rabbit,
				0
			);
		}

		/**
		 * Deceased
		 *
		 * @return {number}
		 */
		get deceased(): number {
			return this._deceased;
		}

		/**
		 * Age the Rabbits
		 *
		 * @return {void}
		 */
		public age(): void {
			this._deceased += this._count.reverse().shift();
			this._count.reverse().unshift(0);
		}

		/**
		 * Add newborns to count
		 *
		 * @param {number} newborn
		 * @return {void}
		 */
		public newborns(newborn: number): void {
			this._count[0] = newborn;
		}
	}

	/** Female Rabbits are able to breed */
	class FemaleRabbits extends Rabbits {
		protected _ageMonthFertile: number = 5;

		constructor(initRabbits, populationGoal) {
			super(initRabbits, populationGoal);
		}

		/**
		 * Offspring
		 * Calculate how many offspring are produced by fertile females
		 *
		 * @return {IOffspring}
		 */
		public offspring(): IOffspring {
			const numBreaders = this._count
				.slice(this._ageMonthFertile - 1)
				.reduce(
					(accumulator: number, rabbit: number) =>
						accumulator + rabbit,
					0
				);

			return {
				newbornFemales: numBreaders * 9,
				newbornMales: numBreaders * 5
			};
		}
	}

	/**
	 * Rabbit Problem
	 * Determine how many months it takes for rabbits to take over the world
	 *
	 * @param {number[]} init
	 * @return void
	 */

	type RabbitProblem = (init: number[]) => void;

	const rabbitProblem: RabbitProblem = ([
		initalRabbitsMale,
		initalRabbitsFemale,
		dominationPopulation
	]): void => {
		const maleRabbits = new Rabbits(
			initalRabbitsMale,
			dominationPopulation
		);
		const femaleRabbits = new FemaleRabbits(
			initalRabbitsFemale,
			dominationPopulation
		);

		let month: number = -1;
		let rabbitCount: number = 0;
		let rabbitsDeceased: number = 0;

		/** The month loop */
		while (rabbitCount < dominationPopulation) {
			const { newbornMales, newbornFemales } = femaleRabbits.offspring();

			femaleRabbits.age();
			femaleRabbits.newborns(newbornFemales);

			maleRabbits.age();
			maleRabbits.newborns(newbornMales);

			rabbitCount = maleRabbits.count + femaleRabbits.count;
			rabbitsDeceased = maleRabbits.deceased + femaleRabbits.deceased;

			month++;
			console.log('rabbit count', rabbitCount, month);
		}
		console.log(
			`Domination took ${month} months and ${rabbitsDeceased} bunnies didn't make it`
		);
	};

	rabbitProblem([2, 4, 1000000000]);
	rabbitProblem([2, 4, 15000000000]);
}
