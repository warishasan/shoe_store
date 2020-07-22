import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../ShoesData.json';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  heading: {
    backgroundColor: 'white',
    color: 'black',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 60,
    fontFamily: 'Raleway',
  fontStyle: 'normal'
  },
  box:{

    textAlign: 'center',
    maxWidth: 800,
    boxShadow: '0 0 10px #463636',
    alignItems: 'center',
    marginTop: 50,
    margin: 'auto',
    padding: 10,
    marginBottom: 50,
    backgroundColor: 'white'
    
  },
  text:{
    color: 'black',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'Raleway',
  fontStyle: 'normal'

  },
  img:{
    paddingBottom:50
  }
 
  
}));


function ProductItem() {
  const classes = useStyles();
  const { id } = useParams();
  console.log(id);
  const shoe = Shoes[id];

    return (
      <div >
          <h1 className = {classes.heading}>{shoe.name}</h1>
          <hr></hr>
          <div  className = {classes.box}>
          <h3 className = {classes.text}>{shoe.name}</h3>
          <img className = {classes.img} src={shoe.img} height={500} alt="shoe" />

          </div>
      </div>
    );
  }
  
  export default ProductItem;
  