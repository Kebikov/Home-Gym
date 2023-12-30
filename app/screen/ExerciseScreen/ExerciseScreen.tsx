import { View, StyleSheet, ImageBackground } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { TScreenPropExerciseScreen } from '@/navigation/navigation.types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ISliceExercise } from '@/redux/slice/sets.slice';
//* redux
import { useAppSelector, useAppDispatch } from '@/redux/store/hooks';
import { setSliceExercise } from '@/redux/slice/sets.slice';
import { TExercise } from '@/data/dataStartExercise';
//* component
import DateExercise from '@/component/DateExercise/DateExercise';
import WeightExercise from '@/component/WeightExercise/WeightExercise';
import UpDownWeight from '@/component/UpDownWeight/UpDownWeight';
import TimeView from '@/component/TimeView/TimeView';
import Sets from '@/component/Sets/Sets';
import BottomMenu from '@/component/BottomMenu/BottomMenu';
//* data
import { DATA_START_EXERCISE } from '@/data/dataStartExercise';

export type TNumExercise = 0 | 1 | 2;

//: ExerciseScreen
/**
 * @screen
 * Экран с днем занятия и упражнениями.
 * @returns {JSX.Element}
 */
const ExerciseScreen: FC<TScreenPropExerciseScreen> = ({ route }) => {

    const exerciseArray: Array<TExercise> = ['EXERCISE_1', 'EXERCISE_2', 'EXERCISE_3'];

    /**
     * Изминения состояния выбора упражнения.
     * @param selectExercise - Число которое используется для выбора упражнения из массива.
     */
    const [selectExercise, setSelectExercise] = useState<TNumExercise>(0);
    /**
     * Обьект для отображения выполненных подходов в день тренировки.
     */
    const exerciseObject = useAppSelector(state => state.setsSlice.exercise);
    const dispatch = useAppDispatch();

    /**
     * День занятий, в формате "DAY_1" | "DAY_2" | ...
     */
	const day = route.params.day;


    useEffect(() => {
        /**
         * Получение данных о дне занятий из AsyncStorage.
         * - Если есть записать в redux.
         * - Если нет, записать в redux текуший день.
         */
        async function checkAsyncStorage() {
            const exerciseJSON = await AsyncStorage.getItem(day);
            if(exerciseJSON) {
                const exercise = JSON.parse(exerciseJSON);
                dispatch( setSliceExercise(exercise) );
            } else {
                dispatch( setSliceExercise( { day: Number (day) } ) );
            }
        }
        checkAsyncStorage();
        return () => {
            /**
             * Функция сохранения данных в AsyncStorage.
             * - Очишение state.setsSlice.exercise.
             */
            async function saveInAsyncStorage() {
                const exerciseJSON = JSON.stringify(exerciseObject);
                await AsyncStorage.setItem(day, exerciseJSON);
                dispatch( setSliceExercise('remove') );
            }
            saveInAsyncStorage();
        }
    }, []);

	return (
		<View style={styles.main}>
            <BottomMenu setSelectExercise={setSelectExercise} />
			<ImageBackground source={DATA_START_EXERCISE[day][exerciseArray[selectExercise]].img} style={styles.header} >
				<DateExercise />
				<WeightExercise day={day} exercise={selectExercise} />
                <UpDownWeight/>
			</ImageBackground>
            <Sets exercise={DATA_START_EXERCISE[day][exerciseArray[selectExercise]]} />
            <View style={{flex: 1}}></View>
            <TimeView givenTime={10}/>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1
	},
	header: {
		width: '100%',
		height: 340,
		borderBottomLeftRadius: 40,
		borderBottomRightRadius: 40,
		overflow: 'hidden',
		justifyContent: 'space-between'
	},
	text: {
		color: '#fff',
		fontSize: 30
	}
});

export default ExerciseScreen;
