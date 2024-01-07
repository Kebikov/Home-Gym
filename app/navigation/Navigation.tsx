import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { COLOR_ROOT_APP } from '@/data/colors';
import { TypeRootPage } from './navigation.types';
//* component
import DaysScreen from '@/screen/DaysScreen/DaysScreen';
import ExerciseScreen from '@/screen/ExerciseScreen/ExerciseScreen';
import EditWeightScreen from '@/screen/EditWeightScreen/EditWeightScreen';

const Stack  = createNativeStackNavigator<TypeRootPage>();

const Navigation: FC = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: `${COLOR_ROOT_APP.BACKGROUND}`
                    }
                }}
            >   
                <Stack.Screen name='DaysScreen' component={DaysScreen} />
                <Stack.Screen name='ExerciseScreen' component={ExerciseScreen} options={{ animation: 'slide_from_right' }} />
                <Stack.Screen name='EditWeight' component={EditWeightScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;