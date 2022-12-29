import { Component } from 'react';
import PostForm from './PostForm'
import PostsList from './PostsList'

class App extends Component {
  constructor () {
    super()

    this.state = {
      posts: [
        {
          user: 'Jimmy',
          text: 'wowzers!',
        },
      ],
    }

    this.addPost = this.addPost.bind(this)
  }


  addPost (post) {
    this.setState({posts: this.state.posts.concat([post])})
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="page-header">
            <h1>React Reddit</h1>
          </div>

          <div className="posts">
          </div>

          <PostsList posts={this.state.posts} />

          <PostForm addPost={this.addPost} />

        </div>
      </div>
    );
  }
}

export default App;