import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetchUser } from '../actionCreators'

class UserHeader extends Component {
  // componentDidMount () {
  //   this.props.fetchUser(this.props.userId)
  // }

  render () {
    // const user = this.props.users.find(user => {
    //   return user.id === this.props.userId
    // })
    // singular now as passing the prop to the component we are about
    // this.props.user
    const { user } = this.props
    // when loaded it'll be an empty array without any users, so just return null
    if (!user) {
      return null
    }

    return <div className='header'>{user.name}</div>
  }
}

// get access to component's prop (userId) in mapstatetoprops via ownProps
// ownProps is a reference to the props which are about to be sent into component
// change users to user below
// the idea below is to extract anything that will do computation on our redux state and our props coming into our component to the mapStateToProps function
const mapStateToProps = (state, ownProps) => ({
  user: state.users.find(user => user.id === ownProps.userId)
})

export default connect(
  mapStateToProps
  // { fetchUser }
)(UserHeader)
