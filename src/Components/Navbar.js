  import React from 'react';
  import { makeStyles } from '@material-ui/core/styles';
  import AppBar from '@material-ui/core/AppBar';
  import Toolbar from '@material-ui/core/Toolbar';
  import Typography from '@material-ui/core/Typography';
  import Button from '@material-ui/core/Button';
  import logo from './images/logo.jpg';
  import { Link } from 'react-router-dom';
  import Cart from './Cart'
  import { useSelector } from "react-redux"


  const useStyles = makeStyles((theme) => ({
    Toolbar: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: 'black',
      justifyContent: "space-between"
    },
    
    navbarTitle: {
      flexGrow: 1,
      marginLeft: "3vw",
      fontSize: "2vh",
      color: "white"

    },

    navbarImg:{

      maxWidth: "5vw"
    },

    homeContainerNavbar:{
      display:"flex",
      flexDirection: "row",
      alignItems: "center",
      textDecoration: "none"

    },

    buttonContainerNavbar:{
      textDecoration: "none"

    },

    button:{
      color: 'white',
      fontSize: "2vh",
      
      '&:hover': {
        backgroundColor: 'white', 
        color: 'black',
        border: '2px solid #FFFFF',
    },

    
    }
  }));
  


function Navbar() {
  const classes = useStyles();

  const reducer = useSelector((state) => state);
  const totalItemsInCart = reducer.totalQuantity;

  const drawer = React.useState(false);
 

  return (
    <div >
        
      <AppBar position="static">
        <Toolbar className={classes.Toolbar}>
        <div>
        <Link  className = {classes.homeContainerNavbar}  to="/"> 
        <img className={classes.navbarImg} src = {logo} alt = "logo"></img>
          <Typography variant="h6" className={classes.navbarTitle}>
          
            Waris's Shoe Store
          </Typography>
          </Link>
          </div>
         <div>
          <Link className = {classes.buttonContainerNavbar} to="/Product"> 
          <Button className={classes.button}>Products</Button>
          </Link>
        
          <Button className={classes.button} onClick = {()=>{drawer[1](true)}}> {totalItemsInCart === 0? "Cart": "Cart (" + totalItemsInCart +")" }   </Button>

          <Cart state = {drawer}></Cart>
         
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
  }
  
  export default Navbar;
  
