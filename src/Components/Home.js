import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import nike from './images/nike-min.png';
import ronaldo from './images/ronaldo-min.png';
import messi from './images/messi-min.png';
import runner from './images/runner-min.png';
import adidas from './images/adidas-min.png';
import puma from './images/puma-min.png';
import slazenger from './images/slazenger-min.png';
import skechers from './images/skechers-min.png';
import underArmour from './images/underArmour-min.png';

const useStyles = makeStyles((theme) => ({
  homeHeading: {
    backgroundColor: 'white',
    color: 'black',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: "5vh",
    fontFamily: 'Raleway',
  fontStyle: 'normal'

  },
  
  homeImgMainContainer:{
  
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "white",
    height: "100%",
    flexDirection: "row"
   
  },

  homeImgInnerContainer:{
  
    
    backgroundColor: "black",
    width: "30vw",
    height: "50vw",
    boxShadow: "5px 5px 10px grey",
    
    borderRadius: "10px",
  
    borderColor: "rgb(50,50,50)"
  
   
  },
  homeImg1:{
    maxWidth: "35vw",
    maxHeight: "100%",
   
 
    
    
  },
  homeImg2:{
    maxWidth: "27vw",
    maxHeight: "150%"
   
    
    
  },
 
  button:{
    
    '&:hover': {
      backgroundColor: 'white', 
      color: 'black',
      border: '2px solid #FFFFF',
  },
  },
  HomeInfoContainer:{
    width : "90vw",
    
    marginLeft: "5vw",
    marginTop : "5vw",
    marginBottom: "5vh",
    backgroundColor: "black",
    display: "flex",
    flexWrap: "wrap",
    justifyContent:"center",
    alignItems: "center",
    justifyItems: "center",
    textAlign: "center",
    paddingTop: "5vh",
    boxShadow: "5px 5px 10px grey",
    
    borderRadius: "10px",
  
    borderColor: "rgb(50,50,50)"
  },
  textInfo: {
    color:"white",
    fontSize: "2vw",
    marginTop: "5vh"
  },

  homeInfoImageContainer:{

marginTop: "2vw"
  }


}));






function Home() {
  const classes = useStyles();
    return (
      <div  >
        <h1 className={classes.homeHeading} >Push your limits..</h1>
        

        <div className = {classes.homeImgMainContainer}>
      
      <div className = {classes.homeImgInnerContainer}>   <img className = {classes.homeImg1} alt = "ronaldo" src = {ronaldo}></img>    </div>
      <div  className = {classes.homeImgInnerContainer} > <img className = {classes.homeImg2} alt = "runner"  src = {runner}></img>   </div>
      <div  className = {classes.homeImgInnerContainer} > <img className = {classes.homeImg1} alt = "messi" src = {messi}></img> </div>
     
        </div>
  
      <div className = {classes.HomeInfoContainer}>
      <div className = {classes.homeInfoImageContainer}>
      <img className = {classes.homeImg1} alt = "nike" src = {nike}></img>
      <img className = {classes.homeImg1} alt = "adidas" src = {adidas}></img>
      <img className = {classes.homeImg1} alt = "puma" src = {puma}></img>
      <img className = {classes.homeImg1} alt = "slazenger" src = {slazenger}></img>
      <img className = {classes.homeImg1} alt = "skechers" src = {skechers}></img>
      <img className = {classes.homeImg1} alt = "under armour" src = {underArmour}></img>
      <p className = {classes.textInfo}>We deal with a wide variety of collections from renowned brands.</p>

      </div>

      </div>


      </div>
    );
  }
  
  export default Home;
  