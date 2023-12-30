import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store';

export interface ISliceExercise {
    day: number;
    1: {
        1: boolean;
        2: boolean;
        3: boolean;
    };
    2: {
        1: boolean;
        2: boolean;
        3: boolean;
    };
    '3': {
        1: boolean;
        2: boolean;
        3: boolean;
    };
}

export interface ISlice {
    /**
     * Обьект для отображения выполненных подходов в день тренировки.
     */
    exercise: Partial<ISliceExercise>;
    /**
     * Текуший день тренировки которая проводится.
     */
    currentDayExercise: number | undefined;
    /**
     * Текуший номер упражннения, тренировки которая проводится.
     */
    currentNumberExercise: number | undefined;
}

const initialState: ISlice = {
    exercise: {},
    currentDayExercise: undefined,
    currentNumberExercise: undefined
}

const setsSlice = createSlice({
    name: 'sets',
    initialState,
    reducers: {

        setSliceExercise: (state, actions: PayloadAction<Partial<ISliceExercise> | 'remove'> ) => {
            if(actions.payload === 'remove') {
                state.exercise = {};
            } else {
                state.exercise = {...state.exercise, ...actions.payload};
            }
            console.log('',state.exercise);
        },
        setSliceCurrentDayExercise: (state, actions: PayloadAction<number | undefined> ) => {
            state.currentDayExercise = actions.payload;
        },
        setSliceCurrentNumberExercise: (state, actions: PayloadAction<number | undefined> ) => {
            state.currentNumberExercise = actions.payload;
        }

    }
});


export default setsSlice.reducer;
export const {
    setSliceExercise,
    setSliceCurrentDayExercise,
    setSliceCurrentNumberExercise
} = setsSlice.actions;
