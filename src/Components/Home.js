import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import homePic from './homePic.jpg';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    color: 'black',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 60,
    fontFamily: 'Raleway',
  fontStyle: 'normal'
  },
  
  title: {
    flexGrow: 1,
    marginLeft: 30,
    
  },

  img:{
    backgroundColor: 'black',
    marginTop:0,
    
  },
  img1:{
    alignItems: 'right',
    paddingLeft: 600
  },
  button:{
    
    '&:hover': {
      backgroundColor: 'white', 
      color: 'black',
      border: '2px solid #FFFFF',
  },
  }
}));






function Home() {
  const classes = useStyles();
    return (
      <div  >
        <h1 className={classes.root} >Push your limits..</h1>
        <div className={classes.img}>
        <img  className={classes.img1} src = {homePic} alt = "background"></img>
        </div>
      </div>
    );
  }
  
  export default Home;
  