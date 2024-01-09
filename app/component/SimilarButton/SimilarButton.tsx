import { Pressable, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { COLOR_ROOT_APP } from '@/data/colors';


interface ISimilarButton {
    /**
     * Состояние веса с первой стороны.
     */
    stateOneWeight: string[];
    /**
     * Установка state второй стороны.
     */
    setStateTwoWeight: React.Dispatch<React.SetStateAction<string[]>>;
}
/**
 * Кнопка с установкой одинакового веса на второй стороне гантели с первым.
 * - Будет установлен вес такойже на второй стороне как у первой.
 * @returns 
 */
//= SimilarButton 
const SimilarButton: FC<ISimilarButton> = ({stateOneWeight, setStateTwoWeight}) => {

    const onSimilar = () => {
        if(stateOneWeight !== undefined && setStateTwoWeight !== undefined) {
            setStateTwoWeight(['-']);
        }
    }

    return(
        <Pressable 
            style={[styles.platesPlusBox, {width: 130}]}
            onPress={() => onSimilar()}
        >
            <Text style={styles.text} >similar</Text>
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

export default SimilarButton;