export type TDay = 'DAY_1' | 'DAY_2' | 'DAY_3' | 'DAY_4' | 'DAY_5';

/**
 * @interface
 * Обьект одного дня занятий на стартовой странице.
 */
export interface IDataDays {
    /**
     * День занятий, в формате "DAY_1" | "DAY_2"  | ...
     */
    day: TDay;
    /**
     * Изображение фоновое.
     */
    img: number;
    /**
     * Дата последнего занятия по данной программе.
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
     * Отметка последнего дня занятий, по которому занимался.
     */
    lastExercise: boolean;
}

/**
 * Массив данный для элементов дней занятий.
 */
export const DATA_DAYS: Array<IDataDays> = [
    {
        day: 'DAY_1',
        img: require(`@/source/img/1.jpg`),
        date: '2023-12-23',
        title: 'Day One',
        description: 'Битепс / Ноги / Грудь',
        lastExercise: false
    },
    {
        day: 'DAY_2',
        img: require(`@/source/img/2.jpg`),
        date: '23.12.2023',
        title: 'Day Two',
        description: 'Грудь / Битепс / Плечи',
        lastExercise: false
    },
    {
        day: 'DAY_3',
        img: require(`@/source/img/3.jpg`),
        date: '23.12.2023',
        title: 'Day Three',
        description: 'Битепс / Грудь / Ноги',
        lastExercise: false
    },
    {
        day: 'DAY_4',
        img: require(`@/source/img/4.jpg`),
        date: '23.12.2023',
        title: 'Day Four',
        description: 'Плечи / Грудь / Битепс',
        lastExercise: false
    },
    {
        day: 'DAY_5',
        img: require(`@/source/img/5.jpg`),
        date: '23.12.2023',
        title: 'Day Five',
        description: 'Грудь / Плечи / Спина',
        lastExercise: false
    }
];