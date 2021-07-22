import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment"
import Orders from "./Orders";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe("pk_test_51JFjyiSAVuNe7QOJusiHnh18nGPO82dpt1jU7jV72oeD5zXheJ06UxmOqFk4j5d2eWU0u4u3hlzOeHYDrICe1iXh00OIEAQJgW")

function App() {

     const [{}, dispatch] = useStateValue();

     useEffect(() => {
          // will only run once when the app component loads...

          auth.onAuthStateChanged(authUser => {
               console.log('The user is >>>', authUser);

               if(authUser)
               {
                    //the user is logged in / the user was logged in
                    dispatch({
                         type: 'SET_USER',
                         user: authUser
                    })
               }
               else
               {
                    //the user is logged out
                    dispatch({
                         type: 'SET_USER',
                         user: null
                    })
               }
          })

     }, [])



  return (
       <Router>
          <div className="app">
               <Switch>
                    
                    <Route path="/orders">
                         <Orders />
                    </Route>


                    <Route path="/payment">
                         <Header />
                         <Elements stripe={promise}>
                              <Payment />
                         </Elements>
                    </Route>


                    <Route path="/login">
                         <Login />
                    </Route>


                    <Route path="/checkout">
                         <Header />
                         <Checkout />
                    </Route>


                    {/* This is the default route. We will always ger redirected
                    this if the url does'nt matches */}
                    <Route path="/">
                         <Header />
                         <Home />
                    </Route>
                    
                    
               </Switch>
          </div>
       </Router>
  );
}

export default App;
