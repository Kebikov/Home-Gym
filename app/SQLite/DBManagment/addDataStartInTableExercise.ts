import { DATA_START_EXERCISE, IExercise } from "@/data/dataStartExercise";
import Configuration from "./сonfiguration";
import checkExistenceDataBase from "./checkExistenceDataBase";
import * as SQLite from 'expo-sqlite';

/**
 * @function
 * Добавление начальных данных в таблицу с именем в: 
 * - "Configuration.TABLE_EXERCISE".
 * - Условие: сработает, если таблица пустая, в ней нет данных.
 * @param data Массив обьектов занятий, при его передаче данные устанавливаются с него.
 * @example await addDataStartInTableExercise()
 */
const addDataStartInTableExercise = async (data: IExercise[] | null = null): Promise<void> => {
    /**
     * Команда для SQL по добавлению данных.
     */
    let commandStart: string = `INSERT INTO ${Configuration.TABLE_EXERCISE} 
        (day, exercise, title, description, weightNeck, weightOne, weightTwo, amount, amountExercise, isUp, img, burpee) 
        VALUES `;

    console.log('Данные пришли: ', data);
    if(data) {
        commandStart = handleCommand(data, commandStart);
    } else {
        commandStart = handleCommand(DATA_START_EXERCISE, commandStart);
    }

    /**
     * @function
     * Формирование команды SQL для добавления данных в таблицу.
     * @param dataTable Массив обьектов упражнений.
     * @returns {string} Вернет сформированную команду строкой.
     */
    function handleCommand(dataTable: IExercise[], command: string): string {
        dataTable.forEach(item => {
            command += `(
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

        return command;
    }

    console.log('Команда SQL: ',commandStart);

    // Удаление зарпятой в конце команды.
    let command = commandStart.slice(0, -1);

    const isExistTable = await checkExistenceDataBase();

    if (!isExistTable) {
		console.info(`База данных ${Configuration.DB_NAME} не сушествует.`);
		return;
	}

    const db = SQLite.openDatabase(Configuration.DB_NAME);

    db.transaction(tx => {
		tx.executeSql(
			`SELECT * FROM ${Configuration.TABLE_EXERCISE}`,
			[],
			(tx, { rows }) => {
				const data = rows;
                if(data.length === 0) {
                    tx.executeSql(
                        `${command}`,
                        [],
                        () => {},
                        (_, { message }) => {
                            console.error('Error in function select >>>', message);
                            return false;
                        }
                    );
                }
			},
			(_, { message }) => {
				console.error('Error in function select >>>', message);
				return false;
			}
		);
	});

}

export default addDataStartInTableExercise;