import Configuration from '@/SQLite/DBManagment/сonfiguration';
import { IExercise } from '@/data/dataStartExercise';
import inset from './inset';

/**
 * @function
 * Сохранение в BD данных дня о упражнениях.
 * @param dataArray Массив с обьектами упражнений.
 * @returns {Promise<boolean>} true: добавление прошло без ошибок, false: c ошибками.
 */
export const updateTableExercise = (dataArray: IExercise[]): Promise<boolean> => {
    /**
     * Начальная команда для SQL по добавлению данных.
     */
    let commandStart: string = `UPDATE ${Configuration.TABLE_EXERCISE} SET `;

    return Promise.all(
        dataArray.map(async data => {
            
            let commandData: string = `
                "day" = "${data.day}",
                "exercise" = "${data.exercise}",
                "title" = "${data.title}",
                "description" = "${data.description}",
                "weightNeck" = "${data.weightNeck}",
                "weightOne" = "${data.weightOne}",
                "weightTwo" = "${data.weightTwo}",
                "amount" = ${data.amount},
                "amountExercise" = ${data.amountExercise},
                "isUp" = "${data.isUp}",
                "img" = ${data.img},
                "burpee" = ${data.burpee}
                WHERE 
                "id" = ${data.id}
            `;

            const command = commandStart + commandData;
            await inset(command);
        })
    )
    .then(() => {
        return true;
    })
    .catch(error => {
        console.error('Error in function updateTableExercise >>> ', error);
        return false;
    });

}