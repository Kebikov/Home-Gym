
/**
 * Получение текушей даты в формате массива.
 * @example getCurrentDateInFormatArray()
 * @returns {string[]} ["2024", "01", "08"]
 */
const getCurrentDateInFormatArray = () => {
    /**
     * Текушяя дата строкой.
     * @example "2024-01-08T13:17:21.153Z"
     */
    const date: string = new Date().toISOString();
    /**
     * Массив из строки разспличеный по "Т".
     * @example ["2024-01-08", "13:18:24.209Z"]
     */
    const arraySplitT: string[] = date.split('T');
    /**
     * Массив из строки разспличеный по "-".
     * @example  ["2024", "01", "08"]
     */
    const arraySplitMinus: string[] = arraySplitT[0].split('-');

    return arraySplitMinus;
}

export default getCurrentDateInFormatArray;