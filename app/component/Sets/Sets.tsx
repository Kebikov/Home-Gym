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

/**
 * @component
 * Блок с набором подходов.
 * @param exercise - массив с подходами.
 * @returns 
 */
const Sets: FC<ISets> = ({exercise}) => {
    // {"amount": 12, "amountExercise": 5, "burpee": 18, "description": "третий упор от сиденья", "img": 8, "title": "Битепс, сидя с упором в скамью.", "weightNeck": "1.6", "weightOne": "4+3", "weightTwo": "4+3+0"}

    let set = [];
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
            <Set amount={set[1]} title={exercise.title}  descriptions={exercise.description} />
            <Set amount={set[0]} title={exercise.title}  descriptions={exercise.description} />
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
