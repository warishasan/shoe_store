import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Shoes from './../ShoesData.json';


const useStyles = makeStyles((theme) => ({
  productPageRoot: {
    
    alignItems: 'center',
    margin:'0 auto',
    display: 'flex',
    flexWrap:'wrap',
    textAlign: "center",

    justifyContent: "center"

    
  },
  productPageHeading:{
    backgroundColor: 'white',
    color: 'black',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: "5vh",
    fontFamily: 'Raleway',
  fontStyle: 'normal'
  },
  gridContainer:{

    textAlign: "center",
    padding:"30px",
    backgroundColor: "black",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
    
  },
  productPageLink:{
    backgroundColor: "black",
    textDecoration: "none"

  },
  grid: {
    backgroundColor: "black",
    padding: "50px"
  },
  paper: {

    backgroundColor: "rgb(245,245,245)",
    width: "300px",
    minHeight: "600px",
    padding: "2vw",
    '&:hover': {
      boxShadow: "0px 20px 40px blue"
  
  },
  },

  shoeTitle:{
    textDecoration: "underline",
    fontSize: "30px",
    color: "black",
    textShadow: "0px 10px 7px grey",
  
  },

  
  img:{
    width: "300px",
    height: "300px",
    
  },

  details:{
    fontSize: "20px",
    textShadow:  "0px 10px 7px grey"
  },

  price: {

    fontSize: "30px",
    color: "green"
  }



}));

function Product() {


  const classes = useStyles();
    return (

      
      <div className = {classes.productPageRoot}>
        <h1 className={classes.productPageHeading}>Our Collection</h1>
      <Grid container spacing={3} className={classes.gridContainer} >

        {Object.keys(Shoes).map((keyName)=> {
          const shoe = Shoes[keyName];
          return(
            <Link  className={classes.productPageLink} key = {keyName} to={`/product/${keyName}`}>
            <Grid  className={classes.grid} item xs={12} sm={4}>
            <Paper   elevated={5}  className={classes.paper}> 
            <h4 className={classes.shoeTitle}>{shoe.name}</h4>
            <img className = {classes.img} src = {shoe.img}  height={300} alt = 'shoe'></img>
            <p className = {classes.details}>{shoe.des}</p>
            <p className = {classes.price} > ${shoe.price} </p>
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
  

  

