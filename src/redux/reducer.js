import { createSlice, configureStore } from "@reduxjs/toolkit"
import Shoes from '../ShoesData.json';
import { combineReducers } from '@reduxjs/toolkit'


  const initialState = Object.values(Shoes);
  console.log(initialState)


const productSlice = createSlice({
    name: "shopping cart",
    initialState: initialState,
    reducers: {
    add: (state, action) => {
             return state.map( item =>{
                 if (item.id !== action.payload.id){

                    return item;
                 }

                else{

                if(action.payload.color === "black"){ 
                 return ({

                    ...item,
                    quantity:{black: item.quantity.black +1, white: item.quantity.white}
                })

                
            }

            
            else if(action.payload.color === "white"){ 
                return ({

                   ...item,
                   quantity:{white: item.quantity.white +1, black: item.quantity.black}
               })

               
           }

           
           else { 
            return item;

           
       }
        }

        })
    },
    remove: (state, action) => {
        return state.map( item =>{
            if (item.id !== action.payload.id){

               return item;
            }

           else{

           if(action.payload.color === "black" && item.quantity.black > 0){ 
            return ({

               ...item,
               quantity:{black: item.quantity.black -1, white: item.quantity.white}
           })

           
       }

       
       else if(action.payload.color === "white" && item.quantity.white > 0){ 
           return ({

              ...item,
              quantity:{white: item.quantity.white -1, black: item.quantity.black}
          })

          
      }

      
      else { 
       return item;

      
  }
   }

   })
},

clear: (state) => {
    return state.map( item =>{
        

       return ({

        ...item,
        quantity: {white: 0, black:0}
       })


})
}

    

    }
    
})




const totalQuantity = createSlice({
    name: "Total Quantity",
    initialState: 0,
    reducers: {
        update: (state, action) =>{

            return (

                action.payload.qty
            )
        }
    }
})





const rootReducer = combineReducers({cartState:productSlice.reducer, totalQuantity:totalQuantity.reducer})

const store = configureStore({

reducer: rootReducer

})


export const { add, remove,clear } = productSlice.actions
export const { update } = totalQuantity.actions

export { productSlice, store }