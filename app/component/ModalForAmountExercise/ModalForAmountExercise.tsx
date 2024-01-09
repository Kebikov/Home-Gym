import { View, Text, StyleSheet, Modal, Button } from 'react-native';
import React, { FC } from 'react';
import { COLOR_ROOT_APP } from '@/data/colors';
import { useAppDispatch } from '@/redux/store/hooks';
import { setSliceChangeExerciseInArray } from '@/redux/slice/sets.slice';
import { IExercise } from '@/data/dataStartExercise';

interface IModalForAmountExercise {
	/**
	 * Состояни открыто ли модальное окно.
	 */
	modalVisible: boolean;
	/**
	 * Функция изминения состояния видимости модального окна.
	 */
	setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
	/**
	 * Обьект упражнения.
	 */
	exercise: IExercise;
}

/**
 * @component
 * Модальное окно с возможностью обнуления количества сделаных упражнений.
 * @param modalVisible Состояни открыто ли модальное окно.
 * @param setModalVisible Функция изминения состояния видимости модального окна.
 * @param exercise Обьект упражнения.
 * @example <ModalForAmountExercise modalVisible={#} setModalVisible={#} exercise={#} />
 * @returns {JSX.Element}
 */
//= ModalForAmountExercise
const ModalForAmountExercise: FC<IModalForAmountExercise> = ({ modalVisible, setModalVisible, exercise }) => {
	const dispatch = useAppDispatch();

	return (
		<View style={styles.container}>
			<Modal animationType='fade' transparent={true} visible={modalVisible}>
				<View style={styles.container}>
					<View style={styles.modalBox}>
						<Text style={styles.text}>Обнулить счетчик упражнений ?</Text>
						<View style={styles.buttonBox}>
							<View style={styles.button}>
								<Button
									title='yes'
									color={COLOR_ROOT_APP.LIME_70}
									onPress={() => {
										dispatch(
											setSliceChangeExerciseInArray({
												day: exercise.day,
												exercise: exercise.exercise,
												amountExercise: 0
											})
										);
										setModalVisible(!modalVisible);
									}}
								/>
							</View>
							<View style={styles.button}>
								<Button title='not' color={COLOR_ROOT_APP.MEDIUM_GREY} onPress={() => setModalVisible(!modalVisible)} />
							</View>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	modalBox: {
		width: 330,
		height: 150,
		backgroundColor: COLOR_ROOT_APP.DARK_GREY,
		borderRadius: 10,
		borderColor: COLOR_ROOT_APP.LIME_70,
		borderWidth: 3,

		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: 'white',
		fontSize: 17,
		fontWeight: '500'
	},
	buttonBox: {
		flexDirection: 'row',
		gap: 50,
		marginTop: 20
	},
	button: {
		width: 70
	}
});

export default ModalForAmountExercise;
