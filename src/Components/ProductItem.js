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
    flexGrow: 2,
    marginTop: "50px",
    
    padding: 10,
    marginBottom: 50,
    backgroundColor: "rgb(245,245,245)",
    boxShadow: "10px 10px 10px grey",
    minWidth: "550px",
    maxWidth: "550px",
    
  },
  container:{
    backgroundColor: "black",
    height: "100%",
    
  },
  box1:{
    backgroundColor: "rgb(245,245,245)",
    height: "575px",
    minWidth: "550px",
    maxWidth: "550px",
    marginTop: "50px",
    flexGrow: 3,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems:"center",
    boxShadow: "10px 10px 10px grey"
  

  },

  innerContainer:{
    backgroundColor: "black",
    marginRight: "300px",
    marginLeft: "300px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "50px",
  },

  priceTitle:{
  
    width: "100%",
    textAlign: "center",
    fontSize: "50px"
  },
  
  priceAmount:{
    
    width: "100%",
    textAlign: "center",
    textShadow: "5px 0px 5px grey",
    fontSize: "30px",
    marginTop: "-10px"
    
  },

  inStock:{
    backgroundColor: "white",
    width: "80%",
    textAlign: "center",
    boxShadow : "10px 10px 10px darkgrey",
    borderRadius: "20px",
    padding: "20px",
  
    
  },

  buttons:{
    width: "500px",
    height: "60px",
    fontSize: "30px",
    marginTop: "50px",
    backgroundColor: "black",
    color: "white",
    borderRadius: "15px",
    '&:hover': {
      backgroundColor: "darkgrey"
  
  },
  },
  footer:{
    backgroundColor:"black",
    textAlign: "center",
    color:"white",
    marginBottom: "0px",
    paddingBottom: " 10px"
    

  },

  shoeDetails:{
    textShadow: "10px 10px 10px grey",
  
  }
  
}));


function ProductItem() {
  const classes = useStyles();
  const { id } = useParams();
  console.log(id);
  const shoe = Shoes[id];

    return (
      <div className = {classes.container}>
          <h1 className = {classes.heading}>{shoe.name}</h1>
          <hr></hr>

          <div className = {classes.innerContainer}>         
          <div  className = {classes.box}>
          <img className = {classes.img} src={shoe.img} height={500} alt="shoe" />
          <p className = {classes.shoeDetails}>{shoe.des}</p>
          </div>
          <div className = {classes.box1}>
          <h1 className = {classes.priceTitle} >Price</h1>
          <h2 className = {classes.priceAmount} >{shoe.price}</h2>
          <h1 className = {classes.inStock}  >Instock : {shoe.instock}</h1>

          <button className = {classes.buttons}  >Buy Now</button>
          <button className = {classes.buttons}  >Add to Shopping Cart</button>
          
          </div>
          
          
          </div>

          <h1 className = {classes.footer}>Waris's Shoe Store - All rights reserver. Click Here to view the warranty information and privacy policy</h1>

      </div>
    );
  }
  
  export default ProductItem;
  