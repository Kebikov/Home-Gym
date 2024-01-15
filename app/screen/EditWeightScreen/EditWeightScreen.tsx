import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import React, { FC } from 'react';
import { TScreenPropEditWeightScreen } from '@/navigation/navigation.types';
//* component
import TopMenu from '@/component/TopMenu/TopMenu';
import Plus from '@/component/Plus/Plus';
import Line from '@/component/Line/Line';
import PlatesGrey from '@/component/PlatesGrey/PlatesGrey';
import CurrentWeight from '@/component/CurrentWeight/CurrentWeight';
import WeightPlus from '@/component/WeightPlus/WeightPlus';
import PlatesPlusButton from '@/component/PlatesPlusButton/PlatesPlusButton';
import SimilarButton from '@/component/SimilarButton/SimilarButton';
import useEditWeight from '@/hook/useEditWeight';


/**
 * @screen
 * Страница редактирования веса штанги.
 * @returns {JSX.Element}
 */
//-- EditWeight 
const EditWeight: FC<TScreenPropEditWeightScreen> = ({route}) => {

    const {weightOne, setWeightOne, weightTwo, setWeightTwo} = useEditWeight(route);
    /**
     * Элементы с текушим весом на первой стороне.
     */
    const weightOneElements: Array<JSX.Element> = weightOne.map((item, i, arr) => {
        if( (arr.length - 1) === i) {
            return <PlatesGrey platesWeight={item} setState={setWeightOne} key={'one' + i} />
        } else {
            return(
                <React.Fragment key={'one2' + i}>
                    <PlatesGrey platesWeight={item} setState={setWeightOne} />
                    <Plus/>
                </React.Fragment>
            )
        }
    });
    /**
     * Элементы с текушим весом на второй стороне.
     */
    const weightTwoElements: Array<JSX.Element> = weightTwo.map((item, i, arr) => {
        if(arr[0] === '-') {
            return <PlatesGrey platesWeight='similar' widthButton={130} key={'two1' + i} />
        } else {
            if( (arr.length - 1) === i) {
                return <PlatesGrey platesWeight={item} setState={setWeightTwo} key={'two2' + i} />
            } else {
                return(
                    <React.Fragment key={'two3' + i}>
                        <PlatesGrey platesWeight={item} setState={setWeightTwo} />
                        <Plus/>
                    </React.Fragment>
                )
            }
        }
    });


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
                        <SimilarButton stateOneWeight={weightOne} setStateTwoWeight={setWeightTwo} />
                    </WeightPlus> 
                </View>
            </ImageBackground>
        </View>
        </>
    );
};


const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontFamily: 'Sport',
        fontSize: 28
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
    }
})

export default EditWeight;