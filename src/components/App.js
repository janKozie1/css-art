import React, {Component} from 'react'

import {GlobalStyle} from './global_styledComponents'

import Intro from './Intro/Intro'

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <GlobalStyle />
                <Intro />
               
            </> 
        );
    }
}
 
export default App;