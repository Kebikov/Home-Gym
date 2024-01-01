import checkExistenceDataBase from './checkExistenceDataBase';
import * as SQLite from 'expo-sqlite';
import Configuration from './сonfiguration';

interface IArrayName {
	name: string;
}

/**
 * @function
 * Показ всех сушествуюших таблиц в базе данных.
 * @example await showAllTable()
 * @returns Вывод в console.log() массива имен всех существуюших таблиц, кроме системных.
 */

const showAllTable = async () => {
	const dirInfo = await checkExistenceDataBase();

	if (!dirInfo) {
		console.log('Нет базы данных и таблиц в ней.');
		return;
	}

	const db = SQLite.openDatabase(Configuration.DB_NAME);

	db.transaction(tx => {
		tx.executeSql(
			`SELECT name FROM sqlite_master WHERE type='table'`,
			[],
			(_, { rows }) => {
				const arrayDB: Array<IArrayName> = rows._array;
				const currentArrayTables: Array<string> = [];

                arrayDB.forEach(item => {
					if (item.name !== 'android_metadata' && item.name !== 'sqlite_sequence') {
                        currentArrayTables.push(item.name);
					}
				});

				console.log('Cушествуюшее таблицы в базе данных:', currentArrayTables);
			},
			(_, { message }) => {
				console.log(message);
				return false;
			}
		);
	});
};

export default showAllTable;