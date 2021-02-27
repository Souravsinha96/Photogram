import React, { Component } from "react";

class AddPhoto extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const imageLink = e.target.link.value;
    const description = e.target.description.value;
    const post = {
      id: Number(new Date()),
      description,
      imageLink,
    };
    if (description && imageLink) {
      this.props.addPost(post);
      this.props.onHistory.push("/");
    }
  };
  render() {
    console.log(this.props);
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input name="link" type="text" placeholder="Link" required />
          <input
            name="description"
            type="text"
            placeholder="Description"
            required
          />
          <button>Add Post</button>
        </form>
      </div>
    );
  }
}

export default AddPhoto;
