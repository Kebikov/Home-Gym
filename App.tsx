import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FC, useState, useEffect, useCallback } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo';
//* component
import Navigation from '@/navigation/Navigation';

SplashScreen.preventAutoHideAsync();

const App: FC = () => {
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
				await Font.loadAsync(Entypo.font);
				await new Promise(resolve => setTimeout(resolve, 100));
			} catch (e) {
				console.warn(e);
			} finally {
				setAppIsReady(true);
			}
		}

		prepare();
	}, []);

    const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}
    

	return (
		<SafeAreaProvider >
			<SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView} >
				<Navigation />
				<StatusBar style='light' backgroundColor='black' />
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export default App;
