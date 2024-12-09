import React from "react";
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import { PrivyProvider } from "@privy-io/react-auth";
import './index.css'
import { StateContextProvider } from "./Context/Index";
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    
    <PrivyProvider
      appId="cm438o27s018bqfdhdpf05hx1"
      config={{
    
        appearance: {
          theme: 'dark',
          
         
        },
        // Create embedded wallets for users who don't have a wallet
       
      }}
    >
        <Router>
<StateContextProvider>
      <App />
</StateContextProvider>
        </Router>
    </PrivyProvider>
 
)