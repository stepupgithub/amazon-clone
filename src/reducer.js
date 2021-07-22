export const initialState = {
     basket: [],
     user: null,
}

// Selector
export const getBasketTotal = (basket) =>
     basket?.reduce((amount, item) => item.price + amount, 0);



const reducer = (state, action) => {
     switch(action.type) {

          // this case adds to the basket
          case 'ADD_TO_BASKET':
               return {
                    ...state,
                    basket: [...state.basket, action.item],
               };

          case 'EMPTY_BASKET':
               return {
                    ...state,
                    basket: []
               }

          
          case 'REMOVE_FROM_BASKET':

          // Finding the first element with the passed id, store the index into "index"
               const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
               );

               // Making a copy of the existing basket 
               let newBasket = [...state.basket];
               
               // splice() is same as the slice() function in python
               if(index >= 0){
                    // removes the item at position "index"
                    newBasket.splice(index, 1);

               } else {
                    console.warn(
                         `Can't remove product (id: ${action.id}) as it's not in basket!`
                    )
               }

               return {
                    ...state,
                    basket: newBasket
               }
          

          case "SET_USER":
               return {
                    ...state,
                    user: action.user
               }

          default:
                return state;
     }
};


export default reducer;