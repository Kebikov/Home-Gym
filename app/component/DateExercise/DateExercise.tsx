import { View, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { colorRootApp } from '@/data/colors';

/**
 * @component
 * Полная дата текушего дня тренировки.
 * @example
 * <DateExercise/>
 * @returns {JSX.Element}
 */
const DateExercise: FC = () => {
	return (
		<>
            <View style={styles.dateBox} >
                <View style={styles.dayBox} >
                    <Text style={styles.textDate} >03</Text>
                </View>
                <View style={styles.dayBox} >
                    <Text style={styles.textDate} >12</Text>
                </View>
                <View style={styles.dayBox}>
                    <Text style={styles.textDate} >2023</Text>
                </View>
            </View>
        </>
	);
};

const styles = StyleSheet.create({
    dateBox: {
        flexDirection: 'row',
        gap: 10,
        marginLeft: 10,
        marginTop: 10
    },
    dayBox: {
        backgroundColor: colorRootApp.LIME_70,
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 4,
    },
    textDate: {
        fontFamily: 'Sport',
        color: '#000',
        fontSize: 24
    }
})


export default DateExercise;
