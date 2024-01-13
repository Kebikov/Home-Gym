import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { TDay } from '@/data/dataDays';
import { IExercise, TExercise } from '@/data/dataStartExercise';
import DBManagment from '@/SQLite/DBManagment';
import { RootState } from '../store/store';
import updateTableDays from '@/SQLite/DBManagment/updateTableDays';
import { IUpdateTableDays } from '@/SQLite/DBManagment/updateTableDays';
import getCurrentDateInFormatArray from '@/helpers/getCurrentDateInFormatArray';



/**
 * Функция для сплита id по "#".
 * @param stringId Id стокой: "DAY_1#EXERCISE_1#0"
 * @example splitID("DAY_1#EXERCISE_1#0") 
 * @returns "EXERCISE_1"
 */
function splitID(stringId: string): string {
    const splitId: string[] = stringId.split('#'); 
    const exercise = splitId[1];
    return exercise;
}

export interface ISlice {
    /**
     * Для отслеживания состояния обновления в БД, при изминении меняем на противоположное.
     * Что будет говорить о том, что необимо загрузить обновленные данные из БД.
     */
    isUpdateToggle: boolean;
    /**
     * Состояние вкл./выкл. таймера.
     */
    isStartTimer: boolean;
    /**
     * Id текушего дня тренировки.
     */
    currentDaysId: number | undefined;
    /**
     * Массив с обьектами занятий.
     */
    exerciseArray: IExercise[] | [];
    /**
     * Массив строк, строки являются уникальными значениями для упражнения.
     * - Формируются так, титульное название упражнения + количество подходов.
     * - Пример: "Жим лежа" + "12" = "Жим лежа 12"
     */
    pushSetId: Array<string>;
}

interface IChangeExercise extends Partial<IExercise> {
    /**
     * День в котором меняем упражнение.
     */
    day: TDay;
    /**
     * Упражнение которое меняем.
     */
    exercise: TExercise;

}

export const setSliceSaveInDataBase = createAsyncThunk(
    'sets/setSliceSaveInDataBase',
    async (_,{getState}) => {
        const state = getState() as RootState;
        const resaltUpdateTabelExercise = await DBManagment.updateTableExercise(state.setsSlice.exerciseArray);
        if(state.setsSlice.pushSetId.length === 0) return resaltUpdateTabelExercise;

        const dateArray = getCurrentDateInFormatArray();

        const dataForUpdateTableDays: IUpdateTableDays = {
            id: state.setsSlice.currentDaysId,
            date: `${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`,
            lastExercise: 1
        }

        const resaltUpdateTabelDays = await updateTableDays(dataForUpdateTableDays);
        return resaltUpdateTabelDays;
    }
);


//* initialState 
const initialState: ISlice = {
    isUpdateToggle: false,
    isStartTimer: false,
    currentDaysId: undefined,
    exerciseArray: [],
    pushSetId: []
}
//* setsSlice 
const setsSlice = createSlice({
    name: 'sets',
    initialState,
    reducers: {
        /**
         * Установка массива id, сделаных упражнений, если id уже добавлено, удаляем его.
         * - accept: Строку представляюшию из себя id.
         */
        setSlicePushSetId: (state, actions: PayloadAction<string> ) => {
            const index = state.pushSetId.indexOf(actions.payload);
            if(index === -1) {
                state.pushSetId.push(actions.payload);
                // Начало кода по увеличению количества выполненных раз упражнения.
                const madeExercisesArray: string[] = state.pushSetId.filter(item => splitID(item) === splitID(actions.payload));
                const madeExercisesArrayTotalElement: number = madeExercisesArray.length;
                // Если было три подхода, то увеличиваем количества выполненных упражнений.
                if(madeExercisesArrayTotalElement === 3) {
                    const newExerciseArray = state.exerciseArray.map(exercise => {
                        if(exercise.exercise === splitID(actions.payload)) {
                            exercise.amountExercise ++;
                            return exercise;
                        } else {
                            return exercise;
                        }
                    });
                    state.exerciseArray = newExerciseArray;
                }
            } else {
                state.pushSetId.splice(index, 1);
            }
        },
        /**
         * Установка массива с обьектами занятий.
         * - accept: Массив с обьектами занятий, 
         * - interface: IExercise[].
         */
        setSliceExerciseArray: (state, actions: PayloadAction<IExercise[]>) => {
            state.exerciseArray = actions.payload;
        },
        /**
         * Установка изминений в обьекте упражнения в массиве.
         * - accept: Обьект {day: TDay; exercise: TExercise; и ключ/значение которое меняем в упражнении}.
         */
        setSliceChangeExerciseInArray: (state, actions: PayloadAction<IChangeExercise>) => {
            const exerciseNewArray = state.exerciseArray.map(item => {
                if(item.day === actions.payload.day && item.exercise === actions.payload.exercise) {
                    // Удаление значения при повторном нажатии кнопок верх/низ или вопрос.
                    if('isUp' in actions.payload && item.isUp === actions.payload.isUp) {
                        actions.payload.isUp = 'not';
                    }
                    return {...item, ...actions.payload};
                } else {
                    return item;
                }
            });
            state.exerciseArray = exerciseNewArray;
        },
        /**
         * Установка id текушего дня тренировки.
         */
        setSliceCurrentDaysId: (state, actions) => {
            state.currentDaysId = actions.payload;
        },
        setSliceIsStartTimer: (state, actions) => {
            state.isStartTimer = actions.payload;
        },
        /**
         * Установка default state to setsSlice.
         */
        resetSetsSlice: (state) => {
            state.currentDaysId = undefined;
            state.exerciseArray = initialState.exerciseArray;
            state.pushSetId = initialState.pushSetId;
        },
        /**
         * Флаг изминения данных в БД.
         */
        setSliceIsUpdateToggle: (state) => {
            state.isUpdateToggle = !state.isUpdateToggle; 
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(setSliceSaveInDataBase.fulfilled, (state, action) => {
                state.currentDaysId = undefined;
                state.exerciseArray = [];
                if(state.pushSetId.length !== 0) {
                    state.pushSetId = [];
                    state.isUpdateToggle = !state.isUpdateToggle;
                }
            })
            .addCase(setSliceSaveInDataBase.rejected, (state, action) => {
                console.error('Error in setSliceSaveInDataBase');
            })
            .addDefaultCase(() => {});
    }
});


export default setsSlice.reducer;

export const {
    setSlicePushSetId,
    setSliceExerciseArray,
    setSliceChangeExerciseInArray,
    setSliceCurrentDaysId,
    setSliceIsStartTimer,
    resetSetsSlice,
    setSliceIsUpdateToggle
} = setsSlice.actions;
