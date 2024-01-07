import { View, Text, StyleSheet, ImageBackground, Image, Pressable } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { COLOR_ROOT_APP } from '@/data/colors';
import { TScreenPropEditWeightScreen } from '@/navigation/navigation.types';


/**
 * @screen
 * Страница редактирования веса штанги.
 * @returns {JSX.Element}
 */
const EditWeight: FC<TScreenPropEditWeightScreen> = ({route}) => {

    const exercise = route.params.exercise;
    // {"amount": 20, "amountExercise": 2, "burpee": 18, "day": "DAY_3", "description": "штанга WZ", "exercise": "EXERCISE_1", 
    // "id": 7, "img": 12, "isUp": "not", "title": "Битепс, стоя со штангой.", "weightNeck": "5", "weightOne": "10+1+1", "weightTwo": "-"}
    const [weightOne, setWeightOne] = useState<string[]>([]);
    const [weightTwo, setWeightTwo] = useState<string[]>([]);
    console.log('weightTwo >>> ',weightTwo);

    const weightOneElements: Array<JSX.Element> = weightOne.map((item, i, arr) => {
        if( (arr.length - 1) === i) {
            return <PlatesGrey platesWeight={item} setState={setWeightOne} />
        } else {
            return(
                <>
                    <PlatesGrey platesWeight={item} setState={setWeightOne}/>
                    <Plus/>
                </>
            )
        }
    });

    const weightTwoElements: Array<JSX.Element> = weightTwo.map((item, i, arr) => {

        if(arr[0] === '-') {
            return <PlatesGrey platesWeight='similar' widthButton={130} />
        } else {

            if( (arr.length - 1) === i) {
                return <PlatesGrey platesWeight={item} setState={setWeightTwo} />
            } else {
                return(
                    <>
                        <PlatesGrey platesWeight={item} setState={setWeightTwo} />
                        <Plus/>
                    </>
                )
            }

        }
    });


    useEffect(() => {
        /**
         * Массив с значениями весов, сплитится строка по знаку +.
         * @accepts '20+10+5'
         * @returns ['20', '10', '5']
         */
        const oneArray = exercise.weightOne.split('+');
        setWeightOne(oneArray);
        if(exercise.weightTwo === '-') {
            setWeightTwo(['-']);
        } else {
            /**
             * Массив с значениями весов, сплитится строка по знаку +.
             * @accepts '20+10+5'
             * @returns ['20', '10', '5']
             */
            const twoArray = exercise.weightTwo.split('+');
            setWeightTwo(twoArray);
        }
        
    },[]);

    return (
        <View style={{flex: 1}}>
            <ImageBackground source={require('../../../assets/splash.png')} style={styles.imageBackground}>
                <View style={styles.main} >

                    <Text style={[styles.text]} >top weight</Text>

                    <CurrentWeight>
                        {weightOneElements}
                    </CurrentWeight>

                    <Line/>

                    <WeightPlus>
                        <PlatesPlusButton platesPlus='20' setState={setWeightOne} />
                        <PlatesPlusButton platesPlus='10' setState={setWeightOne} />
                        <PlatesPlusButton platesPlus='5' setState={setWeightOne} />
                        <PlatesPlusButton platesPlus='4' setState={setWeightOne} />
                        <PlatesPlusButton platesPlus='3' setState={setWeightOne} />
                        <PlatesPlusButton platesPlus='2' setState={setWeightOne} />
                        <PlatesPlusButton platesPlus='1' setState={setWeightOne} />
                        <PlatesPlusButton platesPlus='0' setState={setWeightOne} />
                    </WeightPlus>

                    <Image source={require('@/source/img/weight/grif.png')} style={styles.grifImg}/>

                    <Text style={[styles.text]} >second weight</Text>

                    <CurrentWeight>
                        {weightTwoElements}
                    </CurrentWeight>

                    <Line/>

                    <WeightPlus>
                        <PlatesPlusButton platesPlus='20' setState={setWeightTwo} />
                        <PlatesPlusButton platesPlus='10' setState={setWeightTwo} />
                        <PlatesPlusButton platesPlus='5' setState={setWeightTwo} />
                        <PlatesPlusButton platesPlus='4' setState={setWeightTwo} />
                        <PlatesPlusButton platesPlus='3' setState={setWeightTwo} />
                        <PlatesPlusButton platesPlus='2' setState={setWeightTwo} />
                        <PlatesPlusButton platesPlus='1' setState={setWeightTwo} />
                        <PlatesPlusButton platesPlus='0' setState={setWeightTwo} />
                        <PlatesPlusButton platesPlus='similar' widthButton={130}/>
                    </WeightPlus>

                </View>
            </ImageBackground>
            
        </View>
    );
};

/**
 * Линия горизонтальная.
 * @returns {JSX.Element}
 */
const Line: FC = () => {
    return(
        <View style={styles.line}></View>
    )
}

interface IPlatesGrey {
    /**
     * Вес блина, строкой.
     */
    platesWeight: string;
    setState?: React.Dispatch<React.SetStateAction<string[]>>;
    widthButton?: number;
}
/**
 * Блок с текстом и весом блина.
 * @param platesWeight - Вес блина.
 * @returns {JSX.Element}
 */
const PlatesGrey: FC<IPlatesGrey> = ({platesWeight, widthButton, setState}) => {
    
    const deleteWeight = (value: string) => {
        console.log('',value);
        if(setState !== undefined) {

            setState(state => {
                const index = state.indexOf(value);
                console.log('i >>> ',index);
                if(index === -1) {
                    return state;
                } else {
                    return state.filter((item, i) => i !== index);
                }
            });

        }
    }

    return(
        <Pressable 
            style={[styles.textBox, styles.backgroundGrey, widthButton ? {width: widthButton} : null]} 
            onPress={() => deleteWeight(platesWeight)}
        >
            <Text style={[styles.text]} >{platesWeight}</Text>
        </Pressable>
    )
}

/**
 * Знак +
 * @returns {JSX.Element}
 */
const Plus: FC = () => {
    return (
        <View style={styles.textBoxPlus}>
            <Text style={[styles.text]} >+</Text>
        </View>
    )
};

interface ICurrentWeight {
    children: JSX.Element | JSX.Element[];
}
/**
 * Обертка для текушего веса.
 */
const CurrentWeight: FC<ICurrentWeight> = ({children}) => {
    return(
        <View style={[styles.currentWeight]} >
            {children}
        </View>
    )
}

interface IWeightPlus {
    children: JSX.Element | JSX.Element[];
}
/**
 * Обертка для элементов с добавленым весом.
 */
const WeightPlus: FC<IWeightPlus> = ({children}) => {
    return(
        <View style={styles.weightPlus} >
            {children}
        </View>
    )
}

interface IPlatesPlusButton {
    /**
     * Значение кнопки.
     */
    platesPlus: string;
    widthButton?: number;
    setState?: React.Dispatch<React.SetStateAction<string[]>>;
}
/**
 * Кнопка с весом который надо добавить.
 * @returns 
 */
const PlatesPlusButton: FC<IPlatesPlusButton> = ({platesPlus, widthButton, setState}) => {

    const addWeight = (value: string) => {
        if(setState !== undefined) {
            setState(state => {
                const newArray = [...state, value];
                newArray.sort((x, y) => Number(y) - Number(x));
                return newArray;
            });
        }
    }

    return(
        <Pressable 
            style={[styles.platesPlusBox, widthButton ? {width: widthButton} : null]}
            onPress={() => addWeight(platesPlus)}
        >
            <Text style={styles.text} >{platesPlus}</Text>
        </Pressable>
    )
}

/**
 * Styles
 */
const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontFamily: 'Sport',
        fontSize: 28
    },
    textBox: {
        width: 40,
        height:40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBoxPlus:{
        width: 30,
        height:40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundGrey: {
        backgroundColor: COLOR_ROOT_APP.MEDIUM_GREY_50,
        borderRadius: 7,
    },
    imageBackground: {
        flex: 1
    },
    main: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    grifImg: {
        width: 220,
        height:170,
        resizeMode: 'contain'
    },
    currentWeight: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10
    },
    line: {
        width: '80%',
        height: 2,
        backgroundColor: 'white',
        marginTop: 10
    },
    platesPlusBox: {
        backgroundColor: COLOR_ROOT_APP.LIME_70,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
    },
    weightPlus: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12
    }
})

export default EditWeight;