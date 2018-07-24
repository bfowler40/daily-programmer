/**
 * Challenge from Kattis
 * https://open.kattis.com/problems/tarifa
 */

{
	type AvailableData = (input: number[]) => number;

	/**
	 * Available Data
	 * Calculate and return remaining data
	 *
	 * @param {number[]}
	 * @return {numder}
	 */
	const availableData: AvailableData = ([data, , ...usage]): number => {
		return usage.reduce(
			(total: number, month: number): number => (total += data - month),
			data
		);
	};

	console.log(availableData([10, 3, 4, 6, 2]));
	console.log(availableData([10, 3, 10, 2, 12]));
	console.log(availableData([15, 3, 15, 10, 20]));
}
