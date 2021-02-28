import React, { Component } from "react";
import AddPhoto from "./components/AddPhoto";
import PhotoWall from "./components/PhotoWall";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  removePost,
  addPost,
  addComment,
  startAddingPost,
  startLoadingPost,
  startRemovingPost,
  startAddingComment,
  startLoadingComments,
} from "./Redux/action";
import Single from "./components/Single";
class App extends Component {
  state = { loading: true };

  componentDidMount() {
    this.props.startLoadingPost().then(() => {
      this.setState({ loading: false });
    });
    this.props.startLoadingComments();
  }
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Photogram</Link>
        </h1>

        <Route
          path="/"
          exact
          render={({ history }) => (
            <div>
              <PhotoWall {...this.props} history={history} />
            </div>
          )}
        />

        <Route
          path="/AddPhoto"
          exact
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />
        <Route
          path="/single/:id"
          excat
          render={(params) => (
            <Single
              // put this.props first and then the params , bcz both has match object , we want match for params
              {...this.props}
              {...params}
              loading={this.state.loading}
            />
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments,
  };
};

export default connect(mapStateToProps, {
  startAddingPost,
  removePost,
  addPost,
  addComment,
  startLoadingPost,
  startRemovingPost,
  startAddingComment,
  startLoadingComments,
})(App);
