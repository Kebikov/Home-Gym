import checkExistenceDataBase from "./checkExistenceDataBase";
import Configuration from "./сonfiguration";
import * as SQLite from 'expo-sqlite';
import createDataBase from "./createDataBase";

/**
 * @function
 * Выполнение команд SQL.
 * @param command Команда выполнения SQL.
 * @example await inset(command)
 * @returns Promise > Данные запроса.
 */
export const inset = (command: string):Promise<unknown> => {
    return new Promise((resolve, reject) => {
        checkExistenceDataBase()
            .then(isExistTable => {
                if(!isExistTable) {
                    reject(null);
                    return;
                }

                const db = SQLite.openDatabase(Configuration.DB_NAME);

                db.transaction(tx => {
                    tx.executeSql(
                        `${command}`,
                        [],
                        (_, { rows }) => {
                            resolve(rows._array);
                        },
                        (_, { message }) => {
                            console.log(message);
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

export default inset;