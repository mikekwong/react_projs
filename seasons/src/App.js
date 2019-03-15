import React, { Component } from 'react'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

export default class App extends Component {
  state = { lat: null, errorMessage: '' }

  componentDidMount () {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err =>
        this.setState({
          errorMessage: err.message
        })
    )
  }

  // componentDidUpdate (prevProps, prevState) {
  //   console.log('My component was just updated - rerendered')
  // }

  renderContent () {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    return <Spinner message={'Please accept location request'} />
  }

  render () {
    return <div style={{ border: '5px solid red' }}>{this.renderContent()}</div>
  }
  // render () {
  //   return (
  //     <div style={{ border: '5px solid red' }}>
  //       {this.state.lat ? (
  //         <SeasonDisplay lat={this.state.lat} />
  //       ) : (
  //         <div>Error: {this.state.errorMessage}</div>
  //       )}
  //       {!this.state.lat && !this.state.errorMessage && (
  //         <Spinner message='please accept location request' />
  //       )}
  //     </div>
  //   )
  // }
}
