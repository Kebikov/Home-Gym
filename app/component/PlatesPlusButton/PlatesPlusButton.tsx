import { Pressable, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { COLOR_ROOT_APP } from '@/data/colors';

interface IPlatesPlusButton {
    /**
     * Значение кнопки.
     */
    platesPlus: string;
    setState: React.Dispatch<React.SetStateAction<string[]>>;
}
/**
 * Кнопка с весом который надо добавить.
 * @returns 
 */
//= PlatesPlusButton 
const PlatesPlusButton: FC<IPlatesPlusButton> = ({platesPlus, setState}) => {

    const addWeight = (value: string) => {
        if(setState !== undefined) {
            setState(state => {
                const newArray = [...state, value];
                newArray.sort((x, y) => Number(y) - Number(x));
                return newArray;
            });
        }
    }

    return(
        <Pressable 
            style={[styles.platesPlusBox]}
            onPress={() => addWeight(platesPlus)}
        >
            <Text style={styles.text} >{platesPlus}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontFamily: 'Sport',
        fontSize: 28
    },
    platesPlusBox: {
        backgroundColor: COLOR_ROOT_APP.LIME_70,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
    }
});

export default PlatesPlusButton;