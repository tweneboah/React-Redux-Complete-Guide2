import {combineReducers } from 'redux';


const songsReducer = () => {
    return [
        {title: 'Jesus', duration: '2:9s'},
        {title: 'God', duration: '6: 2s'},
        {title: 'Lord', duration: '9: 2s'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECETD'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})