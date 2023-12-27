import { View, Text, StyleSheet, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import React, { FC } from 'react';
import { colorRootApp } from '@/data/colors';

/**
 * @component
 * Блок с весами снаряда и обшим весом.
 * @example <WeightExercise/>
 * @returns {JSX.Element}
 */
const WeightExercise: FC = () => {
	return (
        <View style={styles.main} >
            
            <BlurView style={[styles.left, styles.publicBox]} intensity={30} tint='dark' >
                <Text style={styles.textKg} >20+10+5+4+1</Text>
            </BlurView>

            <BlurView style={[styles.center, styles.publicBox]} intensity={30} tint='dark' >
                <Text style={styles.textWeight}>87.5</Text>
                <Text style={styles.textKg} >KG</Text>
            </BlurView>

            <BlurView style={[styles.right, styles.publicBox]} intensity={30} tint='dark' >
                <Text style={styles.textKg} >the same</Text>
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
