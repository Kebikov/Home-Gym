import { StatusBar } from 'expo-status-bar';
import { FC, useCallback, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLOR_ROOT_APP } from '@/data/colors';
import * as SplashScreen from 'expo-splash-screen';
import firstLoadData from '@/helpers/firstLoadData';
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

	const [fontsLoaded] = useFonts({
		'Sport': require('@/source/fonts/BebasNeue.ttf')
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
            firstLoadData();
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

    useEffect(() => {
        const deleteData = async () => {
            //* Просмотр созданных файлов
            await DBManagment.viewFolders('SQLite');
            await DBManagment.select(Configuration.TABLE_EXERCISE);
            await DBManagment.select(Configuration.TABLE__DAYS);
        };

        const createData = async () => {
            // Проверка, есть ли база данных.
            const isExisted = await DBManagment.checkExistenceDataBase();
            // Если есть, прекрашаем работу функции.
            if(isExisted) return;
            // Создание базы данных.
            await DBManagment.createDataBase();

            // Создание таблицы с днями.
            await DBManagment.inset(COMMAND_SQL.createTableDays);

            // Создание таблицы с упражнениями.
            await DBManagment.inset(COMMAND_SQL.createTableExercise);

            // Заполнение начальными данными таблицы с днями.
            await DBManagment.addDataStartInTableDays();

            // Заполнение начальными данными таблицы с упражнениями.
            await DBManagment.addDataStartInTableExercise();

            //* Просмотр созданных файлов
            await DBManagment.viewFolders('SQLite');
            
            //* Просмотр созданных таблиц в базе данных
            await DBManagment.showAllTable();  
        };

        createData();
        //deleteData();
    },[]);

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
