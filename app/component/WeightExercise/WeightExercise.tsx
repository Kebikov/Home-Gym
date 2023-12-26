import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React, { FC } from 'react';
import { colorRootApp } from '@/data/colors';
import MaskedView from '@react-native-masked-view/masked-view';

/**
 * @component
 * Блок с весами снаряда и обшим весом.
 * @example
 * <WeightExercise/>
 * @returns {JSX.Element}
 */
const WeightExercise: FC = () => {
	return (
        <ImageBackground style={styles.main} source={require('@/source/img/fon.png')}>
            <View style={styles.left} ></View>
            <View style={styles.center} ></View>
            <View style={styles.right} ></View>
        </ImageBackground>
	);
};

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 80,
        //backgroundColor: 'red'
    },
    left: {
        //backgroundColor: colorRootApp.orange,
        width: 150,
        borderBottomEndRadius: -20,
        borderBottomWidth: 20,
    },
    right: {
        //backgroundColor: colorRootApp.orange,
        width: 150,
    },
    center: {
        //backgroundColor: colorRootApp.orange,
        width: 100,
        height: 100
    }
});

export default WeightExercise;
