export type TDay = '0' | '1' | '2' | '3' | '4';

/**
 * @interface
 * Обьект одного дня занятий на стартовой странице.
 */
export interface IDataDays {
    /**
     * День занятий, в формате "0" | "1"  | ...
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
        day: '0',
        img: require(`@/source/img/1.jpg`),
        date: '23.12.2023',
        title: 'Day One',
        description: 'Битепс / Ноги / Грудь',
        lastExercise: false
    },
    {
        day: '1',
        img: require(`@/source/img/2.jpg`),
        date: '23.12.2023',
        title: 'Day Two',
        description: 'Грудь / Битепс / Плечи',
        lastExercise: true
    },
    {
        day: '2',
        img: require(`@/source/img/3.jpg`),
        date: '23.12.2023',
        title: 'Day Three',
        description: 'Битепс / Грудь / Ноги',
        lastExercise: false
    },
    {
        day: '3',
        img: require(`@/source/img/4.jpg`),
        date: '23.12.2023',
        title: 'Day Four',
        description: 'Плечи / Грудь / Битепс',
        lastExercise: false
    },
    {
        day: '4',
        img: require(`@/source/img/5.jpg`),
        date: '23.12.2023',
        title: 'Day Five',
        description: 'Грудь / Плечи / Спина',
        lastExercise: false
    }
];