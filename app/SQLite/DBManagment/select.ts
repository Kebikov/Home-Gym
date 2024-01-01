import checkExistenceDataBase from './checkExistenceDataBase';
import * as SQLite from 'expo-sqlite';
import Configuration from './сonfiguration';

/**
 * @function
 * Вывод данных из таблицы.
 * @param table Имя таблицы.
 * @example await select(table)
 * @returns Promise > Данные с таблицы.
 */
const select = async (table: string) => {
	return new Promise((resolve, reject) => {
		checkExistenceDataBase()
            .then(isExistTable => {
                if (!isExistTable) {
                    console.log(`Таблица: ${table}, не существует.`);
                    resolve(null);
                    return;
                }

                const db = SQLite.openDatabase(Configuration.DB_NAME);

                db.transaction(tx => {
                    tx.executeSql(
                        `SELECT * FROM ${table}`,
                        [],
                        (_, { rows }) => {
                            const data = rows;
                            console.log('Data >>>', data._array);
                            resolve(rows._array);
                        },
                        (_, { message }) => {
                            console.log('Error in function select >>>', message);
                            reject(message);
                            return false;
                        }
                    );
                });
            })
            .catch(error => {
                console.error(error);
                reject(error);
            });
	});
};

export default select;
