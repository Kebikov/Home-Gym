import Configuration from '@/SQLite/DBManagment/сonfiguration';


export const updateTableExercise = () => {
    /**
     * Начальная команда для SQL по добавлению данных.
     */
    let commandStart: string = `UPDATE ${Configuration.TABLE_EXERCISE} 
    (day, exercise, title, description, weightNeck, weightOne, weightTwo, amount, amountExercise, isUp, img, burpee) 
    VALUES `;
}