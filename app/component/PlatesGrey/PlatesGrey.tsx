import { Text, StyleSheet, Pressable } from 'react-native';
import React, { FC } from 'react';
import { COLOR_ROOT_APP } from '@/data/colors';

interface IPlatesGrey {
	/**
	 * Вес блина, строкой.
	 */
	platesWeight: string;
    /**
     * Функция изминения состояния у текушего веса.
     */
	setState?: React.Dispatch<React.SetStateAction<string[]>>;
    /**
     * Ширина кнопки.
     */
	widthButton?: number;
}

/**
 * Один из текуших весов блина.
 * @param platesWeight - Вес блина.
 * @returns {JSX.Element}
 */
//= PlatesGrey
const PlatesGrey: FC<IPlatesGrey> = ({ platesWeight, widthButton, setState }) => {
	const deleteWeight = (value: string) => {
		if (setState !== undefined) {
			setState(state => {
				const index = state.indexOf(value);
				if (index === -1) {
					return state;
				} else {
					return state.filter((item, i) => i !== index);
				}
			});
		}
	};

	return (
		<Pressable style={[styles.textBox, styles.backgroundGrey, widthButton ? { width: widthButton } : null]} onPress={() => deleteWeight(platesWeight)}>
			<Text style={[styles.text]}>{platesWeight}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	text: {
		color: 'white',
		fontFamily: 'Sport',
		fontSize: 28
	},
	textBox: {
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center'
	},
	backgroundGrey: {
		backgroundColor: COLOR_ROOT_APP.MEDIUM_GREY_50,
		borderRadius: 7
	}
});

export default PlatesGrey;
