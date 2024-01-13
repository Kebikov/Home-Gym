import { RouteProp } from "@react-navigation/native";
import { TDay } from "@/data/dataDays";
import { IExercise } from "@/data/dataStartExercise";

export type TypeRootPage = {
	DaysScreen: undefined;
	ExerciseScreen: {
        /**
         * День занятий, в формате "DAY_1" | "DAY_2"  | ...
         */
        day: TDay;
    };
    EditWeight: {
        /**
         * Обьект занятия.
         */
        exercise: IExercise;
    };
    SettingsScreen: undefined;
};

export type TScreenPropExerciseScreen = {
    route: RouteProp<TypeRootPage, 'ExerciseScreen'>
};

export type TScreenPropEditWeightScreen = {
    route: RouteProp<TypeRootPage, 'EditWeight'>
};


