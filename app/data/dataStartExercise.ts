import { TDay } from "./dataDays";

/**
 * Вес малого и большого грифа.
 */
type TWeightNeck = '1.6' | '7.3' | '0' | '5';
export type TExercise = 'EXERCISE_1' | 'EXERCISE_2' | 'EXERCISE_3';

export type TIsUp = 'up' | 'down' | '?' | 'not';

/**
 * Обьект одного упражнения.
 */
export interface IExercise {
    /**
     * id записи.
     */
    id?: number; 
    /**
     * День занятия.
     */
    day: TDay;
    /**
     * Упражнение по очередности название.
     */
    exercise: TExercise;
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
     * Количество раз которое сделал с данным весом, сколько всего дней делал с таким весом.
     */
    amountExercise: number;
    /**
     * Заметка о поднятии, уменьшении или возможном поднятии веса.
     */
    isUp: TIsUp;
    /**
     * Изображение для упражнения.(размер 800*500px)
     */
    img: number;
    /**
     * Количество раз берпи в упражнении.
     */
    burpee: number;
}


export const DATA_START_EXERCISE: Array<IExercise> = [
    //* DAY_1
    {
        day: 'DAY_1',
        exercise: 'EXERCISE_1',
        title: 'Битепс, сидя с упором в скамью.',
        description: 'третий упор от сиденья',
        weightNeck: '1.6',
        weightOne: '4+3',
        weightTwo: '4+3+0',
        amount: 12,
        amountExercise: 6,
        isUp: '?',
        img: require('@/source/img/days/day-1/1.jpg'),
        burpee: 18
    },
    {
        day: 'DAY_1',
        exercise: 'EXERCISE_2',
        title: 'Присидания со штангой.',
        description: 'крепление в 9 отверстие',
        weightNeck: '7.3',
        weightOne: '20+4',
        weightTwo: '-',
        amount: 20,
        amountExercise: 1,
        isUp: 'not',
        img: require('@/source/img/days/day-1/2.jpg'),
        burpee: 16
    },
    {
        day: 'DAY_1',
        exercise: 'EXERCISE_3',
        title: 'Жим лежа со штангой.',
        description: 'крепление в 3 отверстие',
        weightNeck: '7.3',
        weightOne: '20+10+5+4',
        weightTwo: '-',
        amount: 12,
        amountExercise: 2,
        isUp: 'not',
        img: require('@/source/img/days/day-1/3.jpg'),
        burpee: 0
    },
    //* DAY_2
    {
        day: 'DAY_2',
        exercise: 'EXERCISE_1',
        title: 'Отжимание от брусьев.',
        description: 'крепление в 6 отверстие',
        weightNeck: '0',
        weightOne: '',
        weightTwo: '',
        amount: 19,
        amountExercise: 2,
        isUp: '?',
        img: require('@/source/img/days/day-2/1.jpg'),
        burpee: 18
    },
    {
        day: 'DAY_2',
        exercise: 'EXERCISE_2',
        title: 'Битепс, стоя со штангой.',
        description: 'штанга WZ',
        weightNeck: '5',
        weightOne: '10+5+1+0',
        weightTwo: '-',
        amount: 12,
        amountExercise: 4,
        isUp: 'not',
        img: require('@/source/img/days/day-2/2.jpg'),
        burpee: 16
    },
    {
        day: 'DAY_2',
        exercise: 'EXERCISE_3',
        title: 'Разводка гантелей в стораны.',
        description: 'с двумя гантелями',
        weightNeck: '1.6',
        weightOne: '2',
        weightTwo: '1+0',
        amount: 20,
        amountExercise: 7,
        isUp: 'not',
        img: require('@/source/img/days/day-2/3.jpg'),
        burpee: 0
    },
    //* DAY_3
    {
        day: 'DAY_3',
        exercise: 'EXERCISE_1',
        title: 'Битепс, стоя со штангой.',
        description: 'штанга WZ',
        weightNeck: '5',
        weightOne: '10+1+1',
        weightTwo: '-',
        amount: 20,
        amountExercise: 3,
        isUp: 'not',
        img: require('@/source/img/days/day-3/1.jpg'),
        burpee: 18
    },
    {
        day: 'DAY_3',
        exercise: 'EXERCISE_2',
        title: 'Жим лежа под наклоном.',
        description: 'крепление в 4 отверстие',
        weightNeck: '7.3',
        weightOne: '20+10+2',
        weightTwo: '-',
        amount: 12,
        amountExercise: 2,
        isUp: 'not',
        img: require('@/source/img/days/day-3/2.jpg'),
        burpee: 16
    },
    {
        day: 'DAY_3',
        exercise: 'EXERCISE_3',
        title: 'Подъемы на скамью с гантелями.',
        description: 'с двумя гантелями',
        weightNeck: '1.6',
        weightOne: '4+1',
        weightTwo: '4',
        amount: 12,
        amountExercise: 6,
        isUp: 'not',
        img: require('@/source/img/days/day-3/3.jpg'),
        burpee: 0
    },
    //* DAY_4
    {
        day: 'DAY_4',
        exercise: 'EXERCISE_1',
        title: 'Разводка гантелей в стораны.',
        description: 'с двумя гантелями',
        weightNeck: '1.6',
        weightOne: '4+1',
        weightTwo: '4+0',
        amount: 12,
        amountExercise: 8,
        isUp: 'not',
        img: require('@/source/img/days/day-4/1.jpg'),
        burpee: 18
    },
    {
        day: 'DAY_4',
        exercise: 'EXERCISE_2',
        title: 'Жим гантелей лежа.',
        description: 'скамья в нетральном положении',
        weightNeck: '1.6',
        weightOne: '4+3+2+0',
        weightTwo: '-',
        amount: 20,
        amountExercise: 8,
        isUp: 'not',
        img: require('@/source/img/days/day-4/2.jpg'),
        burpee: 16
    },
    {
        day: 'DAY_4',
        exercise: 'EXERCISE_3',
        title: 'Битепс, упражнение молоток.',
        description: 'с двумя гантелями',
        weightNeck: '1.6',
        weightOne: '2+1+0',
        weightTwo: '-',
        amount: 20,
        amountExercise: 2,
        isUp: 'not',
        img: require('@/source/img/days/day-4/3.jpg'),
        burpee: 0
    },
    //* DAY_5
    {
        day: 'DAY_5',
        exercise: 'EXERCISE_1',
        title: 'Грудь, свидение гантелей.',
        description: 'нетральное положение скамьи',
        weightNeck: '1.6',
        weightOne: '4+3+2+1',
        weightTwo: '-',
        amount: 12,
        amountExercise: 1,
        isUp: 'not',
        img: require('@/source/img/days/day-5/1.jpg'),
        burpee: 18
    },
    {
        day: 'DAY_5',
        exercise: 'EXERCISE_2',
        title: 'Плечи, подьем штанги сидя.',
        description: 'крепление в 4 отверстие',
        weightNeck: '7.3',
        weightOne: '20+4',
        weightTwo: '-',
        amount: 12,
        amountExercise: 2,
        isUp: 'not',
        img: require('@/source/img/days/day-5/2.jpg'),
        burpee: 16
    },
    {
        day: 'DAY_5',
        exercise: 'EXERCISE_3',
        title: 'Спина, тяги штанги в наклоне.',
        description: 'внешний хват',
        weightNeck: '7.3',
        weightOne: '20+5',
        weightTwo: '-',
        amount: 20,
        amountExercise: 2,
        isUp: 'not',
        img: require('@/source/img/days/day-5/3.jpg'),
        burpee: 0
    }
];
