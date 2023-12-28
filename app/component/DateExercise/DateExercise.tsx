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

    /**
     * Текушяя дата строкой.
     */
    const date: string = new Date().toISOString();
    /**
     * Массив из строки разспличеный по "Т".
     */
    const arraySplitT: string[] = date.split('T');
    /**
     * Массив из строки разспличеный по "-".
     * - Получим в формате: ["2023", "12", "28"].
     */
    const arraySplitMinus: string[] = arraySplitT[0].split('-');


	return (
		<>
            <View style={styles.dateBox} >
                <View style={styles.dayBox} >
                    <Text style={styles.textDate} >{arraySplitMinus[2]}</Text>
                </View>
                <View style={styles.dayBox} >
                    <Text style={styles.textDate} >{arraySplitMinus[1]}</Text>
                </View>
                <View style={styles.dayBox}>
                    <Text style={styles.textDate} >{arraySplitMinus[0]}</Text>
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
