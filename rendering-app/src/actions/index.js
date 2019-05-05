//===========
//ACTION
//=========

export const selectSong = (song) => {
  return {
      type: 'SONG_SELECETD',
      payload: song
  };
};

