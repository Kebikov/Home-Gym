import { View, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';

interface ICurrentWeight {
	children: JSX.Element | JSX.Element[];
}

/**
 * Обертка для текушего веса.
 */
//= CurrentWeight
const CurrentWeight: FC<ICurrentWeight> = ({ children }) => {
	return <View style={[styles.currentWeight]}>{children}</View>;
};

const styles = StyleSheet.create({
	currentWeight: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 10
	}
});

export default CurrentWeight;
