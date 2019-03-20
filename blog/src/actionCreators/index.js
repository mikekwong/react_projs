import _ from 'lodash'
import { FETCH_POSTS, FETCH_USER } from '../actionTypes'

import jsonPlaceholder from '../apis/jsonPlaceholder'

// redux thunk has a second argument: getState function is available in redux store to give us access to all data inside redux
const fetchPostsAndUsers = () => async (dispatch, getState) => {
  try {
    // dispatch the results of calling the action creator
    // this await will make sure the fetchPosts API promise resolves first assigns it to response
    await dispatch(fetchPosts())
    // get array of unique user id by passing in second argument
    const userIds = _.uniq(_.map(getState().posts, 'userId'))
    // no await needed as we don't care for each user to be fetched
    userIds.forEach(id => dispatch(fetchUser(id)))
  } catch (error) {
    console.error(error)
  }
}

// thunk creator with action creator
// redux will automatically invoke inner function with dispatch arg, then inner function will make request to API, then dispatch it's own function internally with the passed in payload from the API JSON results
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

// // refactor to use lodash's memoize library to make less network requests if it was already requested
// const fetchUser = id => dispatch => {
//   _fetchUser(id, dispatch)
// }
// // _ indicates it's a private function
// // we memoize the inner function as everytime it gets called it gets recreated each time its called. so it's easier to memoize that inner function and invoke that reference above
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   try {
//     const { data } = await jsonPlaceholder.get(`/users/${id}`)
//     dispatch({ type: FETCH_USER, payload: data })
//   } catch (error) {
//     console.error(error)
//   }
// })

export { fetchPosts, fetchUser, fetchPostsAndUsers }
