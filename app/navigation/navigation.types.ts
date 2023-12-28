import { RouteProp } from "@react-navigation/native";
import { TDay } from "@/data/dataDays";

export type TypeRootPage = {
	DaysScreen: undefined;
	ExerciseScreen: {
        /**
         * День занятий, в формате "0" | "1"  | ...
         */
        day: TDay;
    };
};

export type TScreenPropExerciseScreen = {
    route: RouteProp<TypeRootPage, 'ExerciseScreen'>
};


