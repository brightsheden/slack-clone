// @flow strict

import * as React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import SideBar from './components/SideBar';
import Chat from './components/Chat';
import{ useAuthState} from 'react-firebase-hooks/auth' 
import { auth } from './firebase';
import Login from './components/Login';
import Spinner from "react-spinkit"


function App() {
  const [user, loading] = useAuthState(auth)
  if(loading){
    return(
      <AppLoading>
        <AppLoadingContent>
        <img src='https://th.bing.com/th/id/OIP.2fssRx8_6vkz0S2stwObVgHaHa?pid=ImgDet&rs=1'/>
        <Spinner name="circle" color='purple' fadeIn='none' />

                
        </AppLoadingContent>
      </AppLoading>
    )
  }
  return (
    <div>
      <Router>
        {!user ? (<Login/>):
        ( 
          <>
          <Header/>
          <AppBody>
            <SideBar/>
           
          <Switch>
            <Route path='/' exact>
           <Chat/>
            </Route>
  
  
          </Switch>
  
          </AppBody>
         
          </>
        )
        }
  
      </Router>
    
    
      
    </div>
  );
};

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;

`

const AppLoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img{
    height: 100px;
    padding: 200px;
   
  }`