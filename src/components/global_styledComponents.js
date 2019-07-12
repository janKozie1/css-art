import {createGlobalStyle} from 'styled-components'

export let GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Raleway:400,400i,700&display=swap');
    body{
        width:100vw;
        min-height:100vh;
        height:100vh;
        margin:0;
        padding:0;
        font-family:'Raleway', 'Arial';
        box-sizing:border-box;
        *{
            box-sizing:border-box;
        }
    }
    #root{
        height:100%;
        width:100%;
    }
`