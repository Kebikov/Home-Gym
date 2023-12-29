import { View, StyleSheet, ImageBackground } from 'react-native';
import React, { FC, useState } from 'react';
import { TScreenPropExerciseScreen } from '@/navigation/navigation.types';
import { useAppSelector } from '@/redux/store/hooks';
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

//= ExerciseScreen
/**
 * @screen
 * Экран с днем занятия и упражнениями.
 * @returns {JSX.Element}
 */
const ExerciseScreen: FC<TScreenPropExerciseScreen> = ({ route }) => {

    /**
     * Изминения состояния выбора упражнения.
     * @param selectExercise - Число которое используется для выбора упражнения из массива.
     */
    const [selectExercise, setSelectExercise] = useState<TNumExercise>(0);

    /**
     * День занятий, в формате "0" | "1" | ...
     */
	const day = route.params.day;


	return (
		<View style={styles.main}>
            <BottomMenu setSelectExercise={setSelectExercise} />
			<ImageBackground source={DATA_START_EXERCISE[day][selectExercise].img} style={styles.header} >
				<DateExercise />
				<WeightExercise day={day} exercise={selectExercise} />
                <UpDownWeight/>
			</ImageBackground>
            <Sets exercise={DATA_START_EXERCISE[day][selectExercise]} />
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
