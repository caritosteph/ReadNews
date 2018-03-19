import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import InsertComment from 'material-ui-icons/InsertComment';
import ThumbUp from 'material-ui-icons/ThumbUp';
import Delete from 'material-ui-icons/Delete';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import { formatDate } from '../../../../util/formatDate';

import styles from './post.styles';

const state = {
    value: 0,
  };

const  handleChange = (event, value) => {
    this.setState({ value });
  };

const Post = ({classes, post, value}) => {
  return (
    <Grid item xs={3}>

    <Card className={classes.card} elevation={0}>
       <CardContent>
         <Typography gutterBottom className={classes.cardTitle} variant="title" component="h2">
           {post.title}
         </Typography>
         <Typography color="textSecondary">
           Category: {post.category}
         </Typography>
         <Typography className={classes.cardBody} color="textSecondary">
           {post.body}
         </Typography>
         <Grid container spacing={0}>
           <Grid item xs={3}>
             <Avatar classes= {{ root: classes.authorAvatar}}>{post.author.charAt(0).toUpperCase()}</Avatar>

           </Grid>
           <Grid item xs={9}>
             <Typography color="textSecondary">
               {post.author.charAt(0).toUpperCase()}{post.author.substring(1)}
             </Typography>
             <Typography color="textSecondary">
               {formatDate(post.timestamp)}
             </Typography>

           </Grid>
         </Grid>
       </CardContent>
       <CardActions className={classes.cardActions}>
         <BottomNavigation
           value={value}
           onChange={this.handleChange}
           showLabels>
           <BottomNavigationAction label={`2`} icon={<InsertComment/>} classes={{ wrapper: classes.bottomNavigation}} />
           <BottomNavigationAction label={post.voteScore} icon={<ThumbUp/>} classes={{ wrapper: classes.bottomNavigation}} />
           <BottomNavigationAction icon={<Delete/>} classes={{ wrapper: classes.bottomNavigation}} color="primary"/>
         </BottomNavigation>
       </CardActions>
     </Card>
   </Grid>

  );
}

Post.propTypes = {

};

export default withStyles(styles)(Post);
