import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = { term: '' }

  onFormSubmit = e => {
    e.preventDefault()
    // console.log(this.state.term)

    this.props.onSubmit(this.state.term)
  }

  render () {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form' action=''>
          <div className='field'>
            <label htmlFor=''>imageSearch</label>
            <input
              type='text'
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}
