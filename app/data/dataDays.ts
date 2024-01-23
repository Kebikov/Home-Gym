export type TDay = 'DAY_1' | 'DAY_2' | 'DAY_3' | 'DAY_4' | 'DAY_5';

/**
 * @interface
 * Обьект одного дня занятий на стартовой странице.
 */
export interface IDataDays {
    /**
     * Id текушей записи в таблице.
     */
    id?: number;
    /**
     * День занятий.
     * @example "DAY_1" | "DAY_2"  | ...
     */
    day: TDay;
    /**
     * Изображение фоновое.
     */
    img: number;
    /**
     * Дата последнего занятия по данной программе.
     * @example "23.12.2023"
     */
    date: string;
    /**
     * Титульное название для дня занятий.
     */
    title: string;
    /**
     * Описание для дня занятий, внизу блока.
     */
    description: string;
    /**
     * Последний ли это день по которому занимался.
     * @example 0-false, 1-true
     */
    lastExercise: number;
}

/**
 * Массив данный для элементов дней занятий.
 */
export const DATA_DAYS: Array<IDataDays> = [
    {
        day: 'DAY_1',
        img: require(`@/source/img/daysScreen/daysScreen_1.jpg`),
        date: '16.01.2024',
        title: 'Day One',
        description: 'Битепс / Ноги / Грудь',
        lastExercise: 0
    },
    {
        day: 'DAY_2',
        img: require(`@/source/img/daysScreen/daysScreen_2.jpg`),
        date: '17.01.2024',
        title: 'Day Two',
        description: 'Грудь / Битепс / Плечи',
        lastExercise: 0
    },
    {
        day: 'DAY_3',
        img: require(`@/source/img/daysScreen/daysScreen_3.jpg`),
        date: '19.01.2024',
        title: 'Day Three',
        description: 'Битепс / Грудь / Ноги',
        lastExercise: 0
    },
    {
        day: 'DAY_4',
        img: require(`@/source/img/daysScreen/daysScreen_4.jpg`),
        date: '21.01.2024',
        title: 'Day Four',
        description: 'Плечи / Грудь / Битепс',
        lastExercise: 0
    },
    {
        day: 'DAY_5',
        img: require(`@/source/img/daysScreen/daysScreen_5.jpg`),
        date: '23.01.2024',
        title: 'Day Five',
        description: 'Грудь / Плечи / Спина',
        lastExercise: 1
    }
];