/**
 * Challenge #364 - Create a Dice Roller
 * https://www.reddit.com/r/dailyprogrammer/comments/8s0cy1/20180618_challenge_364_easy_create_a_dice_roller/
 */

const diceBag = ['5d12', '6d4', '1d2', '1d8', '3d6', '4d20', '100d100'];

class DiceRoller {
	protected dice: string[];

	/**
	 * Creare the dice roller
	 * @param {string[]} dice
	 */
	constructor(dice: string[]) {
		this.dice = dice;
	}

	/**
	 * Roll dice on all inputs
	 */
	public rollAll(): void {
		this.dice.forEach((die: string): void => this._roll(die));
	}

	/**
	 * Return a random number
	 * @param {number} max
	 * @return {number} The random number
	 */
	private _random(max: number): number {
		return Math.floor(Math.random() * max) + 1;
	}

	/**
	 * Accumulate the results and log to console
	 * @param {number[]} rolls
	 */
	private _result(rolls: number[]): void {
		const rollTotal: number = rolls.reduce(
			(a: number, b: number): number => a + b,
			0
		);
		const rollResults: string = rolls.join(', ');

		console.log(`${rollTotal}: [${rollResults}]`);
	}

	/**
	 * Roll a die
	 * @param {string} die
	 */
	private _roll(die: string): void {
		const [dice, sides] = die.split('d');
		const rolls: number[] = [];
		let index: number = 0;

		for (index; index < parseInt(dice, 10); index++) {
			const result: number = this._random(parseInt(sides, 10));

			rolls.push(result);
		}

		console.log(`Dice: ${dice} | Sides ${sides}`);
		this._result(rolls);
	}
}

const diceRoller: any = new DiceRoller(diceBag);
diceRoller.rollAll();

export default diceRoller;
