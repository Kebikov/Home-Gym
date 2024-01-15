import { useAppDispatch } from '@/redux/store/hooks';
import { setSliceChangeExerciseInArray } from '@/redux/slice/sets.slice';
import { useEffect, useState, useRef } from 'react';
import { RouteProp } from '@react-navigation/native';
import { TypeRootPage } from '@/navigation/navigation.types';

interface IUseEditWeight {
    weightOne: string[];
    setWeightOne: React.Dispatch<React.SetStateAction<string[]>>;
    weightTwo: string[];
    setWeightTwo: React.Dispatch<React.SetStateAction<string[]>>;
}

/**
 * Hook с логикой для страницы редактирования веса.
 */
const useEditWeight = (route: RouteProp<TypeRootPage, 'EditWeight'>): IUseEditWeight => {
    const dispatch = useAppDispatch();

    const exercise = route.params.exercise;
    const [weightOne, setWeightOne] = useState<string[]>([]);
    const [weightTwo, setWeightTwo] = useState<string[]>([]);

    const refWeightOne = useRef<string[]>([]);
    const refWeightTwo = useRef<string[]>([]);
    refWeightOne.current = weightOne;
    refWeightTwo.current = weightTwo;


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

    return {
        weightOne,
        setWeightOne,
        weightTwo,
        setWeightTwo
    }
}

export default useEditWeight;