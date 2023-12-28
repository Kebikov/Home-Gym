/**
 * @function
 * Определение веса блинов из строки.
 * - Сплит строки по "+" в массив.
 * - Сложение веса значений массива в зависимости от веса блинов.
 * @param str Строка с весом блинов, в формате "20+10+...".
 * @example calculationTotalWeight(#);
 * @returns {number} Сумарный вес.
 */
const calculationTotalWeight = (str: string): number => {
	const array = str.split('+');
	const resalt = array.reduce((resalt, item) => {
		let weight: number;
		switch (item) {
			case '4':
				weight = 4.1;
			case '3':
				weight = 3.6;
			case '2':
				weight = 3.1;
			case '1':
				weight = 1.6;
			case '0':
				weight = 0.5;
			default:
				weight = Number(item);
		}
		return resalt + weight;
	}, 0);

	return resalt;
};

export default calculationTotalWeight;
