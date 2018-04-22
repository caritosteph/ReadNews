import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import { fetchAllCategories } from '../../../actions/categories';
import styles from './category.styles';

class Categories extends Component {
  state = {
    activeTab: 0
  };

  handleTabChange = (event, activeTab) => {
    this.setState({ activeTab });
  }

  componentDidMount = () => {
    const { fetchAllCategories } = this.props;
    fetchAllCategories();
  }

  componentWillReceiveProps(nextProps) {
    const { categories, category } = this.props;

    if( nextProps.categories !== categories) {
      const positionCategory = nextProps.categories.map(category => category.name).indexOf(category)
      if(category) this.setState({ activeTab: positionCategory + 1 })
    }
  }

  render(){

    const { activeTab } = this.state;
    const { classes, categories } = this.props;

    return (
        <Tabs value={activeTab}
              textColor="primary"
              onChange={this.handleTabChange}
              classes= {{
                flexContainer: classes.tabsCategories
              }}>
              <Tab label="All"
                   className={activeTab  === 0 ? classes.activeTab : ""}
                   component={Link}
                   to="all"
                   value={0} />
             { categories && categories.map( category => (
                 <Tab key={category.id}
                             label={category.name}
                             className={activeTab  === category.id ? classes.activeTab : ""}
                             component={Link}
                             to={`${category.path}`}
                             value={category.id} />
               ))
              }
        </Tabs>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories
})

const mapDispatchToProps = ({
  fetchAllCategories
});

Categories.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(Categories);
