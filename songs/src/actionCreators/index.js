import { SONG_SELECTED } from '../actionTypes'
// action creator
export const selectSong = song => ({
  type: SONG_SELECTED,
  payload: song
})
