import { View, Text, StyleSheet } from 'react-native';
import React, { FC, useEffect } from 'react';
import { DATA_DAYS } from '@/data/dataDays';
import Gradient from '@/component/Gradient/Gradient';
import { useAppDispatch } from '@/redux/store/hooks';
import { setSliceExercise } from '@/redux/slice/sets.slice';
//* component
import Day from '@/component/Day/Day';

/**
 * @screen
 * Экран с карточками, дни с наборами упражнений.
 * @example <DaysScreen/>
 * @returns {JSX.Element}
 */
const DaysScreen: FC = () => {

    /**
     * Массив элементов карточек с днями тренировак.
     */
    const days: JSX.Element[] = DATA_DAYS.map((item, i) => <Day day={item} key={i}/>);

	return (
		<View style={style.main} >
            <Gradient text='Days Of Training' size={32} />
            {
                days
            }
		</View>
	);
};

const style = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    maskedView: {
        width: '100%',
        flexDirection: 'row',
    },
    linearGradient: {
        width: '100%', 
        height: 30
    },
    text: {
        fontSize: 30,
        fontWeight: '500',
        textTransform: 'uppercase',
        fontFamily: 'Sport'
    }
});

export default DaysScreen;



