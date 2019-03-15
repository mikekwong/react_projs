import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = { term: '' }

  handleChange = e => {
    this.setState({
      term: e.target.value
    })
  }

  onFormSubmit = e => {
    e.preventDefault()

    this.props.onFormSubmit(this.state.term)
  }

  render () {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} action='' className='ui form'>
          <div className='field'>
            <label htmlFor=''>Video Search</label>
            <input
              type='text'
              onChange={this.handleChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    )
  }
}
