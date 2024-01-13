import * as FileSystem from 'expo-file-system';
import select from '../DBManagment/select';
import Configuration from '../DBManagment/сonfiguration';
import { IDataDays } from '@/data/dataDays';
import { IExercise } from '@/data/dataStartExercise';
import { ToastAndroid } from 'react-native';

/**
 * Создание backup базы данных.
 */
const backupDB = async () => {
	try {

        const dataTableDays = await select(Configuration.TABLE__DAYS) as IDataDays[];
        const dataTableExercise = await select(Configuration.TABLE_EXERCISE) as IExercise[];
        const dataTableDaysJson: string = JSON.stringify(dataTableDays);
        const dataTableExerciseJson: string = JSON.stringify(dataTableExercise);

        const permission = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

        if(permission.granted && dataTableDaysJson && dataTableExerciseJson) {
            // проверка сушествования файла с данными
            const infoExistDays = await FileSystem.StorageAccessFramework.readDirectoryAsync(permission.directoryUri);

            Promise.all(
                infoExistDays.map(async item => {
                    await FileSystem.StorageAccessFramework.deleteAsync(item, {idempotent: true})
                })
            )
            .then(async () => {
                // создание файла beckup
                const resaltDays = await FileSystem.StorageAccessFramework.createFileAsync(permission.directoryUri, Configuration.TABLE__DAYS, 'json/plain');
                // запись данных в файл
                await FileSystem.StorageAccessFramework.writeAsStringAsync(resaltDays, dataTableDaysJson);

                // создание файла beckup
                const resaltExercise = await FileSystem.StorageAccessFramework.createFileAsync(permission.directoryUri, Configuration.TABLE_EXERCISE, 'json/plain');
                // запись данных в файл
                await FileSystem.StorageAccessFramework.writeAsStringAsync(resaltExercise, dataTableExerciseJson);
                ToastAndroid.show('Даные сохранены.', ToastAndroid.SHORT);
            });

        } else {
            ToastAndroid.show('Разрешение на запись не получено.', ToastAndroid.SHORT);
        }


	} catch (error) {
		console.log('Error in Function "backupDB" >>>  ', error);
	}
};

export default backupDB;
