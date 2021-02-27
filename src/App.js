import React, { Component } from "react";
import Title from "./components/Title";
import AddPhoto from "./components/AddPhoto";
import PhotoWall from "./components/PhotoWall";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { removePost, addPost } from "./Redux/action";
class App extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Photogram</Link>
        </h1>

        <Route
          path="/"
          exact
          render={() => (
            <div>
              <PhotoWall {...this.props} />
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
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};

export default connect(mapStateToProps, {
  removePost,
  addPost,
})(App);
