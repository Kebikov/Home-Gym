import * as SQLite from 'expo-sqlite';
import Configuration from './сonfiguration';
import checkExistenceDataBase from './checkExistenceDataBase';

/**
 * @function
 * - Создание базы данных с указанным именем в: "Configuration.DB_NAME".
 * - Cоздание в ней таблицы с именем в : "Configuration.START_DATA_BASE".
 * - Условие: сработает, если базы данных с таким именем нет.
 * @example await createDataBase()
 */
const createDataBase = async () => {

    const isExisted = await checkExistenceDataBase();

    if(isExisted) {
        return;
    }

    const db = SQLite.openDatabase(Configuration.DB_NAME);

    db.transaction(tx => {
        tx.executeSql(`
            CREATE TABLE IF NOT EXISTS ${Configuration.START_DATA_BASE}
            (
                ${Configuration.START_DATA_BASE}_id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT
            )
        `,
            [],
            () => {},
            (_, {message}) => {
                console.log('Error >>>', message);
                return false;
            }
        );
    });

};

export default createDataBase;