import { RouteProp } from "@react-navigation/native";

export type TypeRootPage = {
	DaysScreen: undefined;
	ExerciseScreen: {
        /**
         * Уникальный id набора упражнений.
         */
        id: string;
    };
};

export type TScreenPropExerciseScreen = {
    route: RouteProp<TypeRootPage, 'ExerciseScreen'>
};


