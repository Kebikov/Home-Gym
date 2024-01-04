import { View, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { TScreenPropExerciseScreen } from '@/navigation/navigation.types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IExercise } from '@/data/dataStartExercise';
import { TExercise } from '@/data/dataStartExercise';
//* redux
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks';
import { setSliceExerciseArray } from '@/redux/slice/sets.slice';
//* component
import DateExercise from '@/component/DateExercise/DateExercise';
import WeightExercise from '@/component/WeightExercise/WeightExercise';
import UpDownWeight from '@/component/UpDownWeight/UpDownWeight';
import TimeView from '@/component/TimeView/TimeView';
import Sets from '@/component/Sets/Sets';
import BottomMenu from '@/component/BottomMenu/BottomMenu';
//* SQL
import DBManagment from '@/SQLite/DBManagment';
import Configuration from '@/SQLite/DBManagment/сonfiguration';

export type TNumExercise = 0 | 1 | 2;


/**
 * @screen
 * Экран с днем занятия и упражнениями.
 * @returns {JSX.Element}
 */
//: ExerciseScreen
const ExerciseScreen: FC<TScreenPropExerciseScreen> = ({ route }) => {

	const exerciseValue: Array<TExercise> = ['EXERCISE_1', 'EXERCISE_2', 'EXERCISE_3'];

	/**
	 * @param exerciseArray Массив с данными о упражнениях в данный день.
	 */
	const exerciseArray = useAppSelector(state => state.setsSlice.exerciseArray);
	/**
	 * Изминения состояния выбора упражнения.
	 * @param selectExercise - Число которое используется для выбора упражнения из массива.
	 */
	const [selectExercise, setSelectExercise] = useState<TNumExercise>(0);
    const dispatch = useAppDispatch();

	/**
	 * День занятий который propse полученый при переходе, в формате "DAY_1" | "DAY_2" | ...
	 */
	const dayExercise = route.params.day;

    /**
     * Обьект выбранного упрожнения.
     */
	let exercise = exerciseArray.find(item => item.exercise === exerciseValue[selectExercise]);

	useEffect(() => {
		const getData = async () => {
			const data: Array<IExercise> = await DBManagment.inset(`SELECT * FROM ${Configuration.TABLE_EXERCISE} WHERE day = "${dayExercise}"`);
            dispatch(setSliceExerciseArray(data));
		};
		getData();
	}, []);

    if (!exercise) {
        console.log('spiner',);
        // Показываем индикатор загрузки, пока данные загружаются
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' color='#0000ff' />
            </View>
        );
    }

    
	return (
		<View style={styles.main}>
            <BottomMenu setSelectExercise={setSelectExercise} />
            <ImageBackground source={exercise.img} style={styles.header}>
                <DateExercise />
                <WeightExercise exercise={exercise} />
                <UpDownWeight valueIcon={exercise.isUp} />
            </ImageBackground>
            <Sets exercise={exercise} />
            <View style={{ flex: 1 }}></View>
            <TimeView givenTime={10} />
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
		justifyContent: 'space-between',

        shadowColor: '#fff',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 5
	},
	text: {
		color: '#fff',
		fontSize: 30
	}
});

export default ExerciseScreen;
