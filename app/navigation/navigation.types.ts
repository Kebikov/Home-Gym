import { RouteProp } from "@react-navigation/native";
import { TDay } from "@/data/dataDays";

export type TypeRootPage = {
	DaysScreen: undefined;
	ExerciseScreen: {
        /**
         * День занятий, в формате "DAY_1" | "DAY_2"  | ...
         */
        day: TDay;
    };
};

export type TScreenPropExerciseScreen = {
    route: RouteProp<TypeRootPage, 'ExerciseScreen'>
};


