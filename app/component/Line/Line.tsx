import { View, StyleSheet } from 'react-native';
import React, { FC } from 'react';

/**
 * Линия горизонтальная.
 * @returns {JSX.Element}
 */
//= Line
const Line: FC = () => {
	return <View style={styles.line}></View>;
};

const styles = StyleSheet.create({
	line: {
		width: '80%',
		height: 2,
		backgroundColor: 'white',
		marginTop: 10
	}
});

export default Line;
