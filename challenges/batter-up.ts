/**
 * Challenge from Kattis
 * https://open.kattis.com/problems/batterup
 */

{
	type CalcBattingAverage = (input: number[]) => number;

	/**
	 * Calulate Batting Average
	 * Batting average less walks
	 * @param {number[]} batter
	 * @return {number}
	 */
	const calcBattingAverage: CalcBattingAverage = (
		batter: number[]
	): number => {
		const recordLessWalks: number[] = batter.filter(
			(result: number) => result >= 0
		);
		const recordSum: number = recordLessWalks.reduce(
			(total: number, result: number) => total + result,
			0
		);

		return recordSum / recordLessWalks.length;
	};

	console.log(calcBattingAverage([3, 0, 2]));
	console.log(calcBattingAverage([1, -1, 4]));
	console.log(calcBattingAverage([-1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 1]));
}
