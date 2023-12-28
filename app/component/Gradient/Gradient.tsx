import { View, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { colorRootApp } from '@/data/colors';


interface IGradient {
    /**
     * Отображаемый текст.
     */
    text: string;
    /**
     * Размер отоброжаемого текста.
     */
    size: number;
}
/**
 * @component
 * Оболочка для создания текста с гредиентом.
 * @returns 
 */
const Gradient: FC<IGradient>= ({text, size}) => {
	return (
        <MaskedView
            style={{ width: '100%', flexDirection: 'row' }}
            maskElement={
                <View style={{ alignItems: 'center' }} >
                    <Text style={{ fontSize: size, fontFamily: 'Sport' }} >{text}</Text>
                </View>
            }
        >
            <LinearGradient
                colors={['cadetblue', colorRootApp.LIME]}
                style={{ width: '100%', height: size }}
            />
        {/* <Image source={require('@/source/img/3.jpg')} style={{width: '100%', height: 50}}/> */}
        </MaskedView>
	);
};

export default Gradient;
