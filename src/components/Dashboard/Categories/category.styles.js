const styles = theme => ({
  tabsCategories: {
    flexDirection: 'column'
  },
  categoryTitle: {
    height: 60,
    padding: 20
  },
  activeTab: {
    borderLeft: `5px solid ${theme.palette.primary.main}`
  }
});

export default styles;
