//===========
//ACTION
//=========

export const selectSongs = (song) => {
  return {
      type: 'SONG_SELECETD',
      payload: song
  };
};

