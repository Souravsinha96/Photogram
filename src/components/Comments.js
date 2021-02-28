import React, { Component } from "react";
import { Link } from "react-router-dom";

class Comments extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    this.props.addComment(comment, this.props.id);
    e.target.comment.value = "";
  };
  render() {
    return (
      <div className="comment">
        {this.props.comments.map((comment, index) => {
          return <p key={index}>{comment}</p>;
        })}
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input name="comment" type="text" placeholder="Add comment" />
          <input type="submit" hidden />
        </form>
        <div className="go">
          <Link to="/">
            <i className="fas fa-long-arrow-alt-left"></i>
            Go back
          </Link>
        </div>
      </div>
    );
  }
}

export default Comments;
