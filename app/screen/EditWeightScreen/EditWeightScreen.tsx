import { View, Text, StyleSheet, ImageBackground, Image, Pressable } from 'react-native';
import React, { FC, useEffect, useState, useRef } from 'react';
import { COLOR_ROOT_APP } from '@/data/colors';
import { TScreenPropEditWeightScreen } from '@/navigation/navigation.types';
import { useAppDispatch } from '@/redux/store/hooks';
import { setSliceChangeExerciseInArray } from '@/redux/slice/sets.slice';
//* component
import TopMenu from '@/component/TopMenu/TopMenu';


/**
 * @screen
 * Страница редактирования веса штанги.
 * @returns {JSX.Element}
 */
//-- EditWeight 
const EditWeight: FC<TScreenPropEditWeightScreen> = ({route}) => {

    const dispatch = useAppDispatch();

    const exercise = route.params.exercise;
    const [weightOne, setWeightOne] = useState<string[]>([]);
    const [weightTwo, setWeightTwo] = useState<string[]>([]);

    const refWeightOne = useRef<string[]>([]);
    const refWeightTwo = useRef<string[]>([]);
    refWeightOne.current = weightOne;
    refWeightTwo.current = weightTwo;

    console.log('********');
    /**
     * Элементы с текушим весом на первой стороне.
     */
    const weightOneElements: Array<JSX.Element> = weightOne.map((item, i, arr) => {
        if( (arr.length - 1) === i) {
            console.log('I1 >>> ',i);
            return <PlatesGrey platesWeight={item} setState={setWeightOne} key={'one' + i} />
        } else {
            console.log('i2 >>> ',i);
            return(
                <>
                    <PlatesGrey platesWeight={item} setState={setWeightOne} key={'one' + i} />
                    <Plus key={'onePlus' + i} />
                </>
            )
        }
    });
    console.log('--------');
    /**
     * Элементы с текушим весом на второй стороне.
     */
    const weightTwoElements: Array<JSX.Element> = weightTwo.map((item, i, arr) => {

        if(arr[0] === '-') {
            return <PlatesGrey platesWeight='similar' widthButton={130} key={'two' + i} />
        } else {
            console.log('IL1 >>> ',i);
            if( (arr.length - 1) === i) {
                return <PlatesGrey platesWeight={item} setState={setWeightTwo} key={'two' + i} />
            } else {
                console.log('IL2 >>> ',i);
                return(
                    <>
                        <PlatesGrey platesWeight={item} setState={setWeightTwo} key={'two' + i} />
                        <Plus key={'twoPlus' + i} />
                    </>
                )
            }

        }
    });


    useEffect(() => {
        if(exercise.weightOne === '') {
            setWeightOne([]);
        } else {
            /**
             * Массив с значениями весов, сплитится строка по знаку +.
             * @accepts '20+10+5'
             * @returns ['20', '10', '5']
             */
            const oneArray = exercise.weightOne.split('+');
            setWeightOne(oneArray);
        }

        if(exercise.weightTwo === '-') {
            setWeightTwo(['-']);
        } else if(exercise.weightTwo === '') {
            setWeightTwo([]);
        } else {
            /**
             * Массив с значениями весов, сплитится строка по знаку +.
             * @accepts '20+10+5'
             * @returns ['20', '10', '5']
             */
            const twoArray = exercise.weightTwo.split('+');
            setWeightTwo(twoArray);
        }

        return () => {
            dispatch(setSliceChangeExerciseInArray(
                {
                    day: exercise.day,
                    exercise: exercise.exercise,
                    weightOne: refWeightOne.current.join('+'),
                    weightTwo: refWeightTwo.current[0] === '-' ? '-' : refWeightTwo.current.join('+')
                }
            ));
        }

    },[]);



    console.log(refWeightOne.current);
    return (
        <>
        <TopMenu/>
        <View style={{flex: 1}}>
            <ImageBackground source={require('@/source/img/fonGum.jpg')} style={styles.imageBackground} >
                <View style={styles.main} >

                    <Text style={[styles.text]} >top weight</Text>

                    <CurrentWeight>
                        {weightOneElements}
                    </CurrentWeight>

                    <Line/>

                    <WeightPlus key={1}>
                        <PlatesPlusButton platesPlus='20' setState={setWeightOne} key={1} />
                        <PlatesPlusButton platesPlus='10' setState={setWeightOne} key={2} />
                        <PlatesPlusButton platesPlus='5' setState={setWeightOne} key={3} />
                        <PlatesPlusButton platesPlus='4' setState={setWeightOne} key={4}/>
                        <PlatesPlusButton platesPlus='3' setState={setWeightOne} key={5}/>
                        <PlatesPlusButton platesPlus='2' setState={setWeightOne} key={6}/>
                        <PlatesPlusButton platesPlus='1' setState={setWeightOne} key={7}/>
                        <PlatesPlusButton platesPlus='0' setState={setWeightOne} key={8}/>
                    </WeightPlus>

                    <Image source={require('@/source/img/weight/grif.png')} style={styles.grifImg}/>

                    <Text style={[styles.text]} >second weight</Text>

                    <CurrentWeight>
                        {weightTwoElements}
                    </CurrentWeight>

                    <Line/>

                    <WeightPlus key={2}>
                        <PlatesPlusButton platesPlus='20' setState={setWeightTwo} key={9}/>
                        <PlatesPlusButton platesPlus='10' setState={setWeightTwo} key={10}/>
                        <PlatesPlusButton platesPlus='5' setState={setWeightTwo} key={11}/>
                        <PlatesPlusButton platesPlus='4' setState={setWeightTwo} key={12}/>
                        <PlatesPlusButton platesPlus='3' setState={setWeightTwo} key={13}/>
                        <PlatesPlusButton platesPlus='2' setState={setWeightTwo} key={14}/>
                        <PlatesPlusButton platesPlus='1' setState={setWeightTwo} key={15}/>
                        <PlatesPlusButton platesPlus='0' setState={setWeightTwo} key={16}/>
                        <SimilarButton stateOneWeight={weightOne} setStateTwoWeight={setWeightTwo} />
                    </WeightPlus> 

                </View>
            </ImageBackground>
            
        </View>
        </>
    );
};

/**
 * Линия горизонтальная.
 * @returns {JSX.Element}
 */
//= Line 
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
//= PlatesGrey 
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
//= Plus 
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
//= CurrentWeight 
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
//= WeightPlus 
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
    setState: React.Dispatch<React.SetStateAction<string[]>>;
}
/**
 * Кнопка с весом который надо добавить.
 * @returns 
 */
//= PlatesPlusButton 
const PlatesPlusButton: FC<IPlatesPlusButton> = ({platesPlus, setState}) => {

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
            style={[styles.platesPlusBox]}
            onPress={() => addWeight(platesPlus)}
        >
            <Text style={styles.text} >{platesPlus}</Text>
        </Pressable>
    )
}




interface ISimilarButton {
    /**
     * Состояние веса с первой стороны.
     */
    stateOneWeight: string[];
    /**
     * Установка state второй стороны.
     */
    setStateTwoWeight: React.Dispatch<React.SetStateAction<string[]>>;
}
/**
 * Кнопка с установкой одинакового веса на второй стороне гантели с первым.
 * - Будет установлен вес такойже на второй стороне как у первой.
 * @returns 
 */
//= PlatesPlusButton 
const SimilarButton: FC<ISimilarButton> = ({stateOneWeight, setStateTwoWeight}) => {

    const onSimilar = () => {
        if(stateOneWeight !== undefined && setStateTwoWeight !== undefined) {
            setStateTwoWeight(['-']);
        }
    }

    return(
        <Pressable 
            style={[styles.platesPlusBox, {width: 130}]}
            onPress={() => onSimilar()}
        >
            <Text style={styles.text} >similar</Text>
        </Pressable>
    )
}

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