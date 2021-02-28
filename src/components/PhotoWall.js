import React, { Component } from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class PhotoWall extends Component {
  render() {
    return (
      <div>
        <Link to="/AddPhoto" className="addIcon"></Link>
        <div className="photoGrid">
          {this.props.posts
            .sort((x, y) => y.id - x.id)
            .map((post) => {
              return (
                <Photo
                  {...this.props}
                  key={post.id}
                  post={post}
                  history={this.props.history}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default PhotoWall;
