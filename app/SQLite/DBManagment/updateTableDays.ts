import inset from "./inset";
import Configuration from "./сonfiguration";
import { IDataDays } from "@/data/dataDays";

export interface IUpdateTableDays extends Pick<IDataDays, 'date' | 'lastExercise' | 'id'> {}

/**
 * Обновление дня в таблице дней.
 * - Установка даты последней теренировки.
 * - Установка что это крайняя тренировка.
 * @param data Обьект с данными для обновления.{id, date, lastExercise}
 * @returns {Promise<boolean>}
 */
const updateTableDays = async (data: IUpdateTableDays): Promise<boolean> => {
    try {

        await inset(`UPDATE ${Configuration.TABLE__DAYS} SET "lastExercise" = 0`);

        /**
         * Начальная команда для SQL по добавлению данных.
         */
        let commandStart: string = `UPDATE ${Configuration.TABLE__DAYS} SET `;

        let commandData: string = `
            "date" = "${data.date}",
            "lastExercise" = ${data.lastExercise}
            WHERE 
            "id" = ${data.id}
        `;

        await inset(commandStart + commandData);

        return true;

    }catch (error) {
        console.log('Error in Function updateTableDays >>> ', error);
        return false;
    }
}

export default updateTableDays;