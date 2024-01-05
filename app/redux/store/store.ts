import { configureStore } from "@reduxjs/toolkit";
import setsSlice from '@/redux/slice/sets.slice';


const store = configureStore({
    reducer: {setsSlice},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;

