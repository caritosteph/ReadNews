import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { fetchAllPost } from '../../../actions/posts';
import Grid from 'material-ui/Grid';
import Post from './Post';

class Posts extends Component {

  componentDidMount = () => {
    const { fetchAllPost } = this.props;
    fetchAllPost("all");
  }


  componentWillReceiveProps = (nextProps) => {
    const { category } = this.props;
    if(nextProps.category !== category) {
      const { fetchAllPost } = this.props;
      fetchAllPost(nextProps.category);
    }
  }


  render(){
    const { posts } = this.props;

    return (
      <Grid container spacing={8}>
        {
          posts.map(post => (
              <Post key={post.id} post={post} />
          ))
        }
      </Grid>
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

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
