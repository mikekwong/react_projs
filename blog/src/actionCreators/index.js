import { FETCH_POSTS, FETCH_USER } from '../actionTypes'

import jsonPlaceholder from '../apis/jsonPlaceholder'

// thunk creator with action creator
const fetchPosts = () => async dispatch => {
  try {
    const response = await jsonPlaceholder.get('/posts')
    dispatch({ type: FETCH_POSTS, payload: response.data })
    // const { data } = await jsonPlaceholder.get('/posts')
    // dispatch({ type: 'FETCH_POSTS', payload: data })
  } catch (error) {
    console.error(error)
  }
}

// fetching the user id (hence id)
const fetchUser = id => async dispatch => {
  try {
    const { data } = await jsonPlaceholder.get(`/users/${id}`)
    dispatch({ type: FETCH_USER, payload: data })
  } catch (error) {
    console.error(error)
  }
}

export { fetchPosts, fetchUser }
