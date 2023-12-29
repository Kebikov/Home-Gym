import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store';

interface ISliceExercise {
    day: number;
    exerciseOne: {
        one: boolean;
        two: boolean;
        three: boolean;
    };
    exerciseTwo: {
        one: boolean;
        two: boolean;
        three: boolean;
    };
    exerciseThree: {
        one: boolean;
        two: boolean;
        three: boolean;
    };
}

export interface ISlice {
    exercise: Partial<ISliceExercise>
}

const initialState: ISlice = {
    exercise: {}
}

const setsSlice = createSlice({
    name: 'sets',
    initialState,
    reducers: {

    setSliceExercise: (state, actions) => {
            state.exercise = {...state.exercise, ...actions.payload};
        }
    }
});


export default setsSlice.reducer;
export const {setSliceExercise} = setsSlice.actions;


export const selectCount = (state: RootState) => state.setsSlice.exercise;
