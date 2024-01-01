import * as FileSystem from 'expo-file-system';

/**
 * @function
 * Удаление данных.
 * @param name Имя для удаления.
 * @example await deleteDataBase(name)
 * @returns Вывод в console.log() содержимого папки с базами данных.
 */

export const deleteData = async (name: string) => {

	const dbDir = FileSystem.documentDirectory + 'SQLite/';

	const dirInfo = await FileSystem.getInfoAsync(dbDir + name);

	if (dirInfo.exists) {
		await FileSystem.deleteAsync(dbDir + name, { idempotent: true });
        await FileSystem.deleteAsync(dbDir + name + '-journal', { idempotent: true });
	}
    const result = await FileSystem.readDirectoryAsync(dbDir);
	console.log('Data Base Deleted.', result);
};

export default deleteData;