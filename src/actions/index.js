// action creator 

export const selectSong = (song) => {
    //return an action
    return {
        //type and payload
        type: 'SONG_SELECTED',
        payload: song
    };
};

//named export 