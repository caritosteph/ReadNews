const styles = theme => ({
  gridCategories: {
    borderRight: `1px solid ${theme.palette.common.border}`
  },
  tabsCategories: {
    flexDirection: 'column'
  },
  categoryTitle: {
    height: 60,
    padding: 20
  },
  activeTab: {
    borderLeft: `5px solid ${theme.palette.primary.main}`
  },
  postsContainer: {
    padding: 10
  },
  divider: {
    marginTop: 5,
    marginBottom: 15
  }
});

export default styles;
