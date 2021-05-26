import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../assets/Images/logo.png';
import  { ShoppingCart } from '@material-ui/icons'
import { Badge } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:"7rem",
  },
  appBar: {
      flexGrow:1,
  },
  grow: {
      flexGrow:1,
  },
  button: {
      marginleft:theme.spacing(2),
  },
  image:{
      marginRight: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
 image: {
     marginRight: "10px",
     height: "6rem",
 },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <img src={logo} className={classes.image}/>
          
          <div className={classes.grow}/>
          <Typography variant="h6" className={classes.title}>
            Bienvenido Merchado Libre
          </Typography>
          <Button variant="outlined" color="inherit" padding="1rem" margin="2rem">Ingresar</Button>
          <IconButton aria-label="show cart items" color="inherit">
              <Badge badgeContent={20} color="secondary">
              <ShoppingCart fontSize="large" color="#f5f5f5"/>
              </Badge>
                 
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
