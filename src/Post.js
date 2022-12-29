import React from 'react';

const Post = ({post}) => {
  return (
    <li>
      <span>
        {post.user} - {post.text}
      </span>
    </li>
  )
}

export default Post