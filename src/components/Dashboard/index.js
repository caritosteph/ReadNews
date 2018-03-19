import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';
import styles from './dashboard.styles';
import Typography from 'material-ui/Typography';
import { getCategories } from '../../util/api';
import Posts from './Posts';

class Dashboard extends Component {
  state = {
    activeTab: 0,
    categories: []
  };

  handleTabChange = (event, activeTab) => {
    this.setState({ activeTab });
  }

  componentDidMount = () => {
    getCategories()
      .then( categories => this.setState({ categories }));
  }

  render(){

    const { activeTab, categories } = this.state;
    const { classes } = this.props;

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
                                  to={`${category.path}`}/>
                 })}
            </Tabs>
          </Grid>
          <Grid item xs={10} className={classes.postsContainer}>
              <Posts />
          </Grid>
      </Grid>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
