import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons'
import accounting from "accounting";




const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Product() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
          action={
          <Typography
           className={classes.action}
           variant='h5'
           color='textSecondary'
           >
               {accounting.formatMoney(50, "$")}
           </Typography>
        }
        title="Zapatillas"
        subheader="In Stock"
      />
      <CardMedia
        className={classes.media}
        image="https://drive.google.com/file/d/1ZwpbEV0g8GV_2qf5yNk3IyzuKivRfe9f/view"
        title="Zapatillas"
      />
      <CardContent>
      <Typography variant= 'body2' color='textSecondary' 
           > Nike Running 2
           </Typography>
      </CardContent>
      <CardActions disableSpacing>
             <IconButton aria-label='add to Cart'>
          <AddShoppingCart/>
        </IconButton>
        {Array(4)
        .fill()
        .map((_, i) => (
          <p>&#11088;</p>
        ))}
        
          <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Marca de Zapatillas:</Typography>
          <Typography paragraph>
            Las nuevas Running 2.0 lo mejor para tus pies y tu vida
          </Typography>
          
          <Typography>
            Compra valida solo para argentina.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
