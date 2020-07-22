  import React from 'react';
  import { makeStyles } from '@material-ui/core/styles';
  import AppBar from '@material-ui/core/AppBar';
  import Toolbar from '@material-ui/core/Toolbar';
  import Typography from '@material-ui/core/Typography';
  import Button from '@material-ui/core/Button';
  import logo from './logo.jpg';
  import { Link } from 'react-router-dom';
  

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: 'black'
    },
    
    title: {
      flexGrow: 1,
      marginLeft: 30

    },

    img:{

      maxWidth: 100,
      maxHeight: 100
    },
    button:{
      color: 'white',
      
      '&:hover': {
        backgroundColor: 'white', 
        color: 'black',
        border: '2px solid #FFFFF',
    },
    }
  }));
  


function Navbar() {
  const classes = useStyles();

  return (
    <div >
        
      <AppBar position="static">
        <Toolbar className={classes.root}>
        <img className={classes.img} src = {logo} alt = "logo"></img>
          <Typography variant="h6" className={classes.title}>
          
            Waris's Shoe Store
          </Typography>
          <Link  className={classes.button}  to="/"> 
          <Button className={classes.button} >Home</Button>
          </Link>
          <Link  className={classes.button} to="/Product"> 
          <Button className={classes.button}>Products</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
  }
  
  export default Navbar;
  
