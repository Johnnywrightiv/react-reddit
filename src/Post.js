import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faCoffee } from '@fortawesome/free-solid-svg-icons';

const Post = ({post, upvotePost, index}) => {
  const handleUpvoteClick = () => {
    upvotePost(index);
  }

  return (
    <li>
      <span>
        {/* classNames can be styled with custom CSS stylings in index.CSS */}
        <span onClick={handleUpvoteClick} role={'button'} className="testing">
          <FontAwesomeIcon icon={faArrowUp} />&nbsp;
          {post.upVotes}
        </span>
        &nbsp; - {post.user} - {post.text}
        <hr />
      </span>
    </li>
  )
}

export default Post