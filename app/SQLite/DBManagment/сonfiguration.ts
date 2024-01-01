export interface IConfiguration {
    /**
     * Базы данных.
     */
    DB_NAME: string;

    /**
     * Таблица для старта, пустая таблица для создания базы данных.
     */
    START_DATA_BASE: string;
    /**
     * Таблица дни.
     */
    TABLE__DAYS: string;
    /**
     * Таблица занятий.
     */
    TABLE_EXERCISE: string;
}


const Configuration: IConfiguration = {
	DB_NAME: 'homeGum.sqlite',

    START_DATA_BASE: 'startForCreateDataBase',
	TABLE__DAYS: 'days',
	TABLE_EXERCISE: 'exercise'
};

export default Configuration;