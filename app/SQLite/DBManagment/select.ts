import checkExistenceDataBase from "./checkExistenceDataBase";
import * as SQLite from 'expo-sqlite';
import Configuration from "./сonfiguration";

/**
 * @function
 * Вывод данных из таблицы.
 * @param table Имя таблицы.
 * @example await select(table)
 * @returns Вывод данных в console.log().
 */
const select = async (table: string) => {
	const isExistTable = await checkExistenceDataBase();

	if (!isExistTable) {
		console.log(`Таблица: ${table}, не существует.`);
		return;
	}

	const db = SQLite.openDatabase(Configuration.DB_NAME);

	db.transaction(tx => {
		tx.executeSql(
			`SELECT * FROM ${table}`,
			[],
			(_, { rows }) => {
                console.log(111);
				const data = rows;
				console.log('Data >>>', data._array);
                return data._array;
			},
			(_, { message }) => {
				console.log('Error in function select >>>', message);
				return false;
			}
		);
	});

    console.log(222);
};

export default select;