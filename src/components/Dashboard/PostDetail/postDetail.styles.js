const styles = theme => ({
  authorAvatar: {
    backgroundColor: theme.palette.secondary.main,
    height: 60,
    width: 60
  },
  grid: {
    paddingTop: 50,
    alignItem: 'center',
    justifyContent: 'center'
  },
  detailHeader: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItem: 'center',
  },
  detail: {
    paddingLeft: 25
  },
  cardActions: {
    display: 'flex'
  },
  edit: {
    alignItem: 'flex-end'
  }
});

export default styles;
