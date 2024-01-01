import * as FileSystem from 'expo-file-system';
import Configuration from './сonfiguration';

/**
 * @function
 * Проверка сушествования базы данных.
 * - Проверяет сушествование базы данных с именем указанным в "Configuration.DB_NAME".
 * @example await checkExistenceDataBase()
 * @returns {Promise<boolean>} Вернет promise, с дальнейшим возвратом true/false.
 */

const checkExistenceDataBase = async (): Promise<boolean> => {
	/**
	 * Расположение каталога.
	 * @returns {string} file:///data/user/0/host.exp.exponent/files/SQLite/
	 */
	const dbDir = FileSystem.documentDirectory + 'SQLite/';
	/**
	 * Результат проверки сушествования базы данных.
	 * @returns {Object} {"exists": false, "isDirectory": false}
	 */
	const dirInfo = await FileSystem.getInfoAsync(dbDir + Configuration.DB_NAME);
	if (dirInfo.exists) {
        console.log(`База данных ${Configuration.DB_NAME} сушествует.`);
		return true;
	} else {
        console.log(`База данных ${Configuration.DB_NAME} не сушествует.`);
		return false;
	}
};

export default checkExistenceDataBase;