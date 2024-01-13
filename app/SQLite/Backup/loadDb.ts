import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import Configuration from '../DBManagment/сonfiguration';
import { IDataDays } from '@/data/dataDays';
import addDataStartInTableDays from '../DBManagment/addDataStartInTableDays';
import addDataStartInTableExercise from '../DBManagment/addDataStartInTableExercise';
import { ToastAndroid } from 'react-native';
import inset from '../DBManagment/inset';
import { IExercise } from '@/data/dataStartExercise';

/**
 * Загрузка сохраненных данных таблиц.
 */
const loadDb = async () => {
    try {

        let result: DocumentPicker.DocumentPickerResult = await DocumentPicker.getDocumentAsync();

        if(result.assets) {
            /**
             * Имя таблицы получаемое из имени файла.
             */
            const nameDb = result.assets[0].name;
            //* Если имя таблицы "days".
            if(nameDb === Configuration.TABLE__DAYS) {
                const uri: string = result.assets[0].uri;
                const fileContent: string = await FileSystem.readAsStringAsync(uri);
                const fileContentParseJson: IDataDays[] = JSON.parse(fileContent);

                await inset(`DELETE FROM ${Configuration.TABLE__DAYS}`);

                await addDataStartInTableDays(fileContentParseJson);

                ToastAndroid.show(`Данные таблицы ${Configuration.TABLE__DAYS} востановлены.`, ToastAndroid.LONG);
            }
            //* Если имя таблицы "exercise".
            if(nameDb === Configuration.TABLE_EXERCISE) {
                const uri: string = result.assets[0].uri;
                const fileContent: string = await FileSystem.readAsStringAsync(uri);
                const fileContentParseJson: IExercise[] = JSON.parse(fileContent);

                await inset(`DELETE FROM ${Configuration.TABLE_EXERCISE}`);

                await addDataStartInTableExercise(fileContentParseJson);

                ToastAndroid.show(`Данные таблицы ${Configuration.TABLE_EXERCISE} востановлены.`, ToastAndroid.LONG);
            }
            
        }

    }catch (error) {
        console.error('Error in Function loadDb >>> ', error);
    }
}

export default loadDb;