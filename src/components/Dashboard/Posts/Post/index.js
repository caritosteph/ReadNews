import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import styles from './post.styles';

const state = {
    value: 0,
  };

const  handleChange = (event, value) => {
    this.setState({ value });
  };

const Post = ({classes, post, value}) => {
  return (
    <Card className={classes.card}>
       <CardContent>
         <Typography gutterBottom className={classes.cardTitle} variant="title" component="h2">
           {post.title}
         </Typography>
         <Typography className={classes.cardBody} color="textSecondary">
           {post.body}
         </Typography>
         <Typography color="textSecondary">
           Category: {post.category}
         </Typography>
         <Grid>
           <Avatar>{post.author.charAt(0).toUpperCase()}</Avatar>
           <Typography color="textSecondary">
             {post.author.charAt(0).toUpperCase()}{post.author.substring(1)}
           </Typography>
           <Typography color="textSecondary">
             {post.timestamp}
           </Typography>
         </Grid>

       </CardContent>
       <CardActions>
         <BottomNavigation
           value={value}
           onChange={this.handleChange}
           showLabels
           className={classes.root}>
           <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
           <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
           <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
         </BottomNavigation>
       </CardActions>
     </Card>
  );
}

Post.propTypes = {

};

export default withStyles(styles)(Post);
