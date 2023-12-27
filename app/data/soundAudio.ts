import { AVPlaybackSource } from "expo-av";

export interface ISoundAudio {
    play: AVPlaybackSource;
    end: AVPlaybackSource;
}

export const soundAudio: ISoundAudio = {
    play: require('@/source/audio/start.mp3'),
    end: require('@/source/audio/end.mp3')
}

