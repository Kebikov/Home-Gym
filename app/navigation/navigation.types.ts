import { RouteProp } from "@react-navigation/native";
import { TExercise } from "@/data/dataStartExercise";
import { TId } from "@/data/dataDays";

export type TypeRootPage = {
	DaysScreen: undefined;
	ExerciseScreen: {
        /**
         * Уникальный id набора упражнений.
         */
        id: TId;
        /**
         * Номер упражнения: '0' | '1' | '2'.
         */
        exercise: TExercise;
    };
};

export type TScreenPropExerciseScreen = {
    route: RouteProp<TypeRootPage, 'ExerciseScreen'>
};


