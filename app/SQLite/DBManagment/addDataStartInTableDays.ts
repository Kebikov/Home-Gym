import { DATA_DAYS } from "@/data/dataDays"
import Configuration from "./сonfiguration";
import checkExistenceDataBase from "./checkExistenceDataBase";
import * as SQLite from 'expo-sqlite';

/**
 * @function
 * Добавление начальных данных в таблицу с именем в:
 * - "Configuration.TABLE__DAYS".
 * - Условие: сработает, если таблица пустая, в ней нет данных.
 * @example await addDataStartInTableDays()
 */
const addDataStartInTableDays = async () => {
    /**
     * Команда для SQL по добавлению данных.
     */
    let commandStart: string = `INSERT INTO ${Configuration.TABLE__DAYS} (day, img, date, title, description, lastExercise) VALUES `;

    DATA_DAYS.forEach(item => {
        commandStart += `("${item.day}", "${item.img}", "${item.date}", "${item.title}", "${item.description}", "${item.lastExercise ? 1 : 0}"),`;
    });

    // Удаление зарпятой в конце команды.
    let command = commandStart.slice(0, -1);

    const isExistTable = await checkExistenceDataBase();

    if (!isExistTable) {
		console.log(`База данных ${Configuration.DB_NAME} не сушествует.`);
		return;
	}

    const db = SQLite.openDatabase(Configuration.DB_NAME);

    db.transaction(tx => {
		tx.executeSql(
			`SELECT * FROM ${Configuration.TABLE__DAYS}`,
			[],
			(tx, { rows }) => {
				const data = rows;
				console.log('Data >>>', data._array);
                if(data.length === 0) {
                    tx.executeSql(
                        `${command}`,
                        [],
                        () => {},
                        (_, { message }) => {
                            console.log('Error in function select >>>', message);
                            return false;
                        }
                    );
                }
			},
			(_, { message }) => {
				console.log('Error in function select >>>', message);
				return false;
			}
		);
	});

}

export default addDataStartInTableDays;