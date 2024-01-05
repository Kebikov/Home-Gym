import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React, { FC } from 'react';
import { COLOR_ROOT_APP } from '@/data/colors';
import { icon } from '@/source/icon/icon';
import { IExercise, TIsUp } from '@/data/dataStartExercise';
//* redux
import { useAppDispatch } from '@/redux/store/hooks';
import { setSliceChangeExerciseInArray } from '@/redux/slice/sets.slice';

interface IUpDownWeight {
    exercise: IExercise;
}

/**
 * @component
 * Блок с кнопками, увеличить вес, уменьшить вес, заметка.
 * @return {JSX.Element}
 */
const UpDownWeight: FC<IUpDownWeight> = ({exercise}) => {

    const dispatsh = useAppDispatch();
    /**
     * Изминение состояния к кнопки верх/низ или вопрос.
     */
    const changeIsUp = (value: TIsUp) => {
        dispatsh(setSliceChangeExerciseInArray({day: exercise.day, exercise: exercise.exercise, isUp: value}));
    }

	return (
		<View style={styles.main} >

            <Pressable onPress={() => changeIsUp('up')} style={[styles.pressable, {top: 5}]} >
                <Image source={exercise.isUp === 'up' ? icon.up_active : icon.up} style={[styles.icon]} />
            </Pressable>

            <Pressable onPress={() => changeIsUp('?')} style={[styles.pressable, {top: 60}]} >
                <Image source={exercise.isUp === '?' ?  icon.question_active : icon.question} style={[styles.icon]} />
            </Pressable>

            <Pressable onPress={() => changeIsUp('down')} style={[styles.pressable, {top: 115}]} >
                <Image source={exercise.isUp === 'down' ? icon.down_active : icon.down} style={[styles.icon]} />
            </Pressable>

		</View>
	);
};

const styles = StyleSheet.create({
    main: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 40,
        height: 150,
        backgroundColor: COLOR_ROOT_APP.WHITE_40,
        borderRadius: 30
    },
    pressable: {
        position: 'absolute',
        zIndex: 1,
        left: 5,
        opacity: .8,
        width: 30,
        height: 30,
    },
    icon: {
        width: '100%',
        height: '100%'
    }
});

export default UpDownWeight;
