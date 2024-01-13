import { View, StyleSheet, Image, Pressable } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import Gradient from '@/component/Gradient/Gradient';
import { IDataDays } from '@/data/dataDays';
import { icon } from '@/source/icon/icon';
import { NavigationProp, useNavigation } from '@react-navigation/native';
//* SQL
import DBManagment from '@/SQLite/DBManagment';
import Configuration from '@/SQLite/DBManagment/сonfiguration';
//* component
import Day from '@/component/Day/Day';
//* redux
import { useAppSelector } from '@/redux/store/hooks';
import { TypeRootPage } from '@/navigation/navigation.types';


//: DaysScreen
/**
 * @screen
 * Экран с карточками, дни с наборами упражнений.
 * @example <DaysScreen/>
 * @returns {JSX.Element}
 */
const DaysScreen: FC = () => {

    const {navigate} = useNavigation<NavigationProp<TypeRootPage>>();

    /**
     * @param stateDays Массив с данными дней.
     */
    const [stateDays, setStateDays] = useState<Array<IDataDays> | []>([]);

    const isUpdateToggle = useAppSelector(state => state.setsSlice.isUpdateToggle);
    /**
     * Массив элементов карточек с днями тренировак.
     */
    const days: JSX.Element[] = stateDays.map((item, i) => <Day day={item} key={i}/>);

useEffect(() => {
    async function getData() {
        const data: Array<IDataDays> | [] = await DBManagment.inset(`SELECT * FROM ${Configuration.TABLE__DAYS}`); 
        if(data.length !== 0) setStateDays(data);
    }

    getData();
},[isUpdateToggle]);


	return (
		<View style={style.main} >
            <Pressable
                style={style.settingsBox}
                onPress={() => navigate('SettingsScreen')}
            >
                <Image source={icon.settings_icon} style={style.settingsImg} />
            </Pressable>
            <Gradient text='Days Of Training' size={32} />
            {
                days
            }
		</View>
	);
};

const style = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    maskedView: {
        width: '100%',
        flexDirection: 'row',
    },
    linearGradient: {
        width: '100%', 
        height: 30
    },
    text: {
        fontSize: 30,
        fontWeight: '500',
        textTransform: 'uppercase',
        fontFamily: 'Sport'
    },
    settingsBox: {
        position: 'absolute',
        zIndex: 1,
        top: 20,
        right: 20,
        width: 45,
        height: 45,
        padding: 5
    },
    settingsImg: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    }
});

export default DaysScreen;



