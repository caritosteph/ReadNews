const styles = theme => ({
  grid: {
    textDecoration: 'none'
  },
  card: {
    border: `1px solid ${theme.palette.common.border}`
  },
  cardTitle: {
    fontWeight: 700,
    fontSize: 21,
    letterSpacing: -.29,
    height: 55
  },
  cardBody: {
    marginBottom: 12,
    marginTop: 12,
    height: 60,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: "-webkit-box",
    "-webkitLineClamp": 3,
    "-webkitBoxOrient": 'vertical'
  },
  authorAvatar: {
    backgroundColor: theme.palette.secondary.main
  },
  cardActions: {
    justifyContent: "center"
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: "space-evenly"

  }
});

export default styles;
