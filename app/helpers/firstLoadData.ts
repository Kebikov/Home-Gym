import { DATA_START_EXERCISE } from "@/data/dataStartExercise";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TDay } from "@/data/dataDays";

/**
 * @function
 * Загрузка начальных данных в AsyncStorage.
 */
const firstLoadData = async () => {
    const dayOne = await AsyncStorage.getItem('DAY_1');

    if(dayOne) return;

    const keys = Object.keys(DATA_START_EXERCISE);


    keys.forEach( async (key) => {
        const dataJSON = JSON.stringify( DATA_START_EXERCISE[key as TDay] );
        await AsyncStorage.setItem(key, dataJSON);
    });

}

export default firstLoadData;