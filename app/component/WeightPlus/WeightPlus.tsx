import { View, StyleSheet } from 'react-native';
import React, { FC } from 'react';


interface IWeightPlus {
    children: JSX.Element | JSX.Element[];
}

/**
 * Обертка для элементов с добавленым весом.
 */
//= WeightPlus 
const WeightPlus: FC<IWeightPlus> = ({children}) => {
    return(
        <View style={styles.weightPlus} >
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    weightPlus: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12
    }
});

export default WeightPlus;