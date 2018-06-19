/**
 * Challenge #364 - Create a Dice Roller
 * https://www.reddit.com/r/dailyprogrammer/comments/8s0cy1/20180618_challenge_364_easy_create_a_dice_roller/
 */

const inputs = ['5d12', '6d4', '1d2', '1d8', '3d6', '4d20', '100d100'];

class DiceRoller {
	constructor(inputs) {
		this.inputs = inputs;
	}

	_random(max) {
		return  Math.floor(Math.random() * max) + 1;
	}

	_result(rolls) {
		const rollTotal = rolls.reduce((a, b) => a + b, 0);
		const rollResults = rolls.join(', ');

		console.log(`${rollTotal}: [${rollResults}]`);
	}	
	
	_rollAll() {
		this.inputs.forEach(input => this._roll(input));
	}

	_roll(input) {
		const [dice, sides] = input.split('d');
		const rolls = [];
	
		for (let index = 0; index < dice; index++) {
			rolls.push(this._random(sides));
		}
		
		this._result(rolls);
	}
}

const diceRoller = new DiceRoller(inputs);
diceRoller._rollAll();

export default diceRoller;
