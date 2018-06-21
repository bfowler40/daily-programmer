/**
 * Challenge #359 - Regular Paperfold Sequence Generator
 * https://www.reddit.com/r/dailyprogrammer/comments/8g0iil/20180430_challenge_359_easy_regular_paperfold/
 * Recursion idea was from a solution provided
 */

{
	type PaperfoldFunction = (fold: number[], sequences: number) => number[];

	/**
	 * paperfold function
	 *
	 * In each iteration of this process, a 1 is placed at the end of the previous iteration's string,
	 * then this string is repeated in reverse order, replacing 0 by 1 and vice versa.
	 *
	 * @param {number[]} fold
	 * @param {number} sequences
	 */
	const paperfold: PaperfoldFunction = (
		fold: number[] = [1],
		sequences: number = 7
	): number[] => {
		fold.push(
			1,
			...fold
				.slice(0)
				.reverse()
				.map(n => +!n)
		);

		return sequences === 0 ? fold : paperfold(fold, sequences - 1);
	};

	// console.log(paperfold([1], 0));
	console.log(paperfold([1], 1));
	// console.log(paperfold([1], 2));
	// console.log(paperfold([1], 3));
}
