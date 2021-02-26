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
          {this.props.posts.map((post, index) => {
            return (
              <Photo
                onRemovePhoto={this.props.onRemovePhoto}
                key={index}
                post={post}
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
  onRemovePhoto: PropTypes.func.isRequired,
};
export default PhotoWall;
