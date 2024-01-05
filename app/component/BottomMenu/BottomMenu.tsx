import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React, { FC, useEffect } from 'react';
import { icon } from '@/source/icon/icon';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { TypeRootPage } from '@/navigation/navigation.types';
import { TNumExercise } from '@/screen/ExerciseScreen/ExerciseScreen';

interface IBottomMenu {
    /**
     * @function
     * Изминения состояния выбора упражнения.
     * - Состояние должно быть от 0 до 2.
     */
    setSelectExercise: Function;
}

/**
 * @component
 * Навигация вверху экрана.
 * @example <BottomMenu/>
 * @returns {JSX.Element}
 */
const BottomMenu: FC<IBottomMenu> = ({setSelectExercise}) => {

    const {navigate} = useNavigation<NavigationProp<TypeRootPage>>();


	return (
		<View style={styles.container} >
            <Pressable
                // Нажатие назад.
                onPress={() => {
                        setSelectExercise((state: number) => {
                            if(state === 0) { 
                                navigate('DaysScreen');
                            } else if(0 < state && state < 3) {
                                return state - 1;
                            } else {
                                return state;
                            }
                        });
                }}
            >
                <Image source={icon.arrow_back} style={styles.img} />
            </Pressable>
            <Pressable
                // Нажатие вперед.
                onPress={() => {
                    setSelectExercise((state: number) => {
                        if(0 <= state && state < 2) { 
                            return state + 1;
                        } else {
                            return state;
                        }
                    });
                }}
            >
                <Text style={styles.text} >Next Exercise</Text>
            </Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    img: {
        width: 27,
        height: 27,
        marginLeft: 10
    },
    text: {
        color: 'white',
        fontFamily: 'Sport',
        fontSize: 18,
        marginRight: 10
    }
});

export default BottomMenu;
