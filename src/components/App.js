import React, {Component} from 'react'

import {GlobalStyle} from './global_styledComponents'

import Header from './Header/Header'

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <GlobalStyle />
                <Header />
               
            </> 
        );
    }
}
 
export default App;