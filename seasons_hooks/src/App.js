import React, { useState, useEffect } from 'react'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

const App = () => {
  // useState has default value for specified state
  const [lat, setLat] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  // empty array for only CDM and no CDU
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    )
  }, [])

  let content
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />
  } else {
    content = <Spinner message={'Please accept location request'} />
  }
  return <div className='border red'>{content}</div>
}

export default App
