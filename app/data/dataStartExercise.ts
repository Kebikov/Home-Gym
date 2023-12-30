import { TDay } from "./dataDays";

/**
 * Вес малого и большого грифа.
 */
type TWeightNeck = '1.6' | '7.3' | '0';
export type TExercise = 'EXERCISE_1' | 'EXERCISE_2' | 'EXERCISE_3';


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
     * Количество раз которое сделал с данным весом, сколько всего дней делал с таким весом.
     */
    amountExercise: number;
    /**
     * Количество сделаных подходов упражнения в данный день, число указываюшее сколько раз уже сделал например жим лежа в данный день.
     */
    approach: number;
    /**
     * Изображение для упражнения.(размер 800*500px)
     */
    img: number;
    /**
     * Количество раз берпи в упражнении.
     */
    burpee: number;
}

/**
 * Обьект одного дня упражнений.
 */
type TDayExercise = {
    [key in TExercise]: IExercise;
}

type TDataDay = {
    [key in TDay]: TDayExercise;
}

export const DATA_START_EXERCISE: TDataDay = {
    'DAY_1': {
        'EXERCISE_1': {
            title: 'Битепс, сидя с упором в скамью.',
            description: 'третий упор от сиденья',
            weightNeck: '1.6',
            weightOne: '4+3',
            weightTwo: '4+3+0',
            amount: 12,
            amountExercise: 5,
            approach: 0,
            img: require('@/source/img/days/day-1/1.jpg'),
            burpee: 18
        },
        'EXERCISE_2': {
            title: 'Присидания со штангой.',
            description: 'крепление в 9 отверстие',
            weightNeck: '7.3',
            weightOne: '20+2',
            weightTwo: 'THE SAME',
            amount: 20,
            amountExercise: 8,
            approach: 0,
            img: require('@/source/img/days/day-1/2.jpg'),
            burpee: 16
        },
        'EXERCISE_3': {
            title: 'Жим лежа со штангой.',
            description: 'крепление в 3 отверстие',
            weightNeck: '7.3',
            weightOne: '20+10+5+4',
            weightTwo: 'THE SAME',
            amount: 12,
            amountExercise: 1,
            approach: 0,
            img: require('@/source/img/days/day-1/3.jpg'),
            burpee: 0
        }
    },
    'DAY_2':{
        'EXERCISE_1': {
            title: 'Отжимание от брусьев.',
            description: 'крепление в 6 отверстие',
            weightNeck: '0',
            weightOne: '',
            weightTwo: '',
            amount: 19,
            amountExercise: 1,
            approach: 0,
            img: require('@/source/img/days/day-1/1.jpg'),
            burpee: 18
        },
        'EXERCISE_2': {
            title: 'Отжимание от брусьев.',
            description: 'крепление в 6 отверстие',
            weightNeck: '0',
            weightOne: '',
            weightTwo: '',
            amount: 19,
            amountExercise: 1,
            approach: 0,
            img: require('@/source/img/days/day-1/1.jpg'),
            burpee: 18
        },
        'EXERCISE_3': {
            title: 'Отжимание от брусьев.',
            description: 'крепление в 6 отверстие',
            weightNeck: '0',
            weightOne: '',
            weightTwo: '',
            amount: 19,
            amountExercise: 1,
            approach: 0,
            img: require('@/source/img/days/day-1/1.jpg'),
            burpee: 18
        }
    },
    'DAY_3': {
        'EXERCISE_1': {
            title: 'Битепс, сидя с упором в скамью.',
            description: 'третий упор от сиденья',
            weightNeck: '1.6',
            weightOne: '4+3',
            weightTwo: '4+3+0',
            amount: 12,
            amountExercise: 5,
            approach: 0,
            img: require('@/source/img/days/day-1/1.jpg'),
            burpee: 18
        },
        'EXERCISE_2': {
            title: 'Присидания со штангой.',
            description: 'крепление в 9 отверстие',
            weightNeck: '7.3',
            weightOne: '20+2',
            weightTwo: 'THE SAME',
            amount: 20,
            amountExercise: 8,
            approach: 0,
            img: require('@/source/img/days/day-1/2.jpg'),
            burpee: 16
        },
        'EXERCISE_3': {
            title: 'Жим лежа со штангой.',
            description: 'крепление в 3 отверстие',
            weightNeck: '7.3',
            weightOne: '20+10+5+4',
            weightTwo: 'THE SAME',
            amount: 12,
            amountExercise: 1,
            approach: 0,
            img: require('@/source/img/days/day-1/3.jpg'),
            burpee: 0
        }
    },
    'DAY_4': {
        'EXERCISE_1': {
            title: 'Битепс, сидя с упором в скамью.',
            description: 'третий упор от сиденья',
            weightNeck: '1.6',
            weightOne: '4+3',
            weightTwo: '4+3+0',
            amount: 12,
            amountExercise: 5,
            approach: 0,
            img: require('@/source/img/days/day-1/1.jpg'),
            burpee: 18
        },
        'EXERCISE_2': {
            title: 'Присидания со штангой.',
            description: 'крепление в 9 отверстие',
            weightNeck: '7.3',
            weightOne: '20+2',
            weightTwo: 'THE SAME',
            amount: 20,
            amountExercise: 8,
            approach: 0,
            img: require('@/source/img/days/day-1/2.jpg'),
            burpee: 16
        },
        'EXERCISE_3': {
            title: 'Жим лежа со штангой.',
            description: 'крепление в 3 отверстие',
            weightNeck: '7.3',
            weightOne: '20+10+5+4',
            weightTwo: 'THE SAME',
            amount: 12,
            amountExercise: 1,
            approach: 0,
            img: require('@/source/img/days/day-1/3.jpg'),
            burpee: 0
        }
    },
    'DAY_5': {
        'EXERCISE_1': {
            title: 'Битепс, сидя с упором в скамью.',
            description: 'третий упор от сиденья',
            weightNeck: '1.6',
            weightOne: '4+3',
            weightTwo: '4+3+0',
            amount: 12,
            amountExercise: 5,
            approach: 0,
            img: require('@/source/img/days/day-1/1.jpg'),
            burpee: 18
        },
        'EXERCISE_2': {
            title: 'Присидания со штангой.',
            description: 'крепление в 9 отверстие',
            weightNeck: '7.3',
            weightOne: '20+2',
            weightTwo: 'THE SAME',
            amount: 20,
            amountExercise: 8,
            approach: 0,
            img: require('@/source/img/days/day-1/2.jpg'),
            burpee: 16
        },
        'EXERCISE_3': {
            title: 'Жим лежа со штангой.',
            description: 'крепление в 3 отверстие',
            weightNeck: '7.3',
            weightOne: '20+10+5+4',
            weightTwo: 'THE SAME',
            amount: 12,
            amountExercise: 1,
            approach: 0,
            img: require('@/source/img/days/day-1/3.jpg'),
            burpee: 0
        }
    }
};

