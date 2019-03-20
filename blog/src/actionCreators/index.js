import _ from 'lodash'
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
// const fetchUser = id => async dispatch => {
//   // try {
//   //   const { data } = await jsonPlaceholder.get(`/users/${id}`)
//   //   dispatch({ type: FETCH_USER, payload: data })
//   // } catch (error) {
//   //   console.error(error)
//   // }
// }

// refactor to use lodash's memoize library
const fetchUser = id => dispatch => {
  _fetchUser(id, dispatch)
}
// _ indicates it's a private function
// we memoize the inner function as everytime it gets called it gets recreated each time its called. so it's easier to memoize that inner function and invoke that reference above
const _fetchUser = _.memoize(async (id, dispatch) => {
  try {
    const { data } = await jsonPlaceholder.get(`/users/${id}`)
    dispatch({ type: FETCH_USER, payload: data })
  } catch (error) {
    console.error(error)
  }
})

// fetching the user id (hence id)
// memoized version of this function and assign it to fetchUser
// const fetchUser = function (id) {
//   return _.memoize(async function (dispatch) {
//     try {
//       const { data } = await jsonPlaceholder.get(`/users/${id}`)
//       dispatch({ type: FETCH_USER, payload: data })
//     } catch (error) {
//       console.error(error)
//     }
//   })
// }

export { fetchPosts, fetchUser }
