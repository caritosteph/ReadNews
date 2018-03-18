import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { fetchAllPost } from '../../../actions/posts';

class Posts extends Component {

  componentDidMount = () => {
    const { fetchAllPost } = this.props;
    fetchAllPost();
  }

  render(){
    const { posts } = this.props;
    return (
      <span>asd</span>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = ({
    fetchAllPost
});

Post.propTypes = {
  posts: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
