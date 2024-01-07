import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { FC } from 'react';
import { COLOR_ROOT_APP } from '@/data/colors';
import { IExercise } from '@/data/dataStartExercise';
import { useNavigation, NavigationProp } from '@react-navigation/native';
//* helpers
import calculationTotalWeight from '@/helpers/calculationTotalWeight';
import { TypeRootPage } from '@/navigation/navigation.types';

interface IWeightExercise {
    /**
     * Обьект упражнения.
     */
    exercise: IExercise;
}

//= WeightExercise
/**
 * @component
 * Блок с весами снаряда и обшим весом.
 * @param exercise - Номер упражнения.
 * @example <WeightExercise/>
 * @returns {JSX.Element}
 */
const WeightExercise: FC<IWeightExercise> = ({exercise}) => {

    const {navigate} = useNavigation<NavigationProp<TypeRootPage>>();

    /**
     * Вес первой стороны блинов грифа.
     */
    let weightOne: number | '-';
    /**
     * Вес второй стороны блинов грифа.
     */
    let weightTwo: number | 'THE SAME' | '-';
    /**
     * Обший вес снаряда, гриф + блины.
     */
    let weightTotal: number | '-';

    // если вес грифа равен "0"
    if(exercise.weightNeck === '0') {
        weightOne = '-';
        weightTwo = '-';
        weightTotal = '-';
    } else {
        weightOne = calculationTotalWeight(exercise.weightOne);

        if(exercise.weightTwo === '-') {
            weightTwo = weightOne;
        } else {
            weightTwo = calculationTotalWeight(exercise.weightTwo);
        }
    
        weightTotal = weightOne + weightTwo + Number(exercise.weightNeck);
        weightTotal = Number( weightTotal.toFixed(1) ); 
    }

    if(!exercise) {
        return null;
    }


	return (
        <View style={styles.main} >
            <Pressable 
                style={[styles.left, styles.publicBox]} 
                onPress={() => navigate('EditWeight', {exercise})}
            >
                <Text style={styles.textKg} >{exercise.weightOne}</Text>
            </Pressable>

            <View style={[styles.center, styles.publicBox]} >
                <Text style={styles.textWeight} >{weightTotal}</Text>
                <Text style={styles.textKg} >{`KG / ${exercise.amountExercise}`}</Text>
            </View>

            <View style={[styles.right, styles.publicBox]} >
                <Text style={styles.textKg} >{exercise.weightTwo === '-' ? 'SIMILAR' : exercise.weightTwo}</Text>
            </View>
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
        overflow: 'hidden',
        backgroundColor: COLOR_ROOT_APP.MEDIUM_GREY_50
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
