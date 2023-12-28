import { View, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';
//* component
import Set from '../Set/Set';

const Sets: FC = () => {
	return (
		<View style={styles.container} >
			<Set amount={10} title='Жим лежа со штангой.' descriptions='нетральное положение скамьи' />
            <Set amount={11} title='Жим лежа со штангой.' descriptions='нетральное положение скамьи' />
            <Set amount={12} title='Жим лежа со штангой.' descriptions='нетральное положение скамьи' />
            <Set amount={18} title='Берпи.' descriptions='с отжиманием и прыжком' />
		</View>
	);
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});


export default Sets;
