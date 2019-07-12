import React, {Component} from 'react'

import {GlobalStyle} from './global_styledComponents'

import Header from './Header/Header'
import Main from './Main/Main'

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <GlobalStyle />
                <Header />
                <Main />
            </> 
        );
    }
}
 
export default App;