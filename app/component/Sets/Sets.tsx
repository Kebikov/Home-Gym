import { View, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { IExercise } from '@/data/dataStartExercise';
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

    // Добавление количества подходов от меньшего к большему. Пример: [10, 11, 12].
    switch(amount) {
        case 12:
            set.push(amount - 2);
            set.push(amount - 1);
            set.push(amount);
            break;
        case 20: 
            set.push(amount - 5);
            set.push(amount - 2);
            set.push(amount);
            break;
        default:
            set.push(amount - 2);
            set.push(amount - 1);
            set.push(amount);
            break;
    }

    

	return (
		<View style={styles.container} >
			<Set amount={set[0]} title={exercise.title} descriptions={exercise.description} id={exercise.exercise + '-' + 0} />
            <Set amount={set[1]} title={exercise.title} descriptions={exercise.description} id={exercise.exercise + '-' + 1} />
            <Set amount={set[2]} title={exercise.title} descriptions={exercise.description} id={exercise.exercise + '-' + 2} />
            {
                exercise.burpee 
                ?
                <Set amount={exercise.burpee} title='Берпи.' descriptions='с отжиманием и прыжком' id={exercise.exercise + '-' + 3} />
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
