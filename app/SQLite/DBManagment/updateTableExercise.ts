import Configuration from '@/SQLite/DBManagment/сonfiguration';
import { IExercise } from '@/data/dataStartExercise';
import DBManagment from '../DBManagment';


export const updateTableExercise = async (data: IExercise): Promise<boolean> => {
    /**
     * Начальная команда для SQL по добавлению данных.
     */
    let commandStart: string = `UPDATE ${Configuration.TABLE_EXERCISE} SET `;

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

    await DBManagment.inset(command);

    //console.log('COM >>>', command);
    return true;
}