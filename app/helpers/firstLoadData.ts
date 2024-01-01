//* SQL
import DBManagment from '@/SQLite/DBManagment';
import COMMAND_SQL from '@/SQLite/CommandSQL/commandSQL';
import Configuration from '@/SQLite/DBManagment/сonfiguration';



/**
 * @function
 * Удаление данных из базы данных.
 */
export const deleteData = async (): Promise<boolean> => {
    try {
        //* Просмотр созданных файлов
        await DBManagment.deleteData(Configuration.DB_NAME);

        //* Просмотр созданных файлов
        await DBManagment.viewFolders('SQLite');
        //* Просмотр созданных таблиц в базе данных
        await DBManagment.showAllTable();
        return true; 
    }catch (error) {
        console.log('Error in Function  >>> ', error);
        return false;
    }
};


/**
 * @function
 * Загрузка начальных данных в базу данных.
 */
export const createData = async (): Promise<boolean> => {
    try {

        // Проверка, есть ли база данных.
        const isExisted = await DBManagment.checkExistenceDataBase();
        // Если есть, прекрашаем работу функции.
        if(isExisted) return true;
        // Создание базы данных.
        await DBManagment.createDataBase();

        // Создание таблицы с днями.
        await DBManagment.inset(COMMAND_SQL.createTableDays);

        // Создание таблицы с упражнениями.
        await DBManagment.inset(COMMAND_SQL.createTableExercise);

        // Заполнение начальными данными таблицы с днями.
        await DBManagment.addDataStartInTableDays();

        // Заполнение начальными данными таблицы с упражнениями.
        await DBManagment.addDataStartInTableExercise();

        //* Просмотр созданных файлов
        await DBManagment.viewFolders('SQLite');
        
        //* Просмотр созданных таблиц в базе данных
        await DBManagment.showAllTable();  

        return true;
    }catch (error) {
        console.log('Error in Function  >>> ', error);
        return false;
    }
};


