import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../ShoesData.json';
import { makeStyles } from '@material-ui/core/styles';
import { store, add } from "../redux/reducer"
import Cart from './Cart'


const useStyles = makeStyles((theme) => ({
  itemPageHeading: {
    backgroundColor: 'white',
    color: 'black',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: "5vh",
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    paddingBottom: "1vw"

  },


  box: {

    textAlign: 'center',

    marginTop: "1vw",

    padding: "2%",
    marginBottom: "1vw",
    backgroundColor: "rgb(245,245,245)",
    boxShadow: "10px 10px 10px grey",
    width: "60vh",

  },
  itemPageContainer: {
    backgroundColor: "black",
    height: "100%",


  },
  box1: {


    textAlign: 'center',

    marginTop: "1vw",

    padding: "2%",
    marginBottom: "1vw",
    backgroundColor: "rgb(245,245,245)",
    boxShadow: "10px 10px 10px grey",
    width: "60vh",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",



  },

  itemPageInnerContainer: {
    backgroundColor: "black",
    marginRight: "15vw",
    marginLeft: "15vw",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "3vw",
  },

  checkoutTitle: {

    width: "100%",
    textAlign: "center",
    fontSize: "5vh",
    textDecoration: "underline"
  },

  priceAmount: {

    width: "100%",
    textAlign: "center",
    textShadow: "5px 0px 5px grey",
    fontSize: "4vh"

  },

  inStock: {
    backgroundColor: "green",
    width: "60%",
    height: "8%",
    textAlign: "center",
    fontSize: "4vh",
    borderRadius: "20px",
    padding: "1vh",
    marginTop: "-1vh"

  },

  itemPageSubmitButton: {
    width: "50vh",
    height: "6vh",
    fontSize: "4vh",
    marginTop: "6vh",
    backgroundColor: "black",
    color: "white",
    borderRadius: "15px",
    '&:hover': {
      backgroundColor: "darkgrey"

    },
  },
  footer: {
    backgroundColor: "black",
    textAlign: "center",
    color: "white",
    marginBottom: "0px",
    paddingBottom: " 10px",
    fontSize: "3vh"


  },

  shoeDetails: {
    textShadow: "10px 10px 10px grey",

  },

  itemPageImg: {

    width: "50vh"
  },
  selectColorHeading: {
    fontSize: "3vh",
    textDecoration: "underline"
  },
  radioButtons: {
    padding: "1vh"
  }


}));


function ProductItem() {
  const classes = useStyles();
  const { id } = useParams();
  console.log(id);
  const shoe = Shoes[id];

  const drawer = React.useState(false);
  const [color, setColor] = React.useState("black");
  


  function submitHandler (e)  {

    e.preventDefault();
  //  setDrawerOpen(true);
       drawer[1](true);

       store.dispatch(add({ id: shoe.id, color: color }))
     
  }



  return (
    <div className={classes.itemPageContainer}>
      <h1 className={classes.itemPageHeading}>{shoe.name}</h1>
      <hr></hr>

      <div className={classes.itemPageInnerContainer}>
        <div className={classes.box}>
          <img className={classes.itemPageImg} src={shoe.img} height={500} alt="shoe" />
          <p className={classes.shoeDetails}>{shoe.des}</p>
        </div>
        <div className={classes.box1}>
          <h1 className={classes.checkoutTitle} >Buy Now</h1>

          <h2 className={classes.priceAmount} >${shoe.price}</h2>
          <h1 className={classes.inStock}  >Instock : {shoe.instock}</h1>

          <p className={classes.selectColorHeading}>Select Color</p>

          <form onSubmit = {(e) => {submitHandler(e)}}>
            <div >
              <label className={classes.radioButtons} for="black">
                <input type="radio" id="black" name="color" value="black" onChange={(e) => { setColor(e.target.value) }} required />
 Black</label>
              <label className={classes.radioButtons} for="white">
                <input type="radio" id="white" name="color" value="white" onChange={(e) => { setColor(e.target.value) }} />
 White</label>
            </div>


            <input className={classes.itemPageSubmitButton} type="submit" value="Add to Shopping Cart" />


          </form>
        </div>


      </div>

      <h1 className={classes.footer}>Waris's Shoe Store - All rights reserved. Click Here to view the warranty information and selling policy</h1>
<Cart state = {drawer}></Cart>



    </div>
  );
}

export default ProductItem;


