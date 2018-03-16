import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Categories from './Categories';

class Dashboard extends Component {
  render(){
    return (
      <Grid container spacing={0}>
          <Categories/>
      </Grid>
    );
  }
}

Dashboard.propTypes = {

};

export default Dashboard;
