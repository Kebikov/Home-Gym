import { View, Text, StyleSheet, Modal, Button, TextInput, ToastAndroid } from 'react-native';
import React, { FC, useState } from 'react';
import { COLOR_ROOT_APP } from '@/data/colors';
import { useAppDispatch } from '@/redux/store/hooks';
import { setSliceChangeExerciseInArray } from '@/redux/slice/sets.slice';
import { IModalForAmountExercise } from '../ModalForAmountExercise/ModalForAmountExercise';
import { TId } from '../Set/Set';

interface IModalForAmount extends IModalForAmountExercise {
    id: TId
}

/**
 * @component
 * Модальное окно с возможностью установки колличества повторов в упражнении.
 * @param modalVisible Состояни открыто ли модальное окно.
 * @param setModalVisible Функция изминения состояния видимости модального окна.
 * @param exercise Обьект упражнения.
 * @example <ModalForAmount modalVisible={#} setModalVisible={#} exercise={#} amount={#} />
 * @returns {JSX.Element}
 */
//= ModalForAmount
const ModalForAmount: FC<IModalForAmount> = ({ modalVisible, setModalVisible, exercise, id }) => {
	const dispatch = useAppDispatch();

    const [stateAmount, setStateAmount] = useState<string>('');

    const onChangeInput = (str: string) => {
        setStateAmount(str);
    }

    const saveData = () => {
        let amount = Number(stateAmount);

        if(typeof amount === 'number') {
            if(id === 'burpee') {
                dispatch(
                    setSliceChangeExerciseInArray({
                        day: exercise.day,
                        exercise: exercise.exercise,
                        burpee: amount
                    })
                );
                ToastAndroid.show('Данные сохранены.', ToastAndroid.SHORT);
            }
            if(id === '2') {
                dispatch(
                    setSliceChangeExerciseInArray({
                        day: exercise.day,
                        exercise: exercise.exercise,
                        amount
                    })
                );
                ToastAndroid.show('Данные сохранены.', ToastAndroid.SHORT);
            }
        } else {
            ToastAndroid.show('Значение должно быть числом.', ToastAndroid.SHORT);
        }
    }

	return (
		<View style={styles.container}>
			<Modal animationType='fade' transparent={true} visible={modalVisible}>
				<View style={styles.container}>
					<View style={styles.modalBox}>
						<Text style={styles.text}>Количество повторов.</Text>
                        <TextInput
                            onChangeText={str => onChangeInput(str)}
                            value={stateAmount}
                            keyboardType="numeric"
                            style={styles.input}
                        />
						<View style={styles.buttonBox}>
							<View style={styles.button}>
								<Button
									title='save'
									color={COLOR_ROOT_APP.LIME_70}
									onPress={() => {
                                        saveData();
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
		marginTop: 10
	},
	button: {
		width: 70
	}, 
    input: {
        marginTop: 8,
        backgroundColor: 'white',
        width: 70,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 3,

        color: 'black',
        fontSize: 21,
        fontWeight: '600'
    }
});

export default ModalForAmount;
