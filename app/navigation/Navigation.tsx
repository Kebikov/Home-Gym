import { View, Text } from 'react-native';
import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { TypeRootPage } from './navigation.types';
//* component
import Auth from '@/screen/Auth/Auth';
import Home from '@/screen/Home/Home';
import Ticket from '@/screen/Ticket/Ticket';
import DataTicket from '@/screen/DataTicket/DataTicket';

const Stack  = createNativeStackNavigator<TypeRootPage>();

const Navigation: FC = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: 'black'
                    }
                }}
            >   
                <Stack.Screen name='Auth' component={Auth} />
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Ticket' component={Ticket} options={{animation: 'slide_from_right'}}/>
                <Stack.Screen name='DataTicket' component={DataTicket}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;