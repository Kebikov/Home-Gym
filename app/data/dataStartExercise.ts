import { TDay } from "./dataDays";

/**
 * Вес малого и большого грифа.
 */
type TWeightNeck = '1.6' | '7.3' | '0';


/**
 * Обьект одного упражнения.
 */
export interface IExercise {
    /**
     * Титульное название упражнения.
     */
    title: string;
    /**
     * Дополнительная информация к упражнению.
     */
    description: string;
    /**
     * Вес грифа.
     */
    weightNeck: TWeightNeck;
    /**
     * Вес с первой стороны грифа.
     */
    weightOne: string;
    /**
     * Вес со второй стороны грифа.
     */
    weightTwo: string;
    /**
     * Количество повторов в упражнении.
     */
    amount: number;
    /**
     * Количество раз которое сделал с данным весом.
     */
    amountExercise: number;
    /**
     * Изображение для упражнения.(размер 800*500px)
     */
    img: number;
    /**
     * Количество раз берпи в упражнении.
     */
    burpee: number;
}

export const DATA_START_EXERCISE: Array<IExercise[]> = [
    [
        {
            title: 'Битепс, сидя с упором в скамью.',
            description: 'третий упор от сиденья',
            weightNeck: '1.6',
            weightOne: '4+3',
            weightTwo: '4+3+0',
            amount: 12,
            amountExercise: 5,
            img: require('@/source/img/days/day-1/1.jpg'),
            burpee: 18
        },
        {
            title: 'Присидания со штангой.',
            description: 'крепление в 9 отверстие',
            weightNeck: '7.3',
            weightOne: '20+2',
            weightTwo: 'THE SAME',
            amount: 20,
            amountExercise: 8,
            img: require('@/source/img/days/day-1/2.jpg'),
            burpee: 16
        },
        {
            title: 'Жим лежа со штангой.',
            description: 'крепление в 3 отверстие',
            weightNeck: '7.3',
            weightOne: '20+10+5+4',
            weightTwo: 'THE SAME',
            amount: 12,
            amountExercise: 1,
            img: require('@/source/img/days/day-1/3.jpg'),
            burpee: 0
        }
    ],[
        {
            title: 'Отжимание от брусьев.',
            description: 'крепление в 6 отверстие',
            weightNeck: '0',
            weightOne: '',
            weightTwo: '',
            amount: 19,
            amountExercise: 1,
            img: require('@/source/img/days/day-1/1.jpg'),
            burpee: 18
        }
    ],[],[],[]
];

