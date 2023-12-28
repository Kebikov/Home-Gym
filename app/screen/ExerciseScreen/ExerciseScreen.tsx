import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React, { FC } from 'react';
import { TScreenPropExerciseScreen } from '@/navigation/navigation.types';
import { colorRootApp } from '@/data/colors';
//* component
import DateExercise from '@/component/DateExercise/DateExercise';
import WeightExercise from '@/component/WeightExercise/WeightExercise';
import UpDownWeight from '@/component/UpDownWeight/UpDownWeight';
import TimeView from '@/component/TimeView/TimeView';
import Sets from '@/component/Sets/Sets';

/**
 * @screen
 * Экран с днем занятия и упражнениями.
 * @returns {JSX.Element}
 */
const ExerciseScreen: FC<TScreenPropExerciseScreen> = ({ route }) => {
	//const id = route.params.id;
	const id = 'Day-1';

	return (
		<View style={styles.main}>
			<ImageBackground source={require('@/source/img/1.jpg')} style={styles.header} >
				<DateExercise />
				<WeightExercise />
                <UpDownWeight/>
			</ImageBackground>
            <Sets/>
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
		height: 350,
		backgroundColor: 'red',
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
