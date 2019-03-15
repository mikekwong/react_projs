import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function getButtonText () {
  return 'click on me!!!!'
}

const App = () => {
  const buttonText = { text: 'Click me' }
  const labelText = 'Enter Name'

  return (
    <div>
      <label className='label' htmlFor='name'>
        {labelText}
      </label>
      <input id='name' type='text' />
      <button
        style={{
          backgroundColor: 'blue',
          color: 'white'
        }}
      >
        {buttonText.text}
      </button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
