import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Shoes from './../ShoesData.json';


const useStyles = makeStyles((theme) => ({
  root: {
    
    alignItems: 'center',
    margin:'0 auto',
    display: 'flex',
    flexWrap:'wrap'
    
  },
  link: {
    textAlign: 'center',
    maxWidth: '300px',
    boxShadow: '0 0 10px #463636',
    margin: "0 auto",
    padding: 50,
    
    
  },
  grid:{
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '300px',
    
    
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '300px',
    alingItems: 'center',
  
  
  },
  text:{
    paddingTop : 30,
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: 30,
    fontSize: 50,
    fontFamily: 'Raleway',
  fontStyle: 'normal'
  },
  gridContainer:{

    maxWidth: '70%',
    margin:'0 auto',
    padding: 50
  },
  text1:{
    fontSize: 20,
    fontFamily: 'Raleway',
  fontStyle: 'normal',
  color: 'black',
  
  
  '&:hover': {
    color: 'orange',
    border: '2px solid #FFFFF',
},

  }
}));

function Product() {

  const classes = useStyles();
    return (

      
      <div >
        <h1 className={classes.text}>Our Products</h1>
      <Grid container spacing={3} className={classes.gridContainer} >

        {Object.keys(Shoes).map((keyName)=> {
          const shoe = Shoes[keyName];
          return(
            <Link  className={classes.link} key = {keyName} to={`/product/${keyName}`}>
            <Grid  className={classes.grid} item xs={12} sm={4}>
            <Paper   elevated={5}  className={classes.paper}> 
            <h4  className={classes.text1}>{shoe.name}</h4>
            <img src = {shoe.img}  height={300} alt = 'shoe'></img>
            </Paper>
          </Grid>
          </Link>
          )

        }) }
      </Grid>
    </div>
    );
  }
  
  export default Product;
  

  

