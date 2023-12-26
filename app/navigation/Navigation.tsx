import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { colorRootApp } from '@/data/colors';
import { TypeRootPage } from './navigation.types';
//* component
import DaysScreen from '@/screen/DaysScreen/DaysScreen';
import ExerciseScreen from '@/screen/ExerciseScreen/ExerciseScreen';

const Stack  = createNativeStackNavigator<TypeRootPage>();

const Navigation: FC = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: `${colorRootApp.background}`
                    }
                }}
            >   
                
                <Stack.Screen name='ExerciseScreen' component={ExerciseScreen} options={{ animation: 'slide_from_right' }} />
                <Stack.Screen name='DaysScreen' component={DaysScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;