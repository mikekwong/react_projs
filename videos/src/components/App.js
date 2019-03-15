import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

export default class App extends Component {
  state = { videos: [], selectedVideo: null }

  componentDidMount () {
    this.onTermSubmit('buildings')
  }

  onTermSubmit = async term => {
    try {
      // search endpoint
      const res = await youtube.get('/search', {
        // q property from api documentation for query
        params: {
          q: term
        }
      })
      this.setState({
        videos: res.data.items,
        selectedVideo: res.data.items[0]
      })
    } catch (error) {
      console.error(error)
    }
  }

  onVideoSelect = video => {
    this.setState({
      selectedVideo: video
    })
  }

  render () {
    return (
      <div>
        <div className='ui container'>
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div className='ui grid'>
            <div className='ui row'>
              <div className='eleven wide column'>
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className='five wide column'>
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
