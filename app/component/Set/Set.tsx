import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { FC, useState } from 'react';
import { COLOR_ROOT_APP } from '@/data/colors';
import COMMAND_SQL from '@/SQLite/CommandSQL/commandSQL';
//* redux
import { useAppSelector, useAppDispatch } from '@/redux/store/hooks';
import { setSlicePushSetId } from '@/redux/slice/sets.slice';
import { useDispatch } from 'react-redux';

interface ISet {
    /**
     * Количество повторов в подходе.
     */
    amount: number;
    /**
     * Титульный текст.
     */
    title: string;
    /**
     * Описание под титульным текстом.
     */
    descriptions: string;
    /**
     * Уникальное имя поля.
     * - Формируется как обшее название упражнения + номер по очередности.
     * - Пример: 'EXERCISE_1' + 1.
     */
    id: string;
}


/**
 * @component
 * Блок с одним повтором упражнения.
 * @param amount - Количество повторов в подходе.
 * @param title - Титульный текст.
 * @param descriptions - Описание под титульным текстом.
 * @example <Set amount={#} title={#} descriptions={#} />
 * @returns {JSX.Element}
 */
//= Set 
const Set: FC<ISet> = ({amount, title, descriptions, id}) => {

    const dispatch = useDispatch();
    /**
     * Массив с нажатыми id.
     */
    const pushSetId = useAppSelector(state => state.setsSlice.pushSetId);
    /**
     * Переменная с результатом, есть ли совпадения в массиве с нажатыми id, нашего текушего id.
     */
    const isPush: boolean = pushSetId.includes(id);

    const onPush = () => {
        dispatch(setSlicePushSetId(id));
    }

    
	return (
		<Pressable 
            style={[styles.container, isPush ? {borderColor: COLOR_ROOT_APP.LIME_70, borderWidth: 3} : null]} 
            onPress={() => onPush()} 
        >
            <View style={styles.rapBox} >
                <Text style={styles.textRap} >{amount}</Text>
            </View>
            <View style={styles.descriptionsBox} >
                <Text style={styles.textTitle} >{title}</Text>
                <Text style={styles.textDescriptions} >{descriptions}</Text>
            </View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 60,
        backgroundColor: COLOR_ROOT_APP.DARK_GREY,
        borderRadius: 10,
        marginTop: 15
    },
    rapBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 5,
        backgroundColor: COLOR_ROOT_APP.GREY,
        marginLeft: 10
    },
    descriptionsBox: {
        marginLeft: 10,
        padding: 3,
        justifyContent: 'center'
    },
    textRap: {
        fontFamily: 'Sport',
        fontSize: 30,
        color: COLOR_ROOT_APP.LIGHT_GREY
    },
    textTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        lineHeight: 18
    },
    textDescriptions: {
        fontSize: 14,
        fontWeight: '500',
        color: COLOR_ROOT_APP.MEDIUM_GREY,
        lineHeight: 16
    }
});

export default Set;
