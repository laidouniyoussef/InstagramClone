import React, {useEffect,createContext,useReducer,useContext} from "react";
import Navbar from "./components/Navbar";
import "./App.css"
import {BrowserRouter, Route, Switch, useHistory} from "react-router-dom"
import Home from "./components/screens/Home"
import SignIn from "./components/screens/SignIn"
import Profil from "./components/screens/Profil"
import SignUp from "./components/screens/SignUp"
import UserProfil from "./components/screens/UserProfil"
import SubscribedUserPosts from './components/screens/SubscribesUserPosts'
import Reset from './components/screens/Reset'
import NewPassword from './components/screens/Newpassword'

import CreatePost from "./components/screens/CreatePost"
import {reducer, initialState} from './reducers/userReducer'

export const UserContext = createContext();


const Routing  = () => {
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
    }else{
      history.push('/signin')
    }
  },[])
  return (
  <Switch>
  
  <Route exact path="/">
      <Home />
      </Route>

      <Route exact path="/profil">
      <Profil />
      </Route>

      <Route path="/signup">
      <SignUp />
      </Route>

      <Route path="/signin">
      <SignIn />
      </Route>

      <Route path="/create">
      <CreatePost />
      </Route>

      <Route path="/profil/:userid">
      <UserProfil />
      </Route>

      <Route path="/myfollowingpost">
        <SubscribedUserPosts />
      </Route>
{/* 
        <Route exact path="/reset">
          <Reset/>
        </Route>
        <Route path="/reset/:token">
          <NewPassword />
        </Route> */}

  </Switch>
  )
}




function App() {

  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider  value={{state,dispatch}}>
    <BrowserRouter>

    <Navbar/>

    <Routing />
    
    </BrowserRouter>

    </UserContext.Provider>
    
  );
}

export default App;
