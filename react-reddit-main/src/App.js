import { Component } from 'react';
import PostForm from './PostForm'
import PostsList from './PostsList'

// Construct sub class (subclass extends super class) and call super to pass/inherit props
class App extends Component {
  constructor () {
    super()

    // Set component's local state
    this.state = {
      posts: [
        {
          user: 'Robert',
          text: 'I hate ice cream',
          upVotes: 3
        },
        {
          user: 'Jimmy',
          text: 'I like ice cream',
          upVotes: 1
        },
      ],
      showPosts: true
    }

    // Bind this to methods
    this.addPost = this.addPost.bind(this)
    this.handleTogglePostViewClick = this.handleTogglePostViewClick.bind(this)
    this.upvotePost = this.upvotePost.bind(this)
  }

  // Prop drilling -> pass upvotePost func down to PostsList.js as a prop so that we can pass it down further to Post.js and bind it to an event handler
  upvotePost (index) {

    const newPosts = [...this.state.posts];
    newPosts[index].upVotes += 1;

    this.setState({posts: newPosts})
  }

  // method of the App component, update 'posts' state model using concat (new copy of array)
  addPost (post) {
    this.setState({posts: this.state.posts.concat([post])})
  }

  // method of the App component, update/toggle  'showPosts' state model 
  handleTogglePostViewClick () {
    this.setState({showPosts: !this.state.showPosts})
  }

  
  // render views of App component. Logic auto-renders based on any updates made to to data model. Always listening for updates, even if not always rendering to page.
  render() {
    const renderToggleText = () => {
      if (this.state.showPosts) {
        return 'Hide Posts'
      } else {
        return 'Show Posts'
      }
    }

    const renderPosts = () => {
      if (this.state.showPosts) {
        return <PostsList posts={this.state.posts} upvotePost={this.upvotePost}/>
      }
    }

    // Render RETURNS JSX/HTML, can use vars defined in the render scope (e.g. renderPosts)
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="page-header">
            <h1>React Reddit</h1>
          </div>

          <div className="posts">
            <button onClick={this.handleTogglePostViewClick} className="btn btn-secondary">{renderToggleText()}</button>
          </div>

          {renderPosts()}

          <PostForm addPost={this.addPost} />

        </div>
      </div>
    );
  }
}

export default App;