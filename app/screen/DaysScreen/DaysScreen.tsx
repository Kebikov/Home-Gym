import { View, StyleSheet } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { DATA_DAYS } from '@/data/dataDays';
import Gradient from '@/component/Gradient/Gradient';
//* SQL
import DBManagment from '@/SQLite/DBManagment';
import COMMAND_SQL from '@/SQLite/CommandSQL/commandSQL';
import Configuration from '@/SQLite/DBManagment/сonfiguration';
//* component
import Day from '@/component/Day/Day';


//: DaysScreen
/**
 * @screen
 * Экран с карточками, дни с наборами упражнений.
 * @example <DaysScreen/>
 * @returns {JSX.Element}
 */
const DaysScreen: FC = () => {
    console.log('----------------------------------------------------------------');
    /**
     * @param stateDays Массив с данными дней.
     */
    const [stateDays, setStateDays] = useState([]);

    /**
     * Массив элементов карточек с днями тренировак.
     */
    const days: JSX.Element[] = DATA_DAYS.map((item, i) => <Day day={item} key={i}/>);

    useEffect(() => {
        async function getData() {
            const fox = await DBManagment.select(Configuration.TABLE__DAYS);
            console.log('FOX >>>', fox);
        }

        getData();
    },[]);


	return (
		<View style={style.main} >
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
    }
});

export default DaysScreen;



