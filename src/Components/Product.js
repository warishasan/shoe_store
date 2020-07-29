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
    flexWrap:'wrap',
    textAlign: "center",

    justifyContent: "center"

    
  },
  heading:{
    paddingTop : 30,
    textAlign: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    fontSize: 50,
    fontFamily: 'Raleway',
  fontStyle: 'normal'
  },
  gridContainer:{

    textAlign: "center",
    padding:"30px",
    backgroundColor: "black",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center"
  },
  link:{
    backgroundColor: "black",

  },
  grid: {
    backgroundColor: "black",
    padding: "50px"
  },
  paper: {

    backgroundColor: "rgb(245,245,245)",
    width: "500px",
    padding: "50px",
    '&:hover': {
      boxShadow: "10px 20px 100px blue"
  
  },
  },

  shoeTitle:{
    MozTextDecorationColor: "red",
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
  }



}));

function Product() {

  const classes = useStyles();
    return (

      
      <div className = {classes.root}>
        <h1 className={classes.heading}>Our Products</h1>
      <Grid container spacing={3} className={classes.gridContainer} >

        {Object.keys(Shoes).map((keyName)=> {
          const shoe = Shoes[keyName];
          return(
            <Link  className={classes.link} key = {keyName} to={`/product/${keyName}`}>
            <Grid  className={classes.grid} item xs={12} sm={4}>
            <Paper   elevated={5}  className={classes.paper}> 
            <h4 className={classes.shoeTitle}>{shoe.name}</h4>
            <img className = {classes.img} src = {shoe.img}  height={300} alt = 'shoe'></img>
            <p className = {classes.details}>{shoe.des}</p>
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
  

  

