import checkExistenceDataBase from "./checkExistenceDataBase";
import Configuration from "./сonfiguration";
import * as SQLite from 'expo-sqlite';
import createDataBase from "./createDataBase";

/**
 * @function
 * Выполнение команд SQL.
 * @param command Команда выполнения SQL.
 * @example await inset(command)
 * @returns Вывод в консоль результата выполнения или ошибки выполнения.
 */
export const inset = async (command: string) => {

	const dirInfo = await checkExistenceDataBase();

	if (!dirInfo) {
		await createDataBase();
	}

	const db = SQLite.openDatabase(Configuration.DB_NAME);

	db.transaction(tx => {
		tx.executeSql(
			`${command}`,
			[],
			(_, { rows }) => {
				const data = rows;
				console.log(data);
			},
			(_, { message }) => {
				console.log(message);
				return false;
			}
		);
	});
    
};

export default inset;