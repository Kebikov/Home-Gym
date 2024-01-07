import { DATA_START_EXERCISE } from "@/data/dataStartExercise";
import Configuration from "./сonfiguration";
import checkExistenceDataBase from "./checkExistenceDataBase";
import * as SQLite from 'expo-sqlite';

/**
 * @function
 * Добавление начальных данных в таблицу с именем в: 
 * - "Configuration.TABLE_EXERCISE".
 * - Условие: сработает, если таблица пустая, в ней нет данных.
 * @example await addDataStartInTableExercise()
 */
const addDataStartInTableExercise = async (): Promise<void> => {
    /**
     * Команда для SQL по добавлению данных.
     */
    let commandStart: string = `INSERT INTO ${Configuration.TABLE_EXERCISE} 
        (day, exercise, title, description, weightNeck, weightOne, weightTwo, amount, amountExercise, isUp, img, burpee) 
        VALUES `;

    DATA_START_EXERCISE.forEach(item => {
        commandStart += `(
            "${item.day}", 
            "${item.exercise}", 
            "${item.title}", 
            "${item.description}", 
            "${item.weightNeck}", 
            "${item.weightOne}",
            "${item.weightTwo}",
            "${item.amount}",
            "${item.amountExercise}",
            "${item.isUp}",
            "${item.img}",
            "${item.burpee}"),`;
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
			`SELECT * FROM ${Configuration.TABLE_EXERCISE}`,
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

export default addDataStartInTableExercise;