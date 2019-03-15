import React, { Component } from 'react'

export default class ImageCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      spans: 0
    }
    // use ref system to interact with a dom element
    this.imageRef = React.createRef()
  }

  async componentDidMount () {
    // access image directly and listening for emit of load event
    // call method on each load
    this.imageRef.current.addEventListener('load', this.setSpans)
  }
  // bind method
  setSpans = () => {
    const height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height / 10)
    this.setState({ spans })
  }

  render () {
    const { description, urls } = this.props.image

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    )
  }
}
