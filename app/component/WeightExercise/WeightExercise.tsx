import { View, Text, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import React, { FC } from 'react';
import { TDay } from '@/data/dataDays';
//* helpers
import calculationTotalWeight from '@/helpers/calculationTotalWeight';
//* data
import { DATA_START_EXERCISE } from '@/data/dataStartExercise';

interface IWeightExercise {
    /**
     * День занятий, в формате "0" | "1"  | ...
     */
    day: TDay;
    /**
     * Номер упражнения.
     */
    exercise: number;
}

//= WeightExercise
/**
 * @component
 * Блок с весами снаряда и обшим весом.
 * @param day - День занятий, в формате "0" | "1"  | ...
 * @param exercise - Номер упражнения.
 * @example <WeightExercise/>
 * @returns {JSX.Element}
 */
const WeightExercise: FC<IWeightExercise> = ({day, exercise}) => {

    /**
     * Вес первой стороны блинов грифа.
     */
    let weightOne: number;
    /**
     * Вес второй стороны блинов грифа.
     */
    let weightTwo: number | 'THE SAME';
    /**
     * Обший вес снаряда, гриф + блины.
     */
    let weightTotal: number;

    // если вес грифа равен "0"
    if(DATA_START_EXERCISE[day][exercise].weightNeck === '0') {
        weightOne = calculationTotalWeight(DATA_START_EXERCISE[day][exercise].weightOne);
        weightTwo = 'THE SAME';
        weightTotal = weightOne;
    } else {
        weightOne = calculationTotalWeight(DATA_START_EXERCISE[day][exercise].weightOne);

        if(DATA_START_EXERCISE[day][exercise].weightTwo === 'THE SAME') {
            weightTwo = weightOne;
        } else {
            weightTwo = calculationTotalWeight(DATA_START_EXERCISE[day][exercise].weightTwo);
        }
    
        weightTotal = weightOne + weightTwo + Number(DATA_START_EXERCISE[day][exercise].weightNeck);
    }

    
	return (
        <View style={styles.main} >
            
            <BlurView style={[styles.left, styles.publicBox]} intensity={30} tint='dark' >
                <Text style={styles.textKg} >{DATA_START_EXERCISE[day][exercise].weightOne}</Text>
            </BlurView>

            <BlurView style={[styles.center, styles.publicBox]} intensity={30} tint='dark' >
                <Text style={styles.textWeight}>{weightTotal}</Text>
                <Text style={styles.textKg} >KG</Text>
            </BlurView>

            <BlurView style={[styles.right, styles.publicBox]} intensity={30} tint='dark' >
                <Text style={styles.textKg} >{DATA_START_EXERCISE[day][exercise].weightTwo}</Text>
            </BlurView>
            
        </View>
	);
};

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 80,
        gap: 12,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    publicBox: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    absolute: {
        position: 'absolute',
        zIndex: 3,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    left: {
        width: 140,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
    },
    right: {
        width: 140,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
    },
    center: {
        flex: 1,
        borderRadius: 5
    },
    textWeight: {
        fontFamily: 'Sport',
        fontSize: 30,
        color: '#fff'
    },
    textKg: {
        fontFamily: 'Sport',
        fontSize: 17,
        color: '#fff',
    }
});

export default WeightExercise;
