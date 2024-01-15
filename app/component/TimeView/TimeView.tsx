import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { FC } from 'react';
import { Svg, Circle, G } from 'react-native-svg';
import { useState, useEffect } from 'react';
import transferSecInTime from '@/helpers/transferSecInTime';
import { COLOR_ROOT_APP } from '@/data/colors';
import { Audio, AVPlaybackSource } from 'expo-av';
import {soundAudio} from '@/data/soundAudio';
import { Vibration } from 'react-native';
//* redux 
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks';
import { setSliceIsStartTimer } from '@/redux/slice/sets.slice';


interface ITimerView {
	/**
	 * Заданное время в секундах.
	 */
	givenTime: number;
}

/**
 * @component
 * Блок с таймером, круг с обратным отсчетом.
 * @param {number} givenTime - Заданное время в секундах.
 * @example <TimeView givenTime={#}/>
 * @returns {JSX.Element}
 */
const TimeView: FC<ITimerView> = ({ givenTime }) => {

    const dispatch = useAppDispatch();
	/**
	 * @param balanceTime - Остаток времени работы таймера в секундах.
	 */
	const [balanceTime, setBalanceTime] = useState<number>(givenTime);
	/**
	 * @param positionProgressInCircle - Позиция прогресса в круге.
	 */
	const [positionProgressInCircle, setPositionProgressInCircle] = useState<number>(0);
	/**
	 * Флаг включения/выключения таймера.
	 */
    const isStartTimer = useAppSelector(state => state.setsSlice.isStartTimer);
    /**
     * @param saundPlay Воспроизводимый обьект звука.
     */
    const [soundPlay, setSoundPlay] = useState<Audio.Sound>();
	/**
	 * Размер круга таймера
	 */
	const size: number = 128;
	/**
	 * Размер толшины обводки круга.
	 */
	const strokeWidth: number = 12;
    const strokeWidthColor = 10;
	/**
	 * Координаты цента круга.
	 */
	const center: number = size / 2;
	/**
	 * Радиус круга.
	 */
	const radius: number = size / 2 - strokeWidth / 2;
	/**
	 * Длинна окружности круга.
	 */
	const circumference = 2 * Math.PI * radius;
	/**
	 * Шаг, единица длинны с которой будет идти прогресс.
	 */
	const step: number = 100 / givenTime;

    const playSound = async (music: AVPlaybackSource) => {
        try{
            const { sound } = await Audio.Sound.createAsync(music);
            setSoundPlay(sound);
            Vibration.vibrate([7, 8, 10]);
            sound.playAsync()
                .then((result) => {
                    // Удаление сушности sound после проигрывания звука.
                    // 'durationMillis' - продолжительность про
                    if('durationMillis' in result) {
                        setTimeout(() => {
                            sound.unloadAsync();
                        }, result.durationMillis);
                    }
                    
                })
                .catch(error => console.error('Ошибка очистки звука:', error))
            
            
        } catch(error) {
            console.error('Error in funtion "playSound">>>', error);
        }
    };

    const stopSound = async () => {
        try {
            if(soundPlay) {
                console.log(soundPlay);
                await soundPlay.unloadAsync();
            }
        } catch(error) {
            console.error('Error in funtion "stopSound" >>> ', error);
        }
    }



    useEffect(() => {
        /**
         * Обьект таймера.
         */
        let timer: NodeJS.Timeout | undefined = undefined;

        if (isStartTimer) {
            timer = setTimeout(function upTime() {
                setBalanceTime(balanceTime => {
                    if (balanceTime === 0) {
                        clearTimeout(timer);
                        return givenTime;
                    } else {
                        setPositionProgressInCircle(positionProgressInCircle => positionProgressInCircle + 1);
                        timer = setTimeout(upTime, 1000);
                        return balanceTime - 1;
                    }
                });
                
            }, 1000);
        } else {
            clearTimeout(timer);
            setBalanceTime(givenTime);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [isStartTimer]);

    useEffect(() => {
        if(balanceTime === 0) {
            playSound(soundAudio.end);
            dispatch(setSliceIsStartTimer(false));
            setPositionProgressInCircle(0);
        }
    },[balanceTime]);

	return (
		<View style={[styles.container, { height: size }]}>
			<Pressable 
                style={styles.containerBox} 
                onPressIn={() => {
                        playSound(soundAudio.play);
                        dispatch(setSliceIsStartTimer(true));
                    }
                }
            >
				<Text style={styles.text}>START</Text>
			</Pressable>

			<Svg width={size} height={size}>
				<G rotation={'-90'} origin={center}>
					<Circle stroke={COLOR_ROOT_APP.LIGHT_GREY} cx={center} cy={center} r={radius} fill={'transparent'} strokeWidth={strokeWidthColor} />
					<Circle
						stroke={COLOR_ROOT_APP.BACKGROUND}
						cx={center}
						cy={center}
						r={radius}
						fill={'transparent'}
						strokeWidth={strokeWidth}
						strokeDasharray={circumference}
						strokeDashoffset={circumference - (circumference * positionProgressInCircle * step) / 100}
					/>
				</G>
				<Text style={[styles.text, styles.absoluteCenter]}>{transferSecInTime(balanceTime)}</Text>
			</Svg>

            <Pressable 
                style={styles.containerBox}
                onPressIn={() => {
                    stopSound();
                    playSound(soundAudio.play);
                    setPositionProgressInCircle(0);
                    dispatch(setSliceIsStartTimer(false));
                }}
            >
                <Text style={styles.text}>STOP</Text>
            </Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
		paddingHorizontal: 10,
		marginBottom: 10
	},
	containerBox: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

		borderRadius: 10,

		backgroundColor: COLOR_ROOT_APP.GREY
	},
	text: {
		fontFamily: 'Sport',
		color: 'white',
		fontSize: 30,
		paddingVertical: 3,
		textAlign: 'center'
	},
	absoluteCenter: {
		position: 'absolute',
		top: 43,
		left: 35
	}
});

export default TimeView;



