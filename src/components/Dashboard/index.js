import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';
import styles from './dashboard.styles';
import Typography from 'material-ui/Typography';
import { getCategories } from '../../util/api';

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
      <Grid container spacing={0}>
          <Grid item xs={2}
                classes={{
                  typeItem: classes.gridCategories
                }}>
            <Grid item classes={{
                    typeItem: classes.categoryTitle
                  }}>
              <Typography variant="subheading" gutterBottom>
                  Categories
              </Typography>
            </Grid>

            <Tabs
                 value={activeTab}
                 textColor="primary"
                 onChange={this.handleTabChange}
                 indicatorColor="none"
                 classes= {{
                   flexContainer: classes.tabsCategories
                 }}>
                 { categories.map( category => {
                      return <Tab key={category.path} label={category.name} />
                 })}
            </Tabs>
          </Grid>
          <Grid>
              Post
          </Grid>
      </Grid>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
