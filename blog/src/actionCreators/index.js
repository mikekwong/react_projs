import { FETCH_POSTS } from '../actionTypes'
import jsonPlaceholder from '../apis/jsonPlaceholder'
import { nextTick } from 'q'

export const fetchPosts = () => async dispatch => {
  try {
    const response = await jsonPlaceholder.get('/posts')
    dispatch({ type: 'FETCH_POSTS', payload: response })
  } catch (error) {
    console.error(error)
  }
}
