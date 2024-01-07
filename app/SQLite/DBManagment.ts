import { IExercise } from './../data/dataStartExercise';
import { IConfiguration } from "./DBManagment/сonfiguration";

import Configuration from "./DBManagment/сonfiguration";
import checkExistenceDataBase from "./DBManagment/checkExistenceDataBase";
import createDataBase from "./DBManagment/createDataBase";
import viewFolders from "./DBManagment/viewFolders";
import select from "./DBManagment/select";
import inset from "./DBManagment/inset";
import deleteData from "./DBManagment/deleteData";
import showAllTable from "./DBManagment/showAllTable";
import addDataStartInTableDays from "./DBManagment/addDataStartInTableDays";
import addDataStartInTableExercise from "./DBManagment/addDataStartInTableExercise";
import { updateTableExercise } from "./DBManagment/updateTableExercise";

interface IDBManagment {
    /**
     * Обьект с именем базы данных, именами таблиц.
     */
    Configuration: IConfiguration;
    /**
     * @function
     * Проверка сушествования базы данных.
     * - Проверяет сушествование базы данных с именем указанным в "Configuration.DB_NAME".
     * @example await checkExistenceDataBase()
     * @returns {Promise<boolean>} Вернет promise, с дальнейшим возвратом true/false.
     */
    checkExistenceDataBase: Function;
    /**
     * @function
     * - Создание базы данных с указанным именем в: "Configuration.DB_NAME".
     * - Cоздание в ней таблицы с именем в : "Configuration.START_DATA_BASE".
     * - Условие: сработает, если базы данных с таким именем нет.
     * @example await createDataBase()
     */
    createDataBase: Function;
    /**
     * @function
     * Вывод в консоль файлов внутри папки.
     * @param folder Папка с которой выводим данные, без значения будет показано содержимое корневой папки.
     * @example await viewFolders(folder)
     */
    viewFolders: Function;
    /**
     * @function
     * Вывод данных из таблицы.
     * @param table Имя таблицы.
     * @example await select(table)
     * @returns Вывод данных в console.log().
     */
    select: Function;
    /**
     * @function
     * Выполнение команд SQL.
     * @param command Команда выполнения SQL.
     * @example await inset(command)
     * @returns Promise > Данные запроса.
     */
    inset: Function;
    /**
     * @function
     * Удаление данных.
     * @param name Имя для удаления.
     * @example await deleteDataBase(name)
     * @returns Вывод в console.log() содержимого папки с базами данных.
     */
    deleteData: Function;
    /**
     * @function
     * Показ всех сушествуюших таблиц в базе данных.
     * @example await showAllTable()
     * @returns Вывод в console.log() массива имен всех существуюших таблиц, кроме системных.
     */
    showAllTable: Function;
    /**
     * @function
     * Добавление начальных данных в таблицу с именем в: 
     * - "Configuration.TABLE__DAYS".
     * @example await addDataStartInTableDays()
     */
    addDataStartInTableDays: Function;
    /**
     * @function
     * Добавление начальных данных в таблицу с именем в: 
     * - "Configuration.TABLE_EXERCISE".
     * @example await addDataStartInTableExercise()
     */
    addDataStartInTableExercise: () => Promise<void>;
    /**
     * @function
     * Сохранение в BD данных дня о упражнениях.
     * @param dataArray Массив с обьектами упражнений.
     * @returns {Promise<boolean>} true: добавление прошло без ошибок, false: c ошибками.
     */
    updateTableExercise: (dataArray: IExercise[]) => Promise<boolean>;
}


const DBManagment: IDBManagment = {
    Configuration,
    checkExistenceDataBase,
    createDataBase,
    viewFolders,
    select,
    inset,
    deleteData,
    showAllTable,
    addDataStartInTableDays,
    addDataStartInTableExercise,
    updateTableExercise
}

export default DBManagment;

