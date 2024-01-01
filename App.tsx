import { StatusBar } from 'expo-status-bar';
import { FC, useCallback, useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLOR_ROOT_APP } from '@/data/colors';
import * as SplashScreen from 'expo-splash-screen';
import { deleteData, createData} from '@/helpers/firstLoadData';
//* SQL
import DBManagment from '@/SQLite/DBManagment';
import COMMAND_SQL from '@/SQLite/CommandSQL/commandSQL';
import Configuration from '@/SQLite/DBManagment/сonfiguration';
//* component
import Navigation from '@/navigation/Navigation';
import { Provider } from 'react-redux';
import store from '@/redux/store/store';

SplashScreen.preventAutoHideAsync();



const App: FC = () => {
    console.log('APP');

	const [fontsLoaded] = useFonts({
		'Sport': require('@/source/fonts/BebasNeue.ttf')
	});

    const [load, setLoad] = useState<boolean>(false);

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

    useEffect(() => {
        async function first() {
            //const result: boolean = await deleteData();
            const result: boolean = await createData(); 
            setLoad(result);
        } 

        first();
    },[]);

    if (!fontsLoaded || !load) {
		return null;
	}

	return (
        <Provider store={store}>
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
                    <Navigation />
                    <StatusBar style='light' backgroundColor={COLOR_ROOT_APP.BACKGROUND} />
                </SafeAreaView>
            </SafeAreaProvider>
        </Provider>
	);
};

export default App;
