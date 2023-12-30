import { StatusBar } from 'expo-status-bar';
import { FC, useCallback } from 'react';
import { useFonts } from 'expo-font';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLOR_ROOT_APP } from '@/data/colors';
import * as SplashScreen from 'expo-splash-screen';
import firstLoadData from '@/helpers/firstLoadData';
//* component
import Navigation from '@/navigation/Navigation';
import { Provider } from 'react-redux';
import store from '@/redux/store/store';

SplashScreen.preventAutoHideAsync();

const App: FC = () => {
	const [fontsLoaded] = useFonts({
		'Sport': require('@/source/fonts/BebasNeue.ttf')
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
            firstLoadData();
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
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
