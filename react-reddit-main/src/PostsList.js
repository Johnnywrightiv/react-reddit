import React from 'react'
import Post from './Post';

const PostsList = (props) => {

  const originalPostItems = props.posts
    .concat()
    .sort((a,b) => {
      return b.upVotes - a.upVotes;
    })
    .map((post, index) => {
      return (
        <Post key={index} index={index} post={post} upvotePost={props.upvotePost} /> 
      )
      })

  return (
      <ul className="col-md-4 list-group">
        {originalPostItems}
      </ul>
  )
}

export default PostsList