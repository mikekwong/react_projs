import axios from 'axios'

const KEY = 'AIzaSyCoC5Sbnbg8uLazk9ZAQ5nUVH-3DudMe_E'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
