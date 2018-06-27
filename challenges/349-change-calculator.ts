/**
 * Challenge #349 - Change Calculator
 * https://www.reddit.com/r/dailyprogrammer/comments/7ttiq5/20180129_challenge_349_easy_change_calculator/
 *
 * The solution has been refragmented - will check back to see whether it is readable
 */

{
	/**
	 * Subset
	 * Create subset arrays from all possible combinations
	 * Credit: https://stackoverflow.com/a/42531964
	 *
	 * @param {number[]} arr
	 * @return {number[][]}
	 */

	type ArraySubsets = (arr: number[]) => number[][];

	const arraySubsets: ArraySubsets = (arr: number[]): number[][] => {
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
	 * Get Change
	 *
	 * Map subsets to an array of totals
	 * Reduce subset totals to those which equal the change to give
	 * Reduce to the first subset with the least coins to handover
	 *
	 * @param {number[][]} subsets
	 * @param {number} balance
	 * @param {number} limit
	 * @return {number[]}
	 */

	type GetChange = (
		subsets: number[][],
		balance: number,
		limit: number
	) => number[];

	const getChange: GetChange = (
		subsets: number[][],
		balance: number,
		limit: number
	): number[] => {
		return subsets
			.map(
				(set: number[]): number =>
					set.reduce(
						(total: number, coin: number): number => total + coin,
						0
					)
			)
			.reduce((results: any, total: number, index: number): number[] => {
				if (total === balance) {
					results.push(subsets[index]);
				}
				return results;
			}, [])
			.reduce((result: number[], solution: number[]): number[] => {
				if (solution.length < result.length) {
					result = solution;
				}
				return result;
			}, new Array(limit));
	};

	/**
	 * Transaction
	 *
	 * @param {number[]} input
	 * @param {any} limit
	 * @return {any}
	 */

	type Transaction = (input: number[], limit: number) => string;

	const transaction: Transaction = (
		input: number[],
		limit: number
	): string => {
		const [balance, ...coins]: any = input;
		const solution: number[] = getChange(
			arraySubsets(coins),
			balance,
			limit
		);

		return solution.length !== 0 && solution[0]
			? `Change: ${solution.join(' + ')} = ${balance}`
			: 'No solutions available';
	};

	console.log(transaction([150, 100, 50, 50, 50, 50], 5));
	console.log(transaction([130, 100, 20, 18, 12, 5, 5], 6));
	console.log(transaction([200, 50, 50, 20, 20, 10], 5));
}
