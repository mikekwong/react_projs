import React, { Component } from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

export default class App extends Component {
  state = { images: [] }

  onSearchSubmit = async term => {
    try {
      const res = await unsplash.get('/search/photos', {
        params: { query: term }
      })
      this.setState({ images: res.data.results })
      // this.setState({ images: res.data.results })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}
