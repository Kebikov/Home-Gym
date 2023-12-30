import { View, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { IExercise } from '@/data/dataStartExercise';
//* redux
import { setSliceExercise } from '@/redux/slice/sets.slice';
//* component
import Set from '../Set/Set';

interface ISets {
    /**
     * Обьект с упражнением.
     */
    exercise: IExercise;
}

//= Sets
/**
 * @component
 * Блок с набором подходов.
 * @param exercise - массив с подходами.
 * @returns 
 */
const Sets: FC<ISets> = ({exercise}) => {

    /**
     * Массив с повторами в упражнениях.
     */
    let set = [];
    /**
     * Количество повторов в упражнении.
     */
    const amount = exercise.amount;

    switch(amount) {
        case 12:
            set.push(amount);
            set.push(amount - 1);
            set.push(amount - 2);
            break;
        case 20: 
            set.push(amount);
            set.push(amount - 2);
            set.push(amount - 5);
            break;
        default:
            set.push(amount);
            set.push(amount);
            set.push(amount);
            break;
    }

	return (
		<View style={styles.container} >
			<Set amount={set[2]} title={exercise.title} descriptions={exercise.description} />
            <Set amount={set[1]} title={exercise.title} descriptions={exercise.description} />
            <Set amount={set[0]} title={exercise.title} descriptions={exercise.description} />
            {
                exercise.burpee 
                ?
                <Set amount={exercise.burpee} title='Берпи.' descriptions='с отжиманием и прыжком' />
                :
                null
            }
            
		</View>
	);
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    }
});


export default Sets;
