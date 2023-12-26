import { View, Text, StyleSheet, Image } from 'react-native';
import React, { FC } from 'react';
import { DATA_DAYS } from '@/data/dataDays';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import Gradient from '@/component/Gradient/Gradient';
//* component
import Day from '@/component/Day/Day';

const DaysScreen: FC = () => {

    const days = DATA_DAYS.map((day, i) => <Day currentDay={day} key={i}/>);

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



