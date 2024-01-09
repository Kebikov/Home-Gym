import { View, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';

/**
 * Знак +
 * @returns {JSX.Element}
 */
//= Plus 
const Plus: FC = () => {
    return (
        <View style={styles.textBoxPlus}>
            <Text style={[styles.text]} >+</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontFamily: 'Sport',
        fontSize: 28
    },
    textBoxPlus:{
        width: 30,
        height:40,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Plus;