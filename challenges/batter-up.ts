/**
 * Challenge from Kattis
 * https://open.kattis.com/problems/batterup
 */

{
	type CalcBattingAverage = (input: number[]) => number;

	const calcBattingAverage: CalcBattingAverage = (
		batter: number[]
	): number => {
		const recordLessWalks: number[] = batter.filter(
			(result: number) => result >= 0
		);
		const recordSum: number = recordLessWalks.reduce(
			(result: number, total: number) => result + total,
			0
		);

		return recordSum / recordLessWalks.length;
	};

	console.log(calcBattingAverage([3, 0, 2]));
	console.log(calcBattingAverage([1, -1, 4]));
	console.log(calcBattingAverage([-1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 1]));
}
