import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID a09490427aafbadd33a0526ee2fa46e2c462f4fa0f559abc71a20d60c50a7093'
  }
})
