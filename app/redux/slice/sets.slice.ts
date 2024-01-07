import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { TDay } from '@/data/dataDays';
import { IExercise, TExercise } from '@/data/dataStartExercise';
import DBManagment from '@/SQLite/DBManagment';


export interface ISlice {
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

type TGetState = {
    setsSlice: ISlice;
}

export const setSliceSaveInDataBase = createAsyncThunk(
    'sets/setSliceSaveInDataBase',
    async (_,{getState}) => {
        const state = getState() as TGetState;
        const resalt = await DBManagment.updateTableExercise(state.setsSlice.exerciseArray);
        return resalt;
    }
);


//* initialState 
const initialState: ISlice = {
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
         * Установка default state to setsSlice.
         */
        resetSetsSlice: (state) => {
            state.exerciseArray = initialState.exerciseArray;
            state.pushSetId = initialState.pushSetId;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(setSliceSaveInDataBase.fulfilled, (state, action) => {
                state.exerciseArray = [];
                state.pushSetId = [];
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
    resetSetsSlice
} = setsSlice.actions;
