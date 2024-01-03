// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store/store';
// import { IExercise } from '@/data/dataStartExercise';


// export interface ISlice {
//     /**
//      * Обьект упражнений в данный день.
//      */
//     exercise: IExercise;
//     /**
//      * Массив строк, строки являются уникальными значениями для упражнения.
//      * - Формируются так, титульное название упражнения + количество подходов.
//      * - Пример: "Жим лежа" + "12" = "Жим лежа 12"
//      */
//     pushSet: Array<string>;
// }

// const initialState: ISlice = {
//     exercise: {},
//     pushSet: []
// }

// const setsSlice = createSlice({
//     name: 'sets',
//     initialState,
//     pushSet,
//     reducers: {

//         setSliceExercise: (state, actions: PayloadAction<Partial<ISliceExercise> | 'remove'> ) => {
//             if(actions.payload === 'remove') {
//                 state.exercise = {};
//             } else {
//                 state.exercise = {...state.exercise, ...actions.payload};
//             }
//             console.log('',state.exercise);
//         },
//         setSliceCurrentDayExercise: (state, actions: PayloadAction<number | undefined> ) => {
//             state.currentDayExercise = actions.payload;
//         },
//         setSliceCurrentNumberExercise: (state, actions: PayloadAction<number | undefined> ) => {
//             state.currentNumberExercise = actions.payload;
//         }

//     }
// });


// export default setsSlice.reducer;
// export const {
//     setSliceExercise,
//     setSliceCurrentDayExercise,
//     setSliceCurrentNumberExercise
// } = setsSlice.actions;
