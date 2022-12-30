import React from 'react'
import Post from './Post';

const PostsList = (props) => {

  const ogPostItems = props.posts.map((post, index) => {
    return (
      <Post key={index} index={index} post={post} upvotePost={props.upvotePost} /> 
    )
  })

  const postItems = props.posts
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
        <h4>Sorted Array (New)</h4>
        {postItems}
        <hr />
        <h4>Unsorted Array (Old)</h4>
        {ogPostItems}
      </ul>
  )
}

export default PostsList