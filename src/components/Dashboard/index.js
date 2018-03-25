import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import { sortPost } from '../../actions/posts';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';
import styles from './dashboard.styles';
import Typography from 'material-ui/Typography';
import { getCategories } from '../../util/api';
import Posts from './Posts';
import SortPost from '../common/SortPost';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import NewPost from './Posts/NewPost';

class Dashboard extends Component {
  state = {
    activeTab: 0,
    categories: [],
    newPost: false
  };

  handleTabChange = (event, activeTab) => {
    this.setState({ activeTab });
  }

  componentDidMount = () => {
    getCategories()
      .then( categories => this.setState({ categories }));
  }

  handleSortPost = (sortby) => {
    const { sortPost } = this.props;
    sortPost(sortby);
  }

  handleNewPost = () => {
    this.setState({ newPost: true })
  }

  handleCloseNewPost = () => {
    console.log("handleCloseNewPost");
    this.setState({ newPost: false })
  }

  render(){

    const { activeTab, categories, newPost } = this.state;
    const { classes, match } = this.props;
    const category = match.params.category

    return (
      <Grid container spacing={0} className="full-height">
          <Grid item xs={2} classes={{ typeItem: classes.gridCategories }}>
            <Grid item classes={{ typeItem: classes.categoryTitle }}>
              <Typography variant="body1" color="secondary">
                  Categories
              </Typography>
            </Grid>

            <Tabs value={activeTab}
                  textColor="primary"
                  onChange={this.handleTabChange}
                  indicatorColor="none"
                  classes= {{
                    flexContainer: classes.tabsCategories
                  }}>
                 { categories.map( category => {
                      return <Tab key={category.id}
                                  label={category.name}
                                  className={activeTab  === category.id ? classes.activeTab : ""}
                                  component={Link}
                                  to={`${category.path}`}
                                  value={category.id} />
                 })}
            </Tabs>
          </Grid>
          <Grid item xs={10} className={classes.postsContainer}>
              <Grid container spacing={0} justify="flex-end">
                <SortPost handleSortPost={this.handleSortPost} />
              </Grid>
              <Divider classes={{ root: classes.divider}} />
              <Posts  category={category} />
              <Grid container spacing={0} justify="center">
                <Button variant="fab"
                        color="primary"
                        onClick={this.handleNewPost}>
                  <AddIcon />
                </Button>
              </Grid>
          </Grid>
          <NewPost open={newPost}
                   handleCloseNewPost={this.handleCloseNewPost}/>
      </Grid>
    );
  }
}

const mapDispatchToProps = ({
  sortPost
});

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  connect(null, mapDispatchToProps),
  withStyles(styles)
)(Dashboard);
