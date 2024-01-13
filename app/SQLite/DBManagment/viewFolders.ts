import * as FileSystem from 'expo-file-system';

/**
 * @function
 * Вывод в консоль файлов внутри папки.
 * @param folder Папка с которой выводим данные, без значения будет показано содержимое корневой папки.
 * @example await viewFolders(folder)
 */
const viewFolders = async (folder: string = '') => {
    try {
        const dbDir = FileSystem.documentDirectory + folder + '/';
        const result = await FileSystem.readDirectoryAsync(dbDir);
        console.info(`Данные внутри директории ${folder}: `, result);
    }catch (error) {
        console.error('Error in Function viewFolders >>> ', error);
    }
}

export default viewFolders;