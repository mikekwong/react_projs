import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <h4>Warning</h4>
        Are you sure you want to do this
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author='Sam'
          timeAgo='Today at 6pm'
          comment='nice post'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author='Alex'
          timeAgo='Yesterday at 5:30pm'
          comment='post sucks'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author='Bill'
          timeAgo='Yesterday at 12pm'
          comment='post is great'
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
