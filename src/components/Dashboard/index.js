import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { sortPost } from '../../actions/posts';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';
import styles from './dashboard.styles';
import Typography from 'material-ui/Typography';
import Posts from './Posts';
import SortPost from '../common/SortPost';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import NewPost from './NewPost';
import Categories from './Categories';
import Header from '../common/Header';
import { fetchAllCategories } from '../../actions/categories';

class Dashboard extends Component {
  state = {
    activeTab: 0,
    newPost: false
  };

  handleTabChange = (event, activeTab) => {
    this.setState({ activeTab });
  }

  componentDidMount = () => {
    const { fetchAllCategories } = this.props;
    fetchAllCategories();
  }

  handleSortPost = (sortby) => {
    const { sortPost } = this.props;
    sortPost(sortby);
  }

  handleNewPost = () => {
    this.setState({ newPost: true });
  }

  handleCloseNewPost = () => {
    const { history } = this.props;
    this.setState({ newPost: false, activeTab: 0 });
    history.push("/");
  }

  render(){

    const { activeTab, newPost } = this.state;
    const { classes, match, categories } = this.props;
    const category = match.params.category

    return (
      <Fragment>
          <Header />
          <Grid container spacing={0} className="full-height">
            <Grid item xs={2} classes={{ typeItem: classes.gridCategories }}>
              <Grid item classes={{ typeItem: classes.categoryTitle }}>
                <Typography variant="body1" color="secondary">
                    Categories
                </Typography>
              </Grid>
              <Categories />
            </Grid>
            <Grid item xs={10} className={classes.postsContainer}>
                <Grid container spacing={0} justify="flex-end">
                  <SortPost handleSortPost={this.handleSortPost} />
                </Grid>
                <Divider classes={{ root: classes.divider}} />
                <Posts  category={category} />
                <Grid container spacing={0} justify="center">
                  <Button 
                    variant="fab"
                    color="primary"
                    onClick={this.handleNewPost}>
                    <AddIcon />
                  </Button>
                </Grid>
            </Grid>
            <NewPost 
              open={newPost}
              handleCloseNewPost={this.handleCloseNewPost}/>
        </Grid> 
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories
})

const mapDispatchToProps = ({
  sortPost,
  fetchAllCategories
});

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(Dashboard);
