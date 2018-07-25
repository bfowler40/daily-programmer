/**
 * Challenge from Kattis
 * https://open.kattis.com/problems/spavanac
 */

{
	type ResetAlarm = (input: number[]) => number[];

	/**
	 * Reset Alarm
	 * Return the time (in 24 hour notation) 45 minutes earlier than the input
	 * @param {number[]}
	 * @return {number[]}
	 */
	const resetAlarm: ResetAlarm = ([hour, minute]): number[] => {
		const now: Date = new Date();
		const alarm: Date = new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate(),
			hour,
			minute
		);

		alarm.setMinutes(alarm.getMinutes() - 45);

		return [alarm.getHours(), alarm.getMinutes()];
	};

	console.log(resetAlarm([10, 10]));
	console.log(resetAlarm([0, 30]));
	console.log(resetAlarm([23, 40]));
}
