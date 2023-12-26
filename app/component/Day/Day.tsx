import { View, Text, StyleSheet, ImageBackground, Image, Pressable } from 'react-native';
import React, { FC } from 'react';
import { colorRootApp } from '@/data/colors';
import { IDataDays } from '@/data/dataDays';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TScreenPropExerciseScreen, TypeRootPage } from '@/navigation/navigation.types';

interface IDay {
    currentDay: IDataDays
}

/**
 * @component
 * Карточка дня занятий. 
 * @returns {JSX.Element} 
 */
const Day: FC<IDay> = ({currentDay}) => {

    const {navigate} = useNavigation<NavigationProp<TypeRootPage>>();

	return (
		<Pressable
            onPress={ 
                () => {
                    navigate('ExerciseScreen', {id: currentDay.id});
                }
            }
            style={style.main} 
        >
            <ImageBackground
                source={currentDay.img}
                style={style.imageBackground}
            >
                <View style={style.overlay} />
                <Image 
                    source={
                                currentDay.lastExercise 
                                    ? 
                                    require('@/source/img/dumbbell-orange.png')
                                    :
                                    require('@/source/img/dumbbell-white.png')
                            } 
                    style={style.dumbbell} 
                />
                <View style={style.textDateBox}>
                    <Text style={style.textDate} >{currentDay.date}</Text>
                </View>

                <View> 
                    <View style={style.titleBox} >
                        <Text style={style.title} >{currentDay.title}</Text>
                    </View>
                    <Text style={style.textPart} >{currentDay.description}</Text>
                </View>
            </ImageBackground>
		</Pressable>
	);
};

const style = StyleSheet.create({
    main: {
        width: '85%',
        height: 132,
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 15,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5
    },
    dumbbell: {
        position: 'absolute',
        top: 10,
        right: 15,
        width: 30,
        height: 19,
        resizeMode: 'contain'
    },
    titleBox: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 24, 
        fontFamily: 'Sport',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 5,
        fontWeight: '600',
        backgroundColor: `${colorRootApp.green}`,
        marginLeft: 10,
    },
    textDateBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderLeftWidth: 3,
        borderLeftColor: `${colorRootApp.green}`,
        marginLeft: 10,
        marginTop: 10,
        height: 20
    },
    textDate: {
        color: 'white',
        fontWeight: '500',
        fontSize: 12,
        marginLeft: 10
    },
    textPart: {
        color: 'white',
        fontSize: 12, 
        fontWeight: '500',
        marginLeft: 10,
        paddingTop: 10,
        paddingBottom: 10
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'space-between',
    }
});

export default Day;
