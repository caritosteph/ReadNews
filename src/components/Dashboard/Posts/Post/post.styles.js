const styles = theme => ({
  cardcontent: {
    textDecoration: 'none'
  },
  card: {
    border: `1px solid ${theme.palette.common.border}`
  },
  cardTitle: {
    fontWeight: 700,
    fontSize: 21
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
    display: 'flex'
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: "space-evenly"

  }
});

export default styles;
