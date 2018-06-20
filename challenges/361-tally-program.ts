/**
 * Challenge #361 - Tally Program
 * https://www.reddit.com/r/dailyprogrammer/comments/8jcffg/20180514_challenge_361_easy_tally_program/
 */

{
	const matchReducer: any = (players: any, point: string) => {
		const player = point.toLowerCase();

		if (!players.hasOwnProperty(player)) {
			Object.defineProperty(players, player, {
				enumerable: true,
				value: 0,
				writable: true
			});
		}

		// Add a point if lowercase or subtract if uppercase
		player === point ? players[player]++ : players[player]--;

		return players;
	};

	const matchResults: any = (input: string): string => {
		const results = input
			.split('')
			.sort()
			.reduce(matchReducer, {});

		return JSON.stringify(results);
	};

	console.log(matchResults('EbAAdbBEaBaaBBdAccbeebaec'));
}
