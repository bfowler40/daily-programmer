/**
 * Challenge from Kattis
 * https://open.kattis.com/problems/encodedmessage
 */

{
	type Decode = (encoded: string) => string;

	/**
	 * Decode the Message
	 *
	 * @param {string} encoded - the text to be decoded
	 * @return {string}
	 */
	const decode: Decode = (encoded: string): string => {
		const sqr: number = Math.sqrt(encoded.length);
		const decodedArray: string[][] = [...Array(sqr)].map(e => []);

		encoded.split('').forEach((letter, index) => {
			decodedArray[(sqr - 1) - (index % sqr)].push(letter);
		});

		return decodedArray.map(e => e.join('')).join('');
	};

	console.log(decode('RSTEEOTCP'));
	console.log(decode('eedARBtVrolsiesuAoReerles'));
	console.log(decode('EarSvyeqeBsuneMa'));
}
