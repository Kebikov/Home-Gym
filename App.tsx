import { StatusBar } from 'expo-status-bar';
import { FC, useState, useEffect, useCallback } from 'react';
import { useFonts } from 'expo-font';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { colorRootApp } from '@/data/colors';
import * as SplashScreen from 'expo-splash-screen';
//* component
import Navigation from '@/navigation/Navigation';

SplashScreen.preventAutoHideAsync();

const App: FC = () => {
	const [fontsLoaded] = useFonts({
		'Sport': require('@/source/fonts/BebasNeue.ttf')
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
				<Navigation />
				<StatusBar style='light' backgroundColor={colorRootApp.background} />
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export default App;
