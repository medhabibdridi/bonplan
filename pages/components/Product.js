import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 170,
  },
});

function Product({  donne}) {
  const classes = useStyles();

    return (
        <div>
        
        <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={donne.imageUrl}
          title={donne.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {donne.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {donne.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

      
        </div>
    )
}

export default Product
