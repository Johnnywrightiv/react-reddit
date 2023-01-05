import React, { Component } from 'react';

class PostForm extends Component {
  constructor () {
    super()
  
    this.state = {
      user: '',
      text: '',
      upVotes: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    const post = {
      user: this.state.user,
      text: this.state.text,
      upVotes: this.state.upVotes
    }

    this.props.addPost(post);
  }

  render() {
    return (
      <form className="post-form">
        <h3>Add a New Post</h3>

        <div className="form-group">
          {/* using ES6 arrow bindings, much cleaner, this is automatically bound*/}
          <input value={this.state.text}
          onChange={(e) => this.setState({text: e.target.value})}
          type="text" id="post-text" className="form-control" placeholder='Post Text'/>

          <br />

          {/* using ES5 function and binding this, same as above technically */}
          <input value={this.state.user}
          onChange={function (event) {
            this.setState({user: event.target.value})
          }.bind(this)}
          type="text" id="post-user" className="form-control" placeholder="Your Name"/>
        </div>

        <button onClick={this.handleClick} type="button" className="btn btn-primary add-post">Post</button>
      </form>
    );
  }
}

export default PostForm;