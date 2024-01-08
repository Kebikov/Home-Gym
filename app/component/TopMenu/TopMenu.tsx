import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import React, { FC } from 'react';
import { icon } from '@/source/icon/icon';
import { COLOR_ROOT_APP } from '@/data/colors';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { TypeRootPage } from '@/navigation/navigation.types';

/**
 * @component
 * @example 
 * @returns {JSX.Element}
 */
//= TopMenu
const TopMenu: FC = () => {

    const {goBack} = useNavigation<NavigationProp<TypeRootPage>>();

    return (
        <View style={styles.container} >
            <Pressable
                // Нажатие назад.
                onPress={() => goBack()}
            >
                <Image source={icon.arrow_back} style={styles.img} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLOR_ROOT_APP.BACKGROUND
    },
    img: {
        width: 27,
        height: 27,
        marginLeft: 10
    },
    text: {
        color: 'white',
        fontFamily: 'Sport',
        fontSize: 18,
        marginRight: 10
    }
});

export default TopMenu;
