import { View, Text, StyleSheet, Image } from 'react-native';
import React, { FC } from 'react';
import { colorRootApp } from '@/data/colors';
import { icon } from '@/source/icon/icon';

/**
 * @component
 * Блок с кнопками, увеличить вес, уменьшить вес, заметка.
 * @return {JSX.Element}
 */
const UpDownWeight: FC = () => {
	return (
		<View style={styles.main} >
			<Image source={icon.up} style={[styles.icon, {top: 5}]} />
            <Image source={icon.question} style={[styles.icon, {top: 60}]} />
            <Image source={icon.down} style={[styles.icon, {bottom: 5}]} />
		</View>
	);
};

const styles = StyleSheet.create({
    main: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 40,
        height: 150,
        backgroundColor: colorRootApp.WHITE_40,
        borderRadius: 30
    },
    icon: {
        width: 30,
        height: 30,
        position: 'absolute',
        left: 4
    }
});

export default UpDownWeight;
