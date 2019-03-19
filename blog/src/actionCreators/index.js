import { FETCH_POSTS } from '../actionTypes'
import jsonPlaceholder from '../apis/jsonPlaceholder'

// thunk with action creator
export const fetchPosts = () => async dispatch => {
  try {
    const response = await jsonPlaceholder.get('/posts')
    dispatch({ type: FETCH_POSTS, payload: response.data })
    // const { data } = await jsonPlaceholder.get('/posts')
    // dispatch({ type: 'FETCH_POSTS', payload: data })
  } catch (error) {
    console.error(error)
  }
}
