import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { store, add, remove,clear,update } from "../redux/reducer"
import { useSelector } from "react-redux"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    
  shoppingCartHeder: {

    width: "30vh",
    marginTop: "3vh",
    marginLeft: "6vh",
    marginRight: "6vh",

    textAlign: "center",
    textDecoration: "underline",
    fontSize: "5vh",
  
  
  },
  divider:{
    height: "1vh",
    backgroundColor: "black"
  },
  dividerEnd:{
    height: "0.1vh",
    backgroundColor: "grey",
    width: "42vh"
  },
  root: {
    width: '100%',
    maxWidth: '20ch',
    backgroundColor: "theme.palette.background.paper",
  },
  inline: {
    display: 'inline',
  },
  cartImg:{
    width: "11vh",
    height: "11vh"
  },
  cartTextTitle:{
    paddingTop : "2vh",
    paddingLeft : "2vh",
    width: "25vh",
    color: "blue",
    fontSize: "15vh",
    textShadow: "2px 5px 10px grey"
  
  },

  cartTextColor:{
    marginTop: "0vw",
    marginLeft: "2vh",
    width: "100%",
    marginBottom: "1vh"
  
   
  },
  cartTextPrice:{
    marginTop: "0vw",
    marginLeft: "2vh",
    color: "green",
    width: "100%",
    marginBottom: "1vh"
  },
  cardTextWrapper:{
    display: "flex",
    flexDirection: "column"
  },
  cardTextColorTitle: {
    textDecoration : "underline"
  },

  plusMinusButtons: {
    marginLeft: "10px",
    width: "5vh"
  },
  emptyCart:{
    textAlign: "center",
    fontSize: "3vh"
  },
  cartFooter:{
    textAlign :"center",
    boxShadow: "2px 5px 10px grey",
    width: "38vh",
    marginLeft: "2vh",
    marginRight: "2vh",
    marginTop: "1vh",
    paddingTop: "1vh",
    paddingBottom:"1vh"
  },

  cartFooterTextTitle:{
    fontWeight: "bold",
    fontSize: "2vh"
  },
  cartFooterTextValueQty:{
    fontWeight: "bold",
    fontSize: "2vh",
    color: "blue"
  },

  cartFooterTextValueAmount:{
    fontWeight: "bold",
    fontSize: "2vh",
    color: "green"
  },
  checkoutButton:{
    backgroundColor: "black",
    color: "white",
    fontSize: "2vh",
    marginTop: "2vh",
   marginRight: "6vh",
   marginLeft: "6vh",
    '&:hover': {
      backgroundColor: "darkgrey"

    },
  },
  clearCartButton:{
    width: "20vh",
   marginTop: "1vh",
   fontSize:"1.5vh",
    '&:hover': {
      backgroundColor: "white",
      color: "grey"
    },
  }

}));








function Cart(props) {
  const classes = useStyles();
  const reducer = useSelector((state) => state);
  const products = reducer.cartState;
  const [totalQty, setTotalQty] = React.useState(0)
  const [totalAmount, setTotalAmount] = React.useState(0)
  


  React.useEffect(()=>{
   
  let qty = 0;
  let amount =0;

      for (let i=0; i<products.length; i++){
       // if (products[i].quantity.black > 0 || products[i].quantity.white > 0){

       
         qty =  products[i].quantity.black +  products[i].quantity.white + qty;
         amount =  ( (products[i].quantity.black +  products[i].quantity.white) * products[i].price) + amount;
            //setNoItems(false);
          //  break
        //}
     //  else{
      //    console.log("oh")
       //   setNoItems(true)
       //   console.log(products[i])
      //  }

      }
      console.log(qty)
      console.log(amount)
      setTotalQty(qty)
      setTotalAmount(amount)
      store.dispatch(update({qty:qty}))
  },[products])


  return (
  
    <div >
     
     
      
     <Drawer  className = {classes.shoppingCart} anchor="right" open={props.state[0]} onClose={() => props.state[1](false)}>
        <h1 className = {classes.shoppingCartHeder} >Shopping Cart</h1>
        <Divider className = {classes.divider}/>
     
        {(totalQty === 0)? <p className = {classes.emptyCart} >Your cart is empty</p>:

        <List className={classes.root}>
      {products.map ((item,i) => {
        

        if (!(item.quantity.black === 0 && item.quantity.white ===0)){
    
          return (

 <ListItem key = {i} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar className = {classes.cartImg} src={item.img} />
        </ListItemAvatar>
        <div  className = {classes.cardTextWrapper} >
        <div className = {classes.cartTextTitle}>
        <ListItemText  primary={item.name }   />
        </div>
        <div className = {classes.cartTextPrice}>
        <ListItemText  primary={"$" + item.price * (item.quantity.black + item.quantity.white)}   />
        </div>



        {item.quantity.black > 0 &&

        <div className = {classes.cartTextColor}>
       <ListItemText className = {classes.cardTextColorTitle} primary={"Color: Black"}  />
       <div >
       Qty: {item.quantity.black}
      <button  onClick={() => store.dispatch(add({ id: i, color: "black" }))} className = {classes.plusMinusButtons} >+</button>
      <button onClick={() => store.dispatch(remove({ id: i, color: "black" }))} className = {classes.plusMinusButtons} >-</button>
       </div>
       </div>
      
       
       
       }

{item.quantity.white > 0 &&
       <div className = {classes.cartTextColor}>
       <ListItemText className = {classes.cardTextColorTitle} primary={"Color: White"}  />
       <div >
       Qty: {item.quantity.white}
      <button onClick={() => store.dispatch(add({ id: i, color: "white" }))} className = {classes.plusMinusButtons}>+</button>
      <button onClick={() => store.dispatch(remove({ id: i, color: "white" }))} className = {classes.plusMinusButtons}>-</button>
       </div>
       </div>
       }
       </div>
     

    
      </ListItem>
    
      
      


          )

        }

      return null

      })}
    

    <Divider className = {classes.dividerEnd}/>

    <div className = {classes.cartFooter}>
   <p> <span className = {classes.cartFooterTextTitle} >Total Products: </span> <span className = {classes.cartFooterTextValueQty} >{totalQty}  </span></p>
    <p><span className = {classes.cartFooterTextTitle} >Total Amount:</span> <span className = {classes.cartFooterTextValueAmount} >${totalAmount}  </span></p>
  
    <button onClick = {()=>{alert("This functionality has not been implemented yet. This is only a test site")}}   className = {classes.checkoutButton}>Proceed to check-out</button>
    <Button  className = {classes.clearCartButton} onClick={() => store.dispatch(clear())} >Clear cart</Button>
    
    </div>
      </List>

    }
      </Drawer>
   
    
    </div>
  
  );
}

export default Cart;
