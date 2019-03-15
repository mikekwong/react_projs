import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'

export default class App extends Component {
  state = { videos: [], selectedVideo: null }
  onTermSubmit = async term => {
    try {
      // search endpoint
      const res = await youtube.get('/search', {
        // q property from api documentation for query
        params: {
          q: term
        }
      })
      this.setState({ videos: res.data.items })
    } catch (error) {
      console.error(error)
    }
  }

  onVideoSelect = video => {
    console.log('From the App!', video)
  }

  render () {
    return (
      <div>
        <div className='ui container'>
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>
      </div>
    )
  }
}
