/**
 * Challenge #349 - Change Calculator
 * https://www.reddit.com/r/dailyprogrammer/comments/7ttiq5/20180129_challenge_349_easy_change_calculator/
 */

{
	/**
	 * Subset
	 * Create subset arrays from all possible combinations
	 * Credit: https://stackoverflow.com/a/42531964
	 *
	 * @param {number[]} arr
	 * @return {any}
	 */
	const arraySubsets: any = (arr: number[]): number[][] => {
		if (arr.length === 1) {
			return [arr];
		} else {
			const subarr: number[][] = arraySubsets(arr.slice(1));

			return subarr.concat(
				subarr.map((e: number[]) => e.concat(arr[0])),
				[[arr[0]]]
			);
		}
	};

	/**
	 * SubsetTotals
	 * Create an array with the totals for each subset
	 *
	 * @param {number[][]} subsets
	 * @return {number[]}
	 */
	const subsetTotals: any = (subsets: number[][]): number[] => {
		return subsets.map(set =>
			set.reduce((a: number, b: number): number => a + b, 0)
		);
	};

	/**
	 * All Solutions
	 * Create an array with the subset of each solution
	 *
	 * @param {number[]} totals
	 * @param {number} change
	 * @param {number[][]} coinSubsets
	 * @return {number[]}
	 */
	const formAllSolutions: any = (
		totals: number[],
		change: number,
		coinSubsets: number[][]
	): number[] => {
		return totals.reduce((results: any, total: number, index: number) => {
			if (total === change) {
				results.push(coinSubsets[index]);
			}
			return results;
		}, []);
	};

	/**
	 * Map Solution Coin Subsets
	 */

	/**
	 * Best solution
	 * Find the first solution using the smallest amount of coins
	 *
	 * @param {number[][]} solutionSubsets
	 * @return {any}
	 */
	const findBestSolution: any = (solutionSubsets: number[][]): any => {
		return solutionSubsets.reduce(
			(result: number[], solution: number[]) => {
				if (solution.length < result.length) {
					result = solution;
				}
				return result;
			},
			new Array(10)
		);
	};

	/**
	 * Transaction
	 *
	 * @param {number[]} input
	 * @param {any} output
	 * @return {any}
	 */
	const transaction: any = (input: number[], output: any) => {
		const change: number = input[0];
		const coins: number[] = input.slice(1);
		const coinSubsets: number[][] = arraySubsets(coins);
		const coinTotals: any = subsetTotals(coinSubsets);
		const allSolutions: number[] = formAllSolutions(coinTotals, change, coinSubsets);
		const solution: number[] = findBestSolution(allSolutions, output);

		// console.log(change, coins);
		// console.log('subsets', coinSubsets);
		// console.log('totals', coinTotals);
		// console.log('all solutions', allSolutions);
		// console.log('solution subsets', solutionSubsets);
		// console.log('best solution', solution);

		return allSolutions.length !== 0 && solution.length < output
			? `Change: ${solution.join(' + ')} = ${change}`
			: 'No solutions available';
	};

	console.log(transaction([150, 100, 50, 50, 50, 50], 5));
	console.log(transaction([130, 100, 20, 18, 12, 5, 5], 6));
	console.log(transaction([200, 50, 50, 20, 20, 10], 5));
}
