import { View, Text, StyleSheet, Image } from 'react-native';
import React, { FC } from 'react';
import { COLOR_ROOT_APP } from '@/data/colors';
import { icon } from '@/source/icon/icon';
import { TIsUp } from '@/data/dataStartExercise';

interface IUpDownWeight {
    valueIcon: TIsUp;
}

/**
 * @component
 * Блок с кнопками, увеличить вес, уменьшить вес, заметка.
 * @return {JSX.Element}
 */
const UpDownWeight: FC<IUpDownWeight> = ({valueIcon}) => {
	return (
		<View style={styles.main} >
			<Image source={valueIcon === 'up' ? icon.up_active : icon.up} style={[styles.icon, {top: 5}]} />
            <Image source={valueIcon === '?' ?  icon.question_active : icon.question} style={[styles.icon, {top: 60}]} />
            <Image source={valueIcon === '?' ? icon.down_active : icon.down} style={[styles.icon, {bottom: 5}]} />
		</View>
	);
};

const styles = StyleSheet.create({
    main: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 40,
        height: 150,
        backgroundColor: COLOR_ROOT_APP.WHITE_40,
        borderRadius: 30
    },
    icon: {
        width: 30,
        height: 30,
        position: 'absolute',
        left: 4,
        opacity: .8
    }
});

export default UpDownWeight;
