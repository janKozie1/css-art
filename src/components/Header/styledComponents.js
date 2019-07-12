import styled, { keyframes, css } from 'styled-components'
import { colors } from '../cssVariables'

let blink = keyframes`
    0%{
        opacity:1;
    }

    10%{
        opacity:1;
    }
    
    20%{
        opacity:0;
    }

    70%{
        opacity:0;
    }

    80%{
        opacity:1;
    }

    100%{
        opacity:1;
    }
`
let rotation = 4
export let Header = styled.header`
    width:100%;
    min-height:50%;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    background:linear-gradient(to bottom left,${colors.primary}, ${colors.dark} );
    &:after, &:before{
        width:100%;
        position:absolute;
        
        top:98%;
        height:70px;
        background:grey;
        content:'';
        transform-origin:center center;
        background:white;
        z-index:10;
    }
    &:after{
        left:-10px;
        transform:rotate(${rotation}deg);
    }
    &:before{
        right:-10px;
        transform:rotate(-${rotation}deg);
    }
    z-index:-1;
`

export let H1 = styled.h1`
    @media screen and (max-width:560px) {
        max-width:80%;
    }
    font-size:4rem;
    color:white;
    position:relative;
    border:5px  solid ${colors.bright};
    padding:10px 20px;
    
`

export let Spacer = styled.br`
    display:none;
    @media screen and (max-width:560px) {
        display:block;
    }
`
export let Span = styled.span`
    position:relative;
    min-width:1px;
    width:max-content;
    min-height:100%;
    height:max-content;
    &::after{
        content:'';
        background:${colors.bright};
        width:6px;
        height:70%;
        position:absolute;
        right:-12px;
        top:50%;
        transform:translateY(-50%);
        animation:none;
        animation:${blink} 1.2s ease-in-out;
        animation-iteration-count: ${props => props.isChanging ? 1 : 'infinite'};
        opacity:0;
    }
`


