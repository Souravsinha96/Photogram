import React, { Component } from "react";
import Photo from "./Photo";
import Comments from "./Comments";
import { Link } from "react-router-dom";
class Single extends Component {
  render() {
    const { match, posts } = this.props;
    const id = Number(match.params.id);
    const post = posts.find((post) => post.id === id);
    const comments = this.props.comments[id] || [];
    if (this.props.loading === true) {
      return <div className="loader"> ...loading </div>;
    } else if (post) {
      return (
        <div className="single-photo">
          <Photo post={post} {...this.props} />
          <Comments
            startAddingComment={this.props.startAddingComment}
            comments={comments}
            id={id}
          />
        </div>
      );
    } else {
      return (
        <>
          <h1 style={{ background: "none" }}> ...no post found </h1>
          <div className="go" style={{ textAlign: "center" }}>
            <Link to="/">
              <i className="fas fa-long-arrow-alt-left"></i>
              Go to Home Page
            </Link>
          </div>
        </>
      );
    }
  }
}

export default Single;
