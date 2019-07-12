import {createGlobalStyle} from 'styled-components'

export let GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Raleway:400,400i,700&display=swap');
    html{
        width:100vw;
        height:100vh;
        min-height:100vh;
    }
    body{
        width:100vw;
        min-height:100vh;
        height:100vh;
        margin:0;
        padding:0;
        font-family:'Raleway', 'Arial';
        box-sizing:border-box;
        overflow-x:hidden;
        *{
            box-sizing:border-box;
        }
    }
    #root{
        height:100%;
        width:100%;
        position:relative;
    }
`